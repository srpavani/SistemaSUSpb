"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { FormEdicaoIE1Etap, FormEdicaoIE2Etap } from "./Formularios/FormEdicaoIE";
import { FaChevronLeft } from "react-icons/fa6";
import { IESchemaType, ieSchema } from "@/schemas/ieSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: InstituicaoEnsinoType;
}

function ModalEdicaoIE({ isOpen, onClose, item }: ModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<IESchemaType>({
    defaultValues: {
      instituicao_ensino: item.instituicao_ensino,
      numero_convenio: item.numero_convenio,
      data_assinatura: item.data_assinatura,
      publicacao_doe_pb: item.publicacao_doe_pb,
      cidade: item.cidade,
      macrorregiao: item.macrorregiao,
      nome_responsavel: item.nome_responsavel,
      contato_responsavel: item.contato_responsavel,
      email_responsavel: item.email_responsavel,
      nome_segundo_responsavel: item.nome_segundo_responsavel || "",
      contato_segundo_responsavel: item.contato_segundo_responsavel || "",
      email_segundo_responsavel: item.email_segundo_responsavel || ""
    },
    resolver: zodResolver(ieSchema)
  })
  const [openEditForm, setOpenEditForm] = useState(false)
  const [etapForm, setEtapForm] = useState(1)
  const [textConfirmation, setTextConfirmation] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, isOpen, onClose)

  const onSubmit = (data: any) => {
    console.log(data)

    if(data) {
      toast.success("IE editada com sucesso", { position: 'top-right' })
      onClose()
    }
  }

  return (
    <>
      <Dialog open={isOpen} >
        <DialogContent className={`bg-roxoClaro ${openEditForm ? 'h-[38rem] overflow-y-scroll' : textConfirmation ? 'h-[39rem]' : 'h-[28rem]'} flex flex-col py-8 text-center`} ref={ref} id="dialog-content-top">

          <Image
            src={"/images/Logo_fundo_Transparente.png"} width={214} height={140}
            alt="Logo ESP - PB" className="mx-auto"
          />
          <h2 className="-mt-8 text-center tracking-wide font-semibold text-[1.2rem] mb-6">Edição da IE</h2>

          {!openEditForm && (
            <div className="bg-white py-9 rounded-lg flex flex-col gap-6 items-center mx-auto w-[25rem]">
              <button type="button" className="bg-roxo text-white py-3 px-6 w-72 rounded-lg relative transition-all hover:bg-violet-800" onClick={() => setOpenEditForm(true)}>
                <Image width={22} height={22} src={"/images/edicao-branco.png"} alt="Ícone Edição" className="absolute top-[0.85rem] left-2" />
                Editar informações da IE
              </button>
              
              <button type="button" className="bg-[#7E1111] text-white py-3 px-6 w-72 rounded-lg relative transition-all hover:bg-[#963838]" onClick={() => setTextConfirmation(true)}>
                <Image width={22} height={22} src={"/images/icon-lixeira.png"} alt="Ícone Lixeira" className="absolute top-[0.85rem] left-2" />
                Apagar IE
              </button>
              {textConfirmation && (
                <div className="border-t-2 border-t-roxoClaro flex flex-col items-center gap-4 pt-6">
                  <p>Tem certeza que deseja apagar essa IE?</p>
                  <p className="font-sm font-bold -mt-2 italic">{item.instituicao_ensino}</p>
                  <div className="flex gap-4 mt-2">
                    <button className="bg-roxo text-white py-2 px-4 rounded hover:bg-violet-800" onClick={() => console.log('clicou em apagar IE')}>Sim</button>
                    <button onClick={() => setTextConfirmation(false)} className="bg-[#7E1111] text-white py-2 px-4 rounded hover:bg-red-800">Cancelar</button>
                  </div>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {openEditForm && etapForm === 1 ? (
              <>
                <FormEdicaoIE1Etap register={register} errors={errors} />
                <div className="flex justify-end">
                  <p className="flex items-center text-roxo mt-6 cursor-pointer font-bold hover:text-violet-700" title="Ir para a próxima etapa do formulário" onClick={() => setEtapForm(2)}>Avançar <ChevronRight /></p>
                </div>
              </>
            ) : etapForm === 2 && (
              <>
                <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(1)} />
                <FormEdicaoIE2Etap register={register} item={item} errors={errors} />

                <button type="submit" className="bg-roxo text-white py-3 px-12 rounded-lg mt-8 transition-all hover:bg-violet-800">Salvar Alterações</button>
              </>
            )}
          </form>
          
          <Image
            src={"/images/icon-xmark.png"} width={25} height={25} alt="Ícone fechar"
            className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700"
            onClick={onClose} title="Fechar modal"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ModalEdicaoIE;