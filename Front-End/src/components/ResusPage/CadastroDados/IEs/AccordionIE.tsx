import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ModalEdicaoIE from "./ModalEdicaoIE";

interface Props {
  index: number;
  item: InstituicaoEnsinoType;
}

export default function AccordionIE({ index, item }: Props) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <AccordionItem value={`item-${index+1}`} key={index+1}>
        <div className="w-full px-8 pr-20 bg-white border border-b-roxoClaro transition-all hover:bg-[#f8f6f6] data-[state=open]:bg-[#f0ecec] relative">
          <AccordionTrigger className="flex w-full py-6 justify-between">
            <span className="font-bold pl-8 w-full justify-between flex">{item.instituicao_ensino}</span>
          </AccordionTrigger>

          <div className="flex gap-6 py-6 absolute top-1 right-9">
            <Image width={22} height={22} src={"/images/editar-roxo.png"} alt="Ícone de Editar" onClick={() => setModalOpen(true)} className="cursor-pointer" title="Abrir formulário de edição" />
          </div>
        </div>
       
        <AccordionContent className="flex flex-col font-semibold">
          <div className="flex justify-between flex-wrap gap-4 pt-5 py-6 border-b-2 border-b-roxoClaro px-16">
            <p>Número do Convênio: <span className="text-roxo font-bold">{item.numero_convenio}</span></p>
            <p>Data da Assinatura: <span className="text-roxo font-bold">{item.data_assinatura}</span></p>
            <p>Publicação do DOE/PB: <span className="text-roxo font-bold">{item.publicacao_doe_pb}</span></p>
          </div>

          <div className="flex justify-between py-6 px-16 border-b-2 border-b-roxoClaro">
            <p>Cidade: <span className="text-roxo font-bold">{item.cidade}</span></p>
            <p>Macrorregião: <span className="text-roxo font-bold">{item.macrorregiao}</span></p>
          </div>

          <div className="flex justify-between pb-5 py-6 px-16 border-b-2 border-b-roxoClaro flex-wrap gap-4">
            <div className="flex flex-col">
              <p className="text-[1.03rem]">Responsáveis:</p> 
              <div className="flex flex-col mt-2 text-roxo font-bold">
                {item.nome_segundo_responsavel ? (
                  <>
                    <span>{item.nome_responsavel}</span>
                    <span>{item.nome_segundo_responsavel}</span>
                  </>
                ) : (
                  <span>{item.nome_responsavel}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[1.03rem]">Contato:</p> 
              <div className="flex flex-col mt-2 text-roxo font-bold">
                {item.contato_segundo_responsavel ? (
                  <>
                    <span>{item.contato_responsavel}</span>
                    <span>{item.contato_segundo_responsavel}</span>
                  </>
                ) : (
                  <span>{item.contato_responsavel}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[1.03rem]">E-mail:</p> 
              <div className="flex flex-col mt-2 text-roxo font-bold">
                {item.email_segundo_responsavel ? (
                  <>
                    <span>{item.email_responsavel}</span>
                    <span>{item.email_segundo_responsavel}</span>
                  </>
                ) : (
                  <span>{item.email_responsavel}</span>
                )}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {modalOpen && (
        <ModalEdicaoIE isOpen={modalOpen} onClose={() => setModalOpen(false)} item={item} />
      )}
    </>
  )
}