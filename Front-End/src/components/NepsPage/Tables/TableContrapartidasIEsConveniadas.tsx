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

import data from '../../../../databaseTeste/dataIEs.json'
import { useEffect, useState } from "react";
import useFilterIE from "@/hooks/useFilterIE";

interface Props {
  year: number;
  filter: string;
}

export default function TableContrapartidasIEsConveniadas({ year, filter }: Props) {
  const [filteredData, setFilteredData] = useState(data)

  useFilterIE(filter, setFilteredData, data)

  return (
    <>
      <Table className="mt-4 mb-16 font-bold border-[#3C117E] border-2">
        <TableHeader className="bg-violet-900">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">Instituições de Ensino</TableHead>
            <TableHead className="text-white text-center text-lg">{year}.1</TableHead>
            <TableHead className="text-white text-center text-lg">{year}.2</TableHead>
            <TableHead className="text-white text-center text-lg">Valor Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {filteredData.map((item, index) => ( 
            <TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
              <TableCell className="border-[#3C117E] border-r-2">{item.instituicaoEnsino}</TableCell>
              <TableCell className="border-[#3C117E] border-r-2">R$ 500</TableCell>
              <TableCell className="border-[#3C117E] border-r-2">R$ 500</TableCell>
              <TableCell className="border-[#3C117E] border-r-2">R$ 1000</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow className="bg-roxoHover text-white text-center hover:bg-roxoHover text-base">
            <TableCell className="border-[#3C117E] border-r-2 py-4">Valores Totais</TableCell>
            <TableCell className="border-[#4C117E] border-r-2 py-4">R$ 1000,00</TableCell>
            <TableCell className="border-[#4C117E] border-r-2 py-4">R$ 1000,00</TableCell>
            <TableCell className="border-[#4C117E] border-r-2 py-4">R$ 1000,00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}