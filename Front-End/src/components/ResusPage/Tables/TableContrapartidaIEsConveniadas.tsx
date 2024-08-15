'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import data from '../../../../databaseTeste/dataIEs.json'
import { useEffect, useState } from "react";
import { getMonthNameByNumber } from "@/utils/getMonthName";
import showInfoToastTipoIE from "@/utils/showInfoToastTipoIE";
import useFilterIE from "@/hooks/useFilterIE";
import CheckboxsTipoIEs from "@/components/CheckboxsTipoIEs";

interface Props {
  view: string;
  date: string;
}

function TableContrapartidaIEsConveniadas({ view, date }: Props) {
  const [isYear, setIsYear] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const handleCheckboxClick = (option: string) => {
    setSelectedOption(option)
    showInfoToastTipoIE(option)
  }

  useFilterIE(selectedOption, setFilteredData, data)
  
  useEffect(() => {
    if(view === "ano") setIsYear(true)
  }, [])

  return (
    <>
      <CheckboxsTipoIEs handleCheckboxClick={handleCheckboxClick} selectedOption={selectedOption} />

      <Table className="mt-6 mb-20 font-bold border-roxo border-2">
        <TableHeader className="bg-roxo">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">Instituições de Ensino</TableHead>
            {isYear ? (
              <>
                <TableHead className="text-white text-center text-lg">{date}.1</TableHead>
                <TableHead className="text-white text-center text-lg">{date}.2</TableHead>
              </>
            ) : (
              <TableHead className="text-white text-center text-lg">{date}</TableHead>
            )}
            <TableHead className="text-white text-center text-lg">Valor Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {filteredData.map((item, index) => ( 
            <TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
              <TableCell className="border-[#3C117E] border-r-2">
                <div className="py-1">
                  {item.instituicaoEnsino}
                </div>
              </TableCell>
              {isYear ? (
                <>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 200,00</TableCell>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 300,00</TableCell>
                </>
              ) : (
                <>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          <TableRow className="bg-roxoHover text-white text-center hover:bg-roxoHover text-base">
            {isYear ? (
              <>
                <TableCell className="border-[#3C117E] border-r-2 py-6">Valores Totais</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-6 w-1/6">R$ 1500,00</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-6 w-1/6">R$ 3000,00</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-6 w-1/6">R$ 4500,00</TableCell>
              </>
            ) : (
              <>
                <TableCell className="border-[#3C117E] border-r-2 py-6">Valores Totais</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-6 w-1/6">R$ 1500,00</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-6 w-1/6">R$ 1500,00</TableCell>
              </>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default TableContrapartidaIEsConveniadas