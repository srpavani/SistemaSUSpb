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

export default function TableNepsConveniadas() {
  return (
    <Table className="mt-4 mb-12 font-bold border-roxo border-2">
      <TableHeader className="bg-roxo">
        <TableRow className="text-white hover:bg-violet-950">
          <TableHead className="text-white text-center text-lg">
            Nome da NEPS
          </TableHead>
          <TableHead className="text-white text-center text-lg">
            Região
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center text-sm2">
        {data.map((item, index) => (
          <TableRow
            key={item.id}
            className={`${
              index % 2 === 0
                ? "bg-[#E6E1EE] hover:bg-[#eceaea]"
                : "bg-white hover:bg-[#eceaea]"
            }`}
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
            <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/4">
              {item.regiao}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}