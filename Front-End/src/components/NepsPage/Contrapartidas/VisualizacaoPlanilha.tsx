'use client'

import generateYear from "@/utils/generateYear"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import TableContrapartidasIEsConveniadas from "../Tables/TableContrapartidasIEsConveniadas"
import { toast } from "sonner"
import CheckboxsTipoIEs from "@/components/CheckboxsTipoIEs"
import showInfoToastTipoIE from "@/utils/showInfoToastTipoIE"

export default function VisualizacaoPlanilha() {
  const [selectedOption, setSelectedOption] = useState("")
  const [year, setYear] = useState(new Date().getFullYear() - 1)
  const years = generateYear()

  const handleCheckboxClick = (option: string) => {
    setSelectedOption(option)
    showInfoToastTipoIE(option)
  }

  return (
    <>
      <div className='bg-roxo text-white px-8 py-7 flex justify-between items-center rounded-lg'>
        <div className='flex flex-col gap-4 text-lg'> 
          <h2>
            <span className='font-bold'>Tipo de Visualização:</span> Ano ({year})
          </h2>
        </div>

        <div className='bg-roxoClaro text-roxo font-bold w-40 px-3 py-4 rounded-lg text-center cursor-pointer  transition-all hover:bg-[#c7c3ce]'>
          Imprimir Planilha Completa
        </div>
      </div>

      <div className="relative text-center my-10">
        <select name="year" id="year" defaultValue={""} 
          className="p-inputPadding rounded-lg w-24 appearance-none cursor-pointer relative bg-roxoClaro" 
          onChange={(ev) => setYear(+ev.target.value)}
        >
          {years.reverse().map(year => (
            <option value={year.value} key={year.value}>{year.text}</option>
          ))}
        </select>

        <FiChevronDown className="absolute right-[47%] top-[0.8rem] text-2xl"/>
      </div>
      
      <CheckboxsTipoIEs selectedOption={selectedOption} handleCheckboxClick={handleCheckboxClick} />

      <TableContrapartidasIEsConveniadas year={year} filter={selectedOption} />
    </>
  )
}