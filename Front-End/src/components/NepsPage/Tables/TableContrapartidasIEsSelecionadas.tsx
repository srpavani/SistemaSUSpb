import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import getMonthName from "@/utils/getMonthName";

interface Props {
  view: string;
  date: string;
  data: { id: number, instituicaoEnsino: string, tipoIE: string, estagiarios: number }[];
}

function TableContrapartidasIEsSelecionadas({ view, date, data }: Props) {
  let dateFormatted = date
  
  if(view === "mes") dateFormatted = getMonthName(date)
  
  return (
    <Table className="mt-20 mb-20 font-bold border-roxo border-2">
      <TableHeader className="bg-roxo">
        <TableRow className="text-white hover:bg-violet-950">
          <TableHead className="text-white text-center text-lg">Nome das IEs</TableHead>
          <TableHead className="text-white text-center text-lg">{dateFormatted}</TableHead>
          <TableHead className="text-white text-center text-lg">Valor Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center text-sm2">
        {data.map((item, index) => ( 
          <TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
            <TableCell className="border-[#3C117E] border-r-2">
              <div className="py-1">
                {item.instituicaoEnsino}
              </div>
            </TableCell>
              <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
              <TableCell className="border-[#3C117E] border-r-2 py-1 w-1/6">R$ 100,00</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableBody>
        <TableRow className="bg-roxoHover text-center hover:bg-roxoHover text-sm2">
          <TableCell className="border-[#3C117E] border-r-2 py-5 text-white">Valores Totais</TableCell>
          <TableCell className="border-[#3C117E] border-r-2 py-5 w-1/6 text-white">R$ 1300,00</TableCell>
          <TableCell className="border-[#3C117E] border-r-2 py-5 w-1/6 text-white">R$ 1300,00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TableContrapartidasIEsSelecionadas