'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import data from "../../../../databaseTeste/selecaoEstudantes.json";
import SelectYearCreateButton from "../SelecaoEstudantes/SelectYearCreateButton";
import { useState } from "react";

export default function TableSelecaoEstudantes() {
  const [selectedYear, setSelectedYear] = useState(2024)
  console.log(selectedYear)

  return (
    <>
      <SelectYearCreateButton setSelectedYear={setSelectedYear} />

      <Table className="mt-4 mb-12 font-bold border-roxoHover border-2">
        <TableHeader className="bg-roxoHover">
          <TableRow className="text-white">
            <TableHead className="text-white text-center text-lg">Área</TableHead>
            <TableHead className="text-white text-center text-lg">Período</TableHead>
            <TableHead className="text-white text-center text-lg">Estudante</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {data.map((item, index) => (
            <TableRow key={item.id} className={`${index % 2 === 0 ? "bg-[#E6E1EE] hover:bg-[#eceaea]" : "bg-white hover:bg-[#eceaea]"}`}>
              <TableCell className="border-roxoHover border-r-2 w-[40%]">{item.area}</TableCell>
              <TableCell className="border-roxoHover border-r-2 py-1 w-[10%]">{item.periodo}</TableCell>
              <TableCell className="border-roxoHover border-r-2 py-1 w-[50%]">{item.estudante}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
