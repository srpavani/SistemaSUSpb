"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import {  useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FormCadastroNEP1Etap, FormCadastroNEP2Etap, FormCadastroNEP3Etap } from "./Formularios/FormCadastroNEP";
import { toast } from "sonner";
import usePressArrowKey from "@/hooks/usePressArrowKey";
import { NEPSchemaType, nepSchema } from "@/schemas/nepSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalCadastrarNEP({ isOpen, onClose }: ModalProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NEPSchemaType>({
    resolver: zodResolver(nepSchema)
  })
  const [showInfo, setShowInfo] = useState(false)
  const [etapForm, setEtapForm] = useState(1)

  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, isOpen, onClose)
  usePressArrowKey(etapForm, setEtapForm, 3)

  const onSubmit = (data: any) => {
    console.log(data)

    if(data) {
      toast.success("NEP adicionada com sucesso!", { position: 'top-right' })
      onClose()
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-roxoClaro h-[40rem] overflow-y-scroll flex flex-col py-8 text-center justify-between" ref={ref} id="dialog-content-top">
        <Image
          src={"/images/Logo_fundo_Transparente.png"} width={214} height={140}
          alt="Logo ESP - PB" className="mx-auto"
        />
        <h2 className="-mt-8 -mb-2 text-center tracking-wide font-medium text-[1.05rem]">Adicionar Nova NEP</h2>
        <p className="font-bold text-roxo text-[1.05rem] mb-4">{etapForm === 2 ? "Dados do Diretor(a) Geral" :  etapForm === 3 && "Dados do Representante do NEP"}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {etapForm === 1 ? (
            <FormCadastroNEP1Etap register={register} errors={errors} />
          ) : etapForm === 2 ? (
            <>
              <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(1)} />
              <FormCadastroNEP2Etap register={register} errors={errors} />
            </>
          ) : (
            <>
              <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(2)} />
              <FormCadastroNEP3Etap register={register} errors={errors} />
            </>
          )}
         
          {etapForm === 3 && <button type="submit" className="bg-roxo text-white py-3 px-12 rounded-lg mt-7 transition-all hover:bg-violet-800">Adicionar NEP</button>}
        </form>

        <div className="flex justify-between items-end mt-6">
          <div className="flex gap-2">
            <span className="text-xl text-roxo" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
              <FaCircleInfo />
            </span>
            {showInfo && <span className="text-sm text-black z-50">Pressione "{"<"}" e "{">"}" para trocar de página</span>}
          </div>

          {(etapForm === 1 || etapForm === 2) && (
            <p className="flex items-center text-roxo cursor-pointer font-bold hover:text-violet-700" title="Ir para a próxima etapa do formulário" onClick={() => setEtapForm(etapForm + 1)}>Avançar <ChevronRight /></p>
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

export default ModalCadastrarNEP;