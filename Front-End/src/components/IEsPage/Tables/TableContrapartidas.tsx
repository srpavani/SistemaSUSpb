"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

import data from "../../../../databaseTeste/dataNEPS.json";
import { useState } from "react";
import ModalNEP from "../Contrapartidas/ModalNEP";

export default function TableContrapartidas() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [id, setId] = useState(0);

  const handleClick = (id: number) => {
    setModalOpen(true);
    setId(id);
  };

  return (
    <>
      <Table className="mb-12 font-bold border-roxo border-2">
        <TableHeader className="bg-roxo">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">
              Clique na NEP para gerar um balanço
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {data.map((item, index) => (
            <TableRow
              key={item.id}
              className={`cursor-pointer ${
                index % 2 === 0
                  ? "bg-[#E6E1EE] hover:bg-[#eceaea]"
                  : "bg-white hover:bg-[#eceaea]"
              }`}
              onClick={() => handleClick(item.id)}
            >
              <TableCell className="border-[#3C117E] border-r-2">
                <div className="relative py-1">
                  {item.neps}
                  <Image
                    src={"/images/icon-busca.png"}
                    width={30}
                    height={30}
                    alt="Ícone de Busca"
                    className="absolute -top-1 right-4"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {modalOpen && (
        <ModalNEP
          isOpen={modalOpen}
          id={id}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
