import { useState } from "react"
import Button from "./Button"
import generateSemester from "@/utils/generateSemester"
import generateYear from "@/utils/generateYear"
import { FiChevronDown } from "react-icons/fi";
import CustomSelect from "./CustomSelect";

export function SelectViewBy() {
  const [viewBy, setViewBy] = useState("")

  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor="viewBy relative" className="font-bold">Visualizar por:</label>
      <div className="relative">
        <select name="viewBy" id="viewBy" defaultValue={""} className="p-inputPadding rounded-lg w-72 text-[#575555]  appearance-none cursor-pointer" onChange={(ev) => setViewBy(ev.target.value)}>
            <option value="" disabled>
              Escolha o Tipo de Visualização
            </option>
            <option value="day">Dia</option>
            <option value="month">Mês</option>
            <option value="semester">Semestre</option>
            <option value="year">Ano</option>
        </select>

        <FiChevronDown className="absolute right-3 top-4 text-base"/>
      </div>
      
      {viewBy === "day" ? (
        <SelectDay />
      ) : viewBy === "month" ? (
        <SelectMonth />
      ) : viewBy === "semester" ? (
        <SelectSemester />
      ) : viewBy === "year" && (
        <SelectYear />
      )}
    </div>
  )
}

function SelectDay() {
  const [day, setDay] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    console.log(day)
    setShowMessage(true)
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <input 
        type="date" 
        name="selectDay" 
        id="selectDay" 
        onChange={(ev) => setDay(ev.target.value)}
        className="w-72 p-inputPadding rounded-lg mb-12"
      />

      <Button onClick={handleClick}/>

      {/* mensagem fictícia - teste */}
      {showMessage && <p className="mt-4">Gerando balanço do dia {day}</p>}
    </div>
  )
}

function SelectMonth() {
  const [month, setMonth] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    console.log(month)
    setShowMessage(true)
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <input 
        type="month" 
        name="selectMonth" 
        id="selectMonth" 
        onChange={(ev) => setMonth(ev.target.value)}
        className="w-72 p-inputPadding rounded-lg mb-12"
      />

      <Button onClick={handleClick}/>

      {/* mensagem fictícia - teste */}
      {showMessage && <p className="mt-4">Gerando balanço do mês {month}</p>}
    </div>
  )
}

function SelectSemester() {
  const [semester, setSemester] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [label, setLabel] = useState("Selecione o Semestre")
  const [showMessage, setShowMessage] = useState(false)
  const semesters = generateSemester()

  const toggleDropdown = (item: { text: string, value: string } | null) => {
    setIsOpen(!isOpen)

    if(item) {
      setSemester(item.value)
      setLabel(item.text)
    }
  }

  const handleClick = () => {
    console.log(semester)
    setShowMessage(true)
  }

  return (
    <>
      <CustomSelect 
        label={label}
        dataArray={semesters.reverse()}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
      />

      <Button onClick={handleClick}/>

      {/* mensagem fictícia - teste */}
      {showMessage && <p className="mt-4">Gerando balanço do semestre {semester}</p>}
    </>
  )
}

function SelectYear() {
  const [year, setYear] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [label, setLabel] = useState("Selecione o Ano")
  const [showMessage, setShowMessage] = useState(false)
  const years = generateYear()

  const toggleDropdown = (year: { text: string, value: number }) => {
    setIsOpen(!isOpen)

    if(year) {
      setYear(year.value)
      setLabel(year.text)
    }
  }

  const handleClick = () => {
    console.log(year)
    setShowMessage(true)
  }

  return (
     <>
      <CustomSelect 
        label={label}
        dataArray={years.reverse()}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
      />

      <Button onClick={handleClick}/>

      {/* mensagem fictícia - teste */}
      {showMessage && <p className="mt-4">Gerando balanço do ano {year}</p>}
    </>
  )
}