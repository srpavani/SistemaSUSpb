"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { FaChevronLeft, FaCircleInfo } from "react-icons/fa6";
import { FormEdicaoNEP1Etap, FormEdicaoNEP2Etap, FormEdicaoNEP3Etap } from "./Formularios/FormEdicaoNEP";
import usePressArrowKey from "@/hooks/usePressArrowKey";
import { toast } from "sonner";
import { NEPSchemaType, nepSchema } from "@/schemas/nepSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: NEPType;
}

function ModalEdicao({ isOpen, onClose, item }: ModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<NEPSchemaType>({
    defaultValues: {
      nep: item.nep,
      regiao_saude: item.regiao_saude,
      municipio: item.municipio,
      nome_diretor: item.nome_diretor,
      telefone_servico: item.telefone_servico,
      email_direcao_geral: item.email_direcao_geral,
      nome_responsavel: item.nome_responsavel,
      contato_responsavel: item.contato_responsavel,
      email_responsavel: item.email_responsavel
    },
    resolver: zodResolver(nepSchema)
  })
  const [openEditForm, setOpenEditForm] = useState(false)
  const [etapForm, setEtapForm] = useState(1)
  const [textConfirmation, setTextConfirmation] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, isOpen, onClose)

  const onSubmit = (data: any) => {
    console.log(data)
    if(data) {
      toast.success("NEP editada com sucesso", { position: 'top-right' })
      onClose()
    } 
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className={`bg-roxoClaro ${openEditForm ? 'h-[38rem] overflow-y-scroll' : textConfirmation ? 'h-[39rem]' : 'h-[28rem]'} flex flex-col py-8 text-center`} ref={ref} id="dialog-content-top">

        <Image
          src={"/images/Logo_fundo_Transparente.png"} width={214} height={140}
          alt="Logo ESP - PB" className="mx-auto"
        />
        <h2 className="-mt-8 text-center tracking-wide font-semibold text-[1.20rem]">Edição de NEP</h2>
        <p className="font-bold text-roxo text-[1.05rem] mb-4">{etapForm === 2 ? "Dados do Diretor(a) Geral" :  etapForm === 3 && "Dados do Representante do NEP"}</p>

        {!openEditForm && (
          <div className="bg-white py-9 rounded-lg flex flex-col gap-6 items-center mx-auto w-[25rem]">
            <button type="button" className="bg-roxo text-white py-3 px-6 w-72 rounded-lg relative transition-all border-none hover:bg-violet-800" onClick={() => setOpenEditForm(true)}>
              <Image width={22} height={22} src={"/images/edicao-branco.png"} alt="Ícone Edição" className="absolute top-[0.85rem] left-2" />
              Editar informações da NEP
            </button>
            <button type="button" className="bg-[#7E1111] text-white py-3 px-6 w-72 border-none rounded-lg relative transition-all hover:bg-[#963838]" onClick={() => setTextConfirmation(true)}>
              <Image width={22} height={22} src={"/images/icon-lixeira.png"} alt="Ícone Lixeira" className="absolute top-[0.85rem] left-2" />
              Apagar NEP
            </button>

            {textConfirmation && (
              <div className="border-t-2 border-t-roxoClaro flex flex-col items-center gap-4 pt-6">
                <p>Tem certeza que deseja apagar essa NEP?</p>
                <p className="font-sm font-bold -mt-2 italic">{item.nep}</p>
                <div className="flex gap-4 mt-2">
                  <button className="bg-roxo text-white py-2 px-4 rounded hover:bg-violet-800" onClick={() => console.log('clicou em apagar NEP')}>Sim</button>
                  <button onClick={() => setTextConfirmation(false)} className="bg-[#7E1111] text-white py-2 px-4 rounded hover:bg-red-800">Cancelar</button>
                </div>
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {openEditForm && etapForm === 1 ? (
            <FormEdicaoNEP1Etap register={register} errors={errors} />
          ) : etapForm === 2 ? (
            <>
              <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(1)} />
              <FormEdicaoNEP2Etap register={register} errors={errors} />
            </>
          ) : etapForm === 3 && (
            <>
              <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(2)} />
              <FormEdicaoNEP3Etap register={register} errors={errors} />

              <button type="submit" className="bg-roxo text-white py-3 px-12 rounded-lg mt-8 transition-all hover:bg-violet-800">Salvar Alterações</button>
            </>
          )}
        </form>

        <div className="flex justify-end">
          {openEditForm && (etapForm === 1 || etapForm === 2) && (
            <p className="flex items-center text-roxo mt-4 cursor-pointer font-bold hover:text-violet-700" title="Ir para a próxima etapa do formulário" onClick={() => setEtapForm(etapForm + 1)}>Avançar <ChevronRight /></p>
          )}
        </div>
        
        <Image
          src={"/images/icon-xmark.png"} width={25} height={25} alt="Ícone fechar"
          className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700"
          onClick={onClose} title="Fechar modal"
        />
      </DialogContent>
    </Dialog>
  );
}

export default ModalEdicao;