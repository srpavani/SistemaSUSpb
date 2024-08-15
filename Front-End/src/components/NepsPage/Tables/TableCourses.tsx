import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface IEData {
  id: number;
  instituicaoEnsino: string;
  tipoIE: string;
  estagiarios: number;
}

interface IEsTableProps {
  data: IEData[];
}

function TableCourses({ data }: IEsTableProps) {
  return (
     <Table className="mx-auto font-bold border-violet-950 border-2">
      <TableHeader className="bg-[#E6E1EE]">
        <TableRow className="">
          <TableHead className="text-black text-center text-lg font-bold">Nome da IE</TableHead>
          <TableHead className="text-black text-center text-lg font-bold">Tipo da IE</TableHead>
          <TableHead className="text-black text-center text-lg font-bold">Estagiários</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center text-0.95">
        {data.map((item, index) => ( 
          <TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-white  hover:bg-[#eceaea]' : 'bg-[#E6E1EE] hover:bg-[#eceaea]'}`}>
            <TableCell className="py-4">{item.instituicaoEnsino}</TableCell>
            <TableCell className="py-4">{item.tipoIE}</TableCell>
            <TableCell className="w-1/5 py-4">{item.estagiarios}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableCourses