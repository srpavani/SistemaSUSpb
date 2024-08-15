'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDaysInMonth, parse } from 'date-fns';

interface Props {
  date: string;
  isIEdata: boolean;
}

// utilizando a biblioteca date-fns para pegar a qtd de dias no mês escolhido pelo usuário
// isIEdata ? requisição das IEs : requisição das NEPS
function TableContrapartidasMonthDays({ date, isIEdata }: Props) {
  const parsedDate = parse(date, "yyyy-MM", new Date())
  const daysInMonth = getDaysInMonth(parsedDate)
  const numRows = Math.ceil(daysInMonth / 2)
  const title= "Valor total referente à soma dos valores parciais de todos os dias desse mês"
 
  const getDayPair = (index: number) => {
    const day1 = index + 1;
    const day2 = index + 1 + numRows;
    return [
      day1 <= daysInMonth ? day1 : null,
      day2 <= daysInMonth ? day2 : null,
    ];
  };

  return (
    <>
      <Table className="mt-16 mb-20 font-bold border-roxo border-2">
        <TableHeader className="bg-roxo">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">Dia</TableHead>
            <TableHead className="text-white text-center text-lg">Frequência</TableHead>
            <TableHead className="text-white text-center text-lg">Valor Parcial</TableHead>
            <TableHead className="text-white text-center text-lg">Dia</TableHead>
            <TableHead className="text-white text-center text-lg">Frequência</TableHead>
            <TableHead className="text-white text-center text-lg">Valor Parcial</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {Array.from({ length: numRows }).map((_, index) => {
            const [day1, day2] = getDayPair(index);
            
            const isLastRow = index === numRows - 1
            const is31or29days = daysInMonth === 31 || daysInMonth === 29
            const is30or28days = daysInMonth === 30 || daysInMonth === 28

            return (
              <>
                <TableRow key={index} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
                  <TableCell className="border-[#3C117E] border-r-2 w-[8%]">{day1! < 10 ? `0${day1}` : day1}</TableCell>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-[15%]">10</TableCell>
                  <TableCell className="border-[#3C117E] border-r-2 py-1 w-[27%]">R$ 500,00</TableCell>
                  {isLastRow && is31or29days ? (
                    <>
                      <TableCell className="border-[#3C117E] py-1 w-[8%] border-r-2 bg-roxoHover text-white" title={title}></TableCell>
                      <TableCell className="border-[#3C117E] py-1 w-[15%] border-r-2 bg-roxoHover text-white text-[1.05rem]" title={title}>Valor Total</TableCell>
                      <TableCell className="border-[#3C117E] py-1 w-[27%] border-r-2 bg-roxoHover text-white text-[1.05rem]" title={title}>R$ 50000</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell className="border-[#3C117E] border-r-2 py-1 w-[8%]">{day2! < 10 ? `0${day2}` : day2}</TableCell>
                      <TableCell className="border-[#3C117E] border-r-2 py-1 w-[15%]">20</TableCell>
                      <TableCell className="border-[#3C117E] border-r-2 py-1 w-[27%]">R$ 800,00</TableCell>
                    </>
                  )}  
                </TableRow>
                <TableRow className="py-2">
                  {isLastRow && is30or28days && (
                    <>
                      <TableCell className="border-[#3C117E] py-4 w-[8%] border-r-2 bg-roxoHover text-white" title={title}></TableCell>
                      <TableCell className="border-[#3C117E] py-4 w-[15%] border-r-2 bg-roxoHover text-white" title={title}></TableCell>
                      <TableCell className="border-[#3C117E] py-4 w-[27%] border-r-2 bg-roxoHover text-white" title={title}></TableCell>
                      <TableCell className="border-[#3C117E] py-4 w-[8%] border-r-2 bg-roxoHover text-white" title={title}></TableCell>
                      <TableCell className="border-[#3C117E] py-4 w-[15%] border-r-2 bg-roxoHover text-white text-[1.05rem] col-span-3" title={title}>Valor Total:</TableCell>
                      <TableCell className="border-[#3C117E] py-4 w-[27%] border-r-2 bg-roxoHover text-white text-[1.05rem]" title={title}>R$ 50000</TableCell>
                    </>
                  )}
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default TableContrapartidasMonthDays