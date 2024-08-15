'use client'

import generateYear from "@/utils/generateYear";
import { useState } from "react";

import CustomSelect from "./CustomSelect";
import Button from "./Button";
import generateSemester from "@/utils/generateSemester";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import getBRFormat from "@/utils/getBRFormat";
import generateURLContrapartidas from "@/utils/generateURLContrapartidas";

interface SelectTimeProps {
  orgao: string;
  id: number | undefined;
  balancoGeral?: boolean;
  balancoPorNEP?: boolean;
  ieName?: string;
}

export function SelectDay({ orgao, id, balancoGeral, balancoPorNEP, }: SelectTimeProps) {
  const [day, setDay] = useState("")
  const router = useRouter()
  const actualFullYear = new Date().getFullYear()
  const actualMonth = new Date().getMonth() + 1
  const actualDay = new Date().getDate()

  const formattedMonthWithZero = actualMonth < 10 ? `0${actualMonth}` : actualMonth
  const formattedDayWithZero = actualDay < 10 ? `0${actualDay}` : actualDay

  console.log(`${actualFullYear}-${formattedMonthWithZero}-${formattedDayWithZero}`)

  const handleClick = () => {
    if(!day) {
      return toast.error("Selecione algum dia antes de gerar um balanço.", { position: 'top-right', duration: 2500 })
    }

    const dayFormatted = getBRFormat(day)

    const url = generateURLContrapartidas(orgao, id!, "dia", dayFormatted, balancoGeral, balancoPorNEP,)

    if(url) router.push(url)
    else toast.error("Ocorreu um erro ao navegar para o balanço.")
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <input 
        type="date" 
        name="selectDay" 
        id="selectDay" 
        onChange={(ev) => setDay(ev.target.value)}
        className="w-72 p-inputPadding rounded-lg mb-12"
        max={`${actualFullYear}-${formattedMonthWithZero}-${formattedDayWithZero}`}
      />

      <Button onClick={handleClick} text="Gerar Balanço"/>
    </div>
  )
}

export function SelectMonth({ orgao, id, balancoGeral, balancoPorNEP, ieName }: SelectTimeProps) {
  const [month, setMonth] = useState("")
  const router = useRouter()
  const actualFullYear = new Date().getFullYear()
  const actualMonth = new Date().getMonth() + 1

  const formattedMonthWithZero = actualMonth < 10 ? `0${actualMonth}` : actualMonth

  const handleClick = () => {
    if(!month) {
      return toast.error("Selecione algum mês antes de gerar um balanço.", { position: 'top-right', duration: 2500 })
    }

    const url = generateURLContrapartidas(orgao, id!, "mes", month, balancoGeral, balancoPorNEP, ieName)

    if(url) router.push(url)
    else toast.error("Ocorreu um erro ao navegar para o balanço.")
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <input 
        type="month" 
        name="selectMonth" 
        id="selectMonth" 
        onChange={(ev) => setMonth(ev.target.value)}
        className="w-72 p-inputPadding rounded-lg mb-12"
        max={`${actualFullYear}-${formattedMonthWithZero}`}
      />

      <Button onClick={handleClick} text="Gerar Balanço"/>
    </div>
  )
}

export function SelectSemester({ orgao, id, balancoGeral, balancoPorNEP, ieName }: SelectTimeProps) {
  const [semester, setSemester] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [label, setLabel] = useState("Selecione o Semestre")
  const semesters = generateSemester()
  const router = useRouter()

  const toggleDropdown = (item: { text: string, value: string } | null) => {
    setIsOpen(!isOpen)

    if(item) {
      setSemester(item.value)
      setLabel(item.text)
    }
  }

  const handleClick = () => {
    if(!semester) {
      return toast.error("Selecione algum semestre antes de gerar um balanço.", { position: 'top-right', duration: 2500 })
    }

    const url = generateURLContrapartidas(orgao, id!, "semestre", semester, balancoGeral, balancoPorNEP, ieName)

    if(url) router.push(url)
    else toast.error("Ocorreu um erro ao navegar para o balanço.")
  }

  return (
    <>
      <CustomSelect 
        label={label}
        dataArray={semesters.reverse()}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
      />

      <Button onClick={handleClick} text="Gerar Balanço"/>
    </>
  )
}

export function SelectYear({ orgao, id, balancoGeral, balancoPorNEP, }: SelectTimeProps) {
  const [year, setYear] = useState<number>()
  const [isOpen, setIsOpen] = useState(false)
  const [label, setLabel] = useState("Selecione o Ano")
  const years = generateYear()
  const router = useRouter()

  const toggleDropdown = (year: { text: string, value: number }) => {
    setIsOpen(!isOpen)

    if(year) {
      setYear(year.value)
      setLabel(year.text)
    }
  }

  const handleClick = () => {
    if(!year) {
      return toast.error("Selecione algum ano antes de gerar um balanço.", { position: 'top-right', duration: 2500 })
    }

    const url = generateURLContrapartidas(orgao, id!, "ano", year, balancoGeral, balancoPorNEP,)

    if(url) router.push(url)
    else toast.error("Ocorreu um erro ao navegar para o balanço.")
  }

  return (
     <>
      <CustomSelect 
        label={label}
        dataArray={years.reverse()}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
      />

      <Button onClick={handleClick} text="Gerar Balanço"/>
    </>
  )
}