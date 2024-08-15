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

import data from '../../../../../databaseTeste/cursos2.json'
import { useState } from "react";
import ModalEdicaoCurso from "./ModalEdicaoCurso";

export default function TableCursos() {
  const [modalEditOpen, setModalEditOpen] = useState<boolean>(false)
  const [item, setItem] = useState<CursoType>()
  
  const handleClick = (item: CursoType) => {
    setModalEditOpen(true)
    setItem(item)
  }
  
  return (
    <>
      <Table className="mt-6 mb-16 font-bold border-roxo border-2">
        <TableHeader className="bg-roxoHover">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg border-[#3C117E] border-r-2">Curso</TableHead>
            <TableHead className="text-white text-center text-lg border-[#3C117E] border-r-2">INOC (R$)</TableHead>
            <TableHead className="text-white text-center text-lg border-[#3C117E] border-r-2"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {data.map((item, index) => ( 
            <TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-[#E6E1EE]' : 'bg-white'}`}>
              <TableCell className="border-[#3C117E] border-r-2 w-[70%]">{item.curso}</TableCell>
              <TableCell className="border-[#3C117E] border-r-2 w-[20%]">R$ {item.inoc}</TableCell>
              <TableCell className="border-[#3C117E] border-r-2 w-[10%] cursor-pointer" onClick={() => handleClick(item)}>
                <Image width={25} height={25} src={"/images/editar-roxo.png"} alt="Ícone de Edição" className="mx-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {modalEditOpen && (
        <ModalEdicaoCurso isOpen={modalEditOpen} onClose={() => setModalEditOpen(false)} item={item} />
      )}
    </>
  )
}