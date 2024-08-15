import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ModalEdicao from "./ModalEdicaoNEP";

interface Props {
  index: number;
  item: NEPType;
}

export default function AccordionNEP({ index, item }: Props) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <AccordionItem value={`item-${index+1}`} key={index+1}>
        <div className="w-full px-8 flex justify-between bg-white border border-b-roxoClaro transition-all hover:bg-[#f8f6f6] data-[state=open]:bg-[#f0ecec]">
          <AccordionTrigger className="flex-grow text-left py-6 ">
            <span className="font-bold pl-8">{item.nep}</span>
          </AccordionTrigger>

          <div className="flex gap-6 py-6">
            <FaChevronDown />
            <Image width={22} height={22} src={"/images/editar-roxo.png"} alt="Ícone de Editar" onClick={() => setModalOpen(true)} className="cursor-pointer" title="Abrir formulário de edição" />
          </div>
        </div>
       

        <AccordionContent className="flex flex-col font-semibold">
          <div className="flex justify-evenly flex-wrap gap-4 pt-5 py-6 border-b-2 border-b-roxoClaro px-16">
            <p>Região de Saúde: <span className="text-roxo font-bold">{item.regiao_saude}</span></p>
            <p>Município: <span className="text-roxo font-bold">{item.municipio}</span></p>
          </div>

          <div className="flex justify-center py-6 px-16 border-b-2 border-b-roxoClaro font-bold flex-wrap gap-4">
            <p className="text-[1.03rem] flex flex-col gap-4 w-[32%] text-center">Diretor(a) Geral: <span className="text-roxo font-bold">{item.nome_diretor}</span></p>

            <p className="text-[1.03rem] flex flex-col gap-4 w-[32%] text-center">E-mail da Direção Geral: <span className="text-roxo font-bold">{item.email_direcao_geral}</span></p>

            <p className="text-[1.03rem] flex flex-col gap-4 w-[32%] text-center">Telefone de Serviço: <span className="text-roxo font-bold">{item.telefone_servico}</span></p>
          </div>

          <div className="flex justify-center pb-5 py-6 px-16 border-b-2 border-b-roxoClaro font-bold flex-wrap gap-4">
            <p className="text-[1.03rem] flex flex-col gap-4 w-[32%] text-center">Responsável do NEP: <span className="text-roxo font-bold">{item.nome_responsavel}</span></p> 

            <p className="text-[1.03rem] flex flex-col gap-4 w-[32%] text-center">Telefone do Responsável: <span className="text-roxo font-bold">{item.contato_responsavel}</span></p> 

            <p className="text-[1.03rem] flex flex-col gap-4 w-[32%] text-center">E-mail do Responsável: <span className="text-roxo font-bold">{item.email_responsavel}</span></p> 
          </div>
        </AccordionContent>
      </AccordionItem>

      {modalOpen && (
        <ModalEdicao isOpen={modalOpen} onClose={() => setModalOpen(false)} item={item} />
      )}
    </>
  )
}