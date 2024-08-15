import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

import FrequenciaMonths from "../Contrapartidas/FrequenciaMonths";
import { useEffect, useState } from "react";
import ModalFrequencia from "../Contrapartidas/ModalFrequencia";
import ButtonGerarBalancoCusto from "../Contrapartidas/ButtonGerarBalancoCusto";
import { getDaysInMonth, parse } from 'date-fns';
import { SelectMonth } from "@/components/SelectsContrapartidas/SelectTime";

interface Props {
  data: { instituicao_ensino: string, semestre: string, curso: string };
}

interface Type {
  frequencia: number;
  valor: number;
}

export default function TableContrapartidasFrequencia({ data }: Props) {
  const numberOfSemester = data.semestre.split(".")[1]
  const [selectedMonth, setSelectedMonth] = useState(numberOfSemester === "1" ? "janeiro" : "julho")
  const [selectedDay, setSelectedDay] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [daysInMonth, setDaysInMonth] = useState(31)
  const [tableData, setTableData] = useState<Type[]>(Array.from({ length: daysInMonth }).map(() => ({ frequencia: 0, valor: 0.00 })))
  const [currentValues, setCurrentValues] = useState<Type>({ frequencia: 0, valor: 0 })

   useEffect(() => {
    const monthNumbers: { [key: string]: number } = {
      janeiro: 1, fevereiro: 2, marco: 3, abril: 4, maio: 5, junho: 6, julho: 7, agosto: 8, setembro: 9, outubro: 10, novembro: 11, dezembro: 12
    }

    const date = `${data.semestre.split(".")[0]}-${monthNumbers[selectedMonth]}`
    const parsedDate = parse(date, "yyyy-MM", new Date())

    setDaysInMonth(getDaysInMonth(parsedDate))
  }, [selectedMonth, data.semestre])

  useEffect(() => {
    setTableData(Array.from({ length: daysInMonth }).map(() => ({ frequencia: 0, valor: 0.00 })))
  }, [daysInMonth])

  const handleClick = (day: number, currentData: Type) => {
    setModalOpen(true)
    setSelectedDay(day)
    setCurrentValues(currentData)
  }

  const handleSave = (day: number, newData: Type) => {
    setTableData((prevData) => (
      prevData.map((item, index) => index === day - 1 ? newData : item)
    ))
    setModalOpen(false)
  }

  return (
    <>
      <FrequenciaMonths numberOfSemester={numberOfSemester} setSelectedMonth={setSelectedMonth}  />

      <Table className="mt-4 mb-8 font-bold border-[#3C117E] border-2">
        <TableHeader className="bg-violet-900">
          <TableRow className="text-white hover:bg-violet-950">
            <TableHead className="text-white text-center text-lg">Dia</TableHead>
            <TableHead className="text-white text-center text-lg">Frequência de Alunos</TableHead>
            <TableHead className="text-white text-center text-lg">Valor Parcial</TableHead>
            <TableHead className="text-white text-center text-lg">Editar</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-center text-sm2">
          {tableData.map((data, index) => (
              <TableRow key={index} className={`${index % 2 === 0 ? 'bg-[#E6E1EE] hover:bg-[#eceaea]' : 'bg-white hover:bg-[#eceaea]'}`}>
                <TableCell className="border-[#3C117E] border-r-2 w-[10%]">{index + 1}</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-1 w-[45%]">{data.frequencia}</TableCell>
                <TableCell className="border-[#3C117E] border-r-2 py-1 w-[30%]">R$ {data.valor}</TableCell>
                <TableCell className="w-[15%] py-1">
                  <Image 
                    src={"/images/editar.png"}
                    width={25} height={25} alt="Ícone de Editar"
                    title="Abrir modal de edição da frequência e preço"
                    className="mx-auto cursor-pointer"
                    onClick={() => handleClick(index+1, data)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <ButtonGerarBalancoCusto instituicao_ensino={data.instituicao_ensino}/>
      
      {modalOpen && (
        <ModalFrequencia
          item={data}
          isOpen={modalOpen}
          month={selectedMonth}
          onClose={() => setModalOpen(false)}
          day={selectedDay}
          onSave={(newData: Type) => handleSave(selectedDay, newData)}
          currentValues={currentValues}
        />
      )}
    </>
  )
}