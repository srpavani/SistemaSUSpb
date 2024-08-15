'use client'

import { Select } from "@/components/Register/Select";
import generateYear from "@/utils/generateYear";
import { Dispatch, SetStateAction, useState } from "react";
import ModalNovoCadastro from "./ModalNovoCadastro";

interface Props {
  setSelectedYear: Dispatch<SetStateAction<number>>;
}

export default function SelectYearCreateButton({ setSelectedYear }: Props) {
  const years = generateYear(true)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-2 items-center">
        <label htmlFor="year" className="font-bold">Ano</label>
        <select name="year" id="year" className="px-3 py-3 rounded-lg cursor-pointer bg-roxoClaro" onChange={(ev) => setSelectedYear(+ev.target.value)}>
          {years.reverse().map(year => (
            <option value={year.value} key={year.value}>{year.text}</option>
          ))}
        </select>
      </div>

      <button type="button" className="bg-[#3C117E] text-white w-52 py-4 rounded-lg font-bold border-roxo transition duration-300 hover:bg-violet-800" onClick={() => setModalOpen(true)}>Novo Cadastro</button>

      {modalOpen && (
        <ModalNovoCadastro isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}