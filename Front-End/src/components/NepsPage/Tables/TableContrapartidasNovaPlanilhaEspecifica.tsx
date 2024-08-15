'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getMonthNameByNumber } from "@/utils/getMonthName";
import { useEffect, useState } from "react";

interface Props {
  view: string;
  date: string;
}

function TableContrapartidasNovaPlanilhaEspecifica({ view, date }: Props) {
  const [months, setMonths] = useState<{month: string}[]>([])
  const [dateFormatted, setDateFormatted] = useState(date)
  
  useEffect(() => {
    if(view === "mes") {
      setDateFormatted(getMonthNameByNumber(date))
    } else if(view === "semestre") {
      const numberOfSemester = date.split(".")[1]
      numberOfSemester === "1" ? setMonths([{ month: "Janeiro" }, { month: "Fevereiro" }, { month: "Março" }, { month: "Abril" }, { month: "Maio" }, { month: "Junho" }]) 
      : setMonths([{ month: "Julho" }, { month: "Agosto" }, { month: "Setembro" }, { month: "Outubro" }, { month: "Novembro" }, { month: "Dezembro" }])
    }
  }, [])
  

  return (
     <Table className="mt-20 mb-20 font-bold border-roxo border-2">
      <TableHeader className="bg-roxo">
        <TableRow className="text-white hover:bg-violet-950">
          <TableHead className="text-white text-center text-lg">Mês</TableHead>
          <TableHead className="text-white text-center text-lg">Valor Parcial</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center text-base">
        {view === "semestre" ? months.map((month, index) => (
          <TableRow key={month.month} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
            <TableCell className="border-[#3C117E] border-r-2">{month.month}</TableCell>
            <TableCell className="border-[#3C117E] border-r-2 py-1">R$ 1000,00</TableCell>
          </TableRow>
        )) : (
          <TableRow>
            <TableCell className="border-[#3C117E] border-r-2">{dateFormatted}</TableCell>
            <TableCell className="border-[#3C117E] border-r-2 py-1">R$ 1000,00</TableCell>
          </TableRow>
        )}
        
      </TableBody>

      <TableFooter>
        <TableRow className="bg-roxoHover text-white text-center hover:bg-roxoHover text-base">
          <TableCell className="border-[#3C117E] border-r-2 py-4">Valores Totais</TableCell>
          <TableCell className="border-[#4C117E] border-r-2 py-4">R$ 1000,00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default TableContrapartidasNovaPlanilhaEspecifica