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

import data from '../../../../databaseTeste/dataNEPS.json'
import { useEffect, useState } from "react";
import { getMonthNameByNumber } from "@/utils/getMonthName";

interface Props {
  view: string;
  date: string;
}

export default function TableContrapartidasBalancoTotalNEPS({ view, date }: Props) {
  const [isYear, setIsYear] = useState(false)

  useEffect(() => {
    if(view === "ano") setIsYear(true)
  }, [])
  
  return (
    <Table className="mt-20 mb-20 font-bold border-roxo border-2">
      <TableHeader className="bg-roxo">
        <TableRow className="text-white hover:bg-violet-950">
          <TableHead className="text-white text-center text-lg">Serviços de Saúde</TableHead>
          <TableHead className="text-white text-center text-lg">Valor Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center text-sm2">
        {data.map((item, index) => ( 
          <TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
            <TableCell className="border-[#3C117E] border-r-2">
              <div className="py-1">
                {item.neps}
              </div>
            </TableCell>
            <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-roxoHover text-white text-center hover:bg-roxoHover text-base">
          <TableCell className="border-[#3C117E] border-r-2 py-6 text-[1.05rem] font-bold">Valores Totais</TableCell>
          <TableCell className="border-[#3C117E] border-r-2 py-6 w-1/6 text-[1.05rem] font-bold">R$ 1300,00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}