'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

import data from '../../../../databaseTeste/dataIEs.json'
import { useState } from "react";
import ModalIE from "../Contrapartidas/ModalIE";
import showInfoToastTipoIE from "@/utils/showInfoToastTipoIE";
import useFilterIE from "@/hooks/useFilterIE";
import CheckboxsTipoIEs from "@/components/CheckboxsTipoIEs";

function TableContrapartidasIEsBalanco() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [id, setId] = useState(0)
  const [selectedOption, setSelectedOption] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const handleCheckboxClick = (option: string) => {
    setSelectedOption(option)
    showInfoToastTipoIE(option)
  }

  useFilterIE(selectedOption, setFilteredData, data)
  
  const handleClick = (id: number) => {
    setModalOpen(true)
    setId(id)
  }
  
  return (
    <>
      <CheckboxsTipoIEs handleCheckboxClick={handleCheckboxClick} selectedOption={selectedOption} />

      <Table className="mt-6 mb-16 font-bold border-roxo border-2">
        <TableHeader className="bg-roxo">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">Clique na IE para gerar um balanço</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {filteredData.map((item, index) => ( 
            <TableRow 
              key={item.id} 
              className={`cursor-pointer ${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}
              onClick={() => handleClick(item.id)}
            >
              <TableCell className="border-[#3C117E] border-r-2">
                <div className="relative py-1">
                  {item.instituicaoEnsino}
                  <Image src={"/images/icon-busca.png"} width={30} height={30} alt="Ícone de Busca" className="absolute -top-1 right-4"/>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {modalOpen && (
        <ModalIE isOpen={modalOpen} id={id} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

export default TableContrapartidasIEsBalanco