"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import {  useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { FormCadastroIE1Etap, FormCadastroIE2Etap, FormCadastroIE3Etap } from "./Formularios/FormCadastroIE";
import { FaChevronLeft, FaCircleInfo } from "react-icons/fa6";
import usePressArrowKey from "@/hooks/usePressArrowKey";
import { IESchemaType, ieSchema } from "@/schemas/ieSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalCadastrarIE({ isOpen, onClose }: ModalProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IESchemaType>({
    resolver: zodResolver(ieSchema)
  })
  const [etapForm, setEtapForm] = useState(1)
  const [selectedOption, setSelectedOption] = useState("sim")
  const [showInfo, setShowInfo] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, isOpen, onClose)
  usePressArrowKey(etapForm, setEtapForm, 3)

  const onSubmit = (data: any) => {
    console.log(data)

    if(data) {
      toast.success("IE cadastrada com sucesso", { position: 'top-right' })
      reset()
      onClose()
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-roxoClaro h-[38rem] overflow-y-scroll flex flex-col py-8 text-center" ref={ref} id="dialog-content-top">
        <Image
          src={"/images/Logo_fundo_Transparente.png"} width={214} height={140}
          alt="Logo ESP - PB" className="mx-auto"
        />
        <h2 className="-mt-8 text-center tracking-wide font-semibold text-[1.05rem]">Adicionar Nova IE</h2>
        {etapForm === 2 ? <p className="font-bold text-roxo text-[1.05rem]">Dados do Responsável</p> : etapForm === 3 && <p className="font-bold text-roxo text-[1.05rem]">Dados do 2° Responsável</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {etapForm === 1 ? (
            <FormCadastroIE1Etap register={register} errors={errors} />
          ) : etapForm === 2 ? (
            <>
              <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(1)} />
              <FormCadastroIE2Etap register={register} selectedOption={selectedOption} setSelectedOption={setSelectedOption} errors={errors} />
            </>
          ) : (
            <>
              <FaChevronLeft className="absolute top-8 text-2xl text-roxo cursor-pointer" title="Voltar para a etapa anterior do formulário" onClick={() => setEtapForm(2)} />
              <FormCadastroIE3Etap register={register} errors={errors} />
            </>
          )}
         
          {selectedOption === "nao" && etapForm === 2 && <button type="submit" className="bg-roxo text-white py-3 px-12 rounded-lg mt-7 transition-all hover:bg-violet-800">Adicionar IE</button>}
          {etapForm === 3 && <button type="submit" className="bg-roxo text-white py-3 px-12 rounded-lg mt-10 transition-all hover:bg-violet-800">Adicionar IE</button>}
        </form>

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-2">
            <span className="text-xl text-roxo" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
              <FaCircleInfo />
            </span>
            {showInfo && <span className="text-sm text-black z-50">Pressione "{"<"}" e "{">"}" para trocar de página</span>}
          </div>

          {etapForm === 1 && (
            <p className="flex items-center text-roxo cursor-pointer font-bold hover:text-violet-700" title="Ir para a próxima etapa do formulário" onClick={() => setEtapForm(2)}>Avançar <ChevronRight /></p>
          )}
          {selectedOption === "sim" && etapForm === 2 && (
            <p className="flex items-center text-roxo cursor-pointer font-bold hover:text-violet-700" title="Ir para a próxima etapa do formulário" onClick={() => setEtapForm(3)}>Avançar <ChevronRight /></p>
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

export default ModalCadastrarIE;