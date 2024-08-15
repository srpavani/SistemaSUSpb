'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getMonthNameByNumber } from "@/utils/getMonthName";
import { useEffect, useState } from "react";

interface Props {
  view: string;
  date: string;
  nep: { id: number, neps: string, regiao: string };
}

function TableVisualizacaoContrapartidaEspecifica({ view, date, nep }: Props) {
  const [isYear, setIsYear] = useState(false)
  let dateFormatted = date
  
  if(view === "mes") dateFormatted = getMonthNameByNumber(date)
 
  useEffect(() => {
    if(view === "ano") setIsYear(true)
  }, [])

  return (
     <Table className="mt-20 mb-20 font-bold border-roxo border-2">
      <TableHeader className="bg-roxo">
        <TableRow className="text-white hover:bg-violet-950">
          <TableHead className="text-white text-center text-lg">Serviço de Saúde</TableHead>
          {isYear && (
            <>
              <TableHead className="text-white text-center text-lg">{dateFormatted}.1</TableHead>
              <TableHead className="text-white text-center text-lg">{dateFormatted}.2</TableHead>
            </>
          )}
          
          <TableHead className="text-white text-center text-lg">Valor Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center text-sm2">
        <TableRow>
          <TableCell className="border-[#3C117E] border-r-2">
            <div className="py-1">
              {nep.neps}
            </div>
          </TableCell>
          {isYear ? (
            <>
            <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
            <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
            <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
            </>
          ) : (
            <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TableVisualizacaoContrapartidaEspecifica