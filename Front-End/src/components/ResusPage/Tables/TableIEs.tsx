'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

import data from "../../../../databaseTeste/dataIEs.json";
import CheckboxsTipoIEs from "@/components/CheckboxsTipoIEs";
import { toast } from "sonner";
import { useState } from "react";
import useFilterIE from "@/hooks/useFilterIE";
import showInfoToastTipoIE from "@/utils/showInfoToastTipoIE";

export default function TableIEs() {
  const [selectedOption, setSelectedOption] = useState("")

  const handleCheckboxClick = (option: string) => {
    setSelectedOption(option)
    showInfoToastTipoIE(option)
  }

  const [filteredData, setFilteredData] = useState(data)

  useFilterIE(selectedOption, setFilteredData, data)

  return (
    <>
      <CheckboxsTipoIEs handleCheckboxClick={handleCheckboxClick} selectedOption={selectedOption} />

      <Table className="mt-4 mb-12 font-bold border-[#3C117E] border-2">
        <TableHeader className="bg-violet-900">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">Nome das IEs</TableHead>
            <TableHead className="text-white text-center text-lg">
              Tipo da IE
            </TableHead>
            <TableHead className="text-white text-center text-lg">
              Estagiários
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {filteredData.map((item, index) => (
            <TableRow
              key={item.instituicaoEnsino}
              className={`${
                index % 2 === 0
                  ? "bg-[#E6E1EE] hover:bg-[#eceaea]"
                  : "bg-white hover:bg-[#eceaea]"
              }`}
            >
              <TableCell className="border-[#3C117E] border-r-2">
                <div className="relative py-1">
                  {item.instituicaoEnsino}
                  <Image
                    src={"/images/icon-busca.png"}
                    width={30}
                    height={30}
                    alt="Ícone de Busca"
                    className="absolute -top-1 right-4"
                  />
                </div>
              </TableCell>
              <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/4">
                {item.tipoIE}
              </TableCell>
              <TableCell className="w-1/6 py-1">{item.estagiarios}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
}
