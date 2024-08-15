import TableIEs from "@/components/ResusPage/Tables/TableIEs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEs",
  description: "Opções dentro de IEs",
};

export default function Ies() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Instituições de Ensino</h1>

      <TableIEs />
    </>
  )
}