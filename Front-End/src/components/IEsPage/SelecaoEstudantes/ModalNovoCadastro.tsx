'use client'

import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog"

import Image from "next/image";
import { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const areas = [
  {text: "Estágio Supervisionado", value: "estagio_supervisionado"},
  {text: "Atividades Práticas", value: "atividades_praticas"},
  {text: "Visita Técnica", value: "visita_tecnica"},
  {text: "Residências - Rodizios", value: "residencias_rodizios"},
  {text: "Atividades de Extensão Universitária", value: "atividades_extensao_universitaria"},
]

function ModalNovoCadastro({ isOpen, onClose }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useOutsideClick(ref, isOpen, onClose)

  const handleClick = (area: string) => {
    if(!area) return
    console.log(area)
    if(area === "estagio_supervisionado") {
      router.push("/home-ies/selecao-estudantes/cadastroEstudante-estagio-supervisionado")
    } else if(area === "residencias_rodizios") {
      router.push("/home-ies/selecao-estudantes/cadastroEstudante-residencia-rodizio")
    } else {
      router.push("/home-ies/selecao-estudantes/cadastroEstudante-atividades-geral")
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-roxoClaro min-h-[38rem] flex flex-col py-8" ref={ref}>
        <Image src={"/images/Logo_fundo_Transparente.png"} width={214} height={140} alt="Logo ESP - PB" className="mx-auto"/>
        <h2 className="-mt-8 text-center tracking-wide font-semibold text-xl mb-6">Novo Cadastro</h2>
        

        <div className="flex flex-col gap-4 mx-auto items-center bg-white pt-3 pb-8 rounded-lg w-[28rem]">
          <p className="font-bold text-lg text-center mt-4">Selecione a Área</p>

          {areas.map(area => (
            <button 
              type="button"  onClick={() => handleClick(area.value)}
              className="bg-[#3C117E] text-white w-[22rem] py-3 rounded-lg font-bold border-roxo transition duration-300 hover:bg-violet-800"
            >
              {area.text}
            </button>
          ))}
        </div>

        <Image 
          src={"/images/icon-xmark.png"}  
          width={25} height={25} alt="Ícone fechar" 
          className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700" 
          onClick={onClose}
          title="Fechar modal"
        />
      </DialogContent>
    </Dialog>
  )
}

export default ModalNovoCadastro