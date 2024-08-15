'use client'

import Image from "next/image";
import {  FaPlus} from "react-icons/fa6";
import data from '../../../../../databaseTeste/dataIEs2.json'
import { useEffect, useState } from "react";
import ModalCadastrarIE from "./ModalCadastrarIE";
import Pagination from "../Pagination/Pagination";
import { IoIosClose } from "react-icons/io";

export default function CadastroEdicaoIEContent() {
  const [search, setSearch] = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  const itemsPerPage = 10
  const[currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(data.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // vai pegar os dados da posição -> 0, 10 ...
  const currentItems = data.slice(startIndex, endIndex)
  const [dataFiltered, setDataFiltered] = useState<InstituicaoEnsinoType[]>(data)

  useEffect(() => {
    if(search === "") {
      return setDataFiltered(currentItems)
    }

    if(search) {
      const newData = data.filter((ie) => ie.instituicao_ensino.toLowerCase().includes(search.toLowerCase()))
      setDataFiltered(newData)
      setCurrentPage(0)
    }
  }, [search])

  return (
    <div className="bg-roxoClaro2 border-2 border-roxoClaro pt-8">

      <div className="flex justify-between px-6">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            className="w-72 rounded-lg py-2 pl-9 pr-7 text-sm2"
            placeholder="Instituição de Ensino"
            onChange={(ev) => setSearch(ev.target.value)}
            value={search}
          />

          <Image 
            width={20} height={20} 
            src={"/images/Icone_Lupa.png"} alt="Ícone de Lupa"
            className="absolute top-[0.55rem] left-3"
           />

          <IoIosClose className="absolute right-1 top-2 text-2xl cursor-pointer text-roxo" onClick={() => setSearch("")}/>
        </div>

        <button type="button" className="bg-roxo px-6 py-3 text-white rounded-lg flex items-center gap-2 transition-all hover:bg-violet-800" onClick={() => setModalOpen(true)}>
          <FaPlus className="text-[1.15rem]" /> Adicionar Nova IE
        </button>
      </div>

      <Pagination 
        currentItems={currentItems}
        currentPage={currentPage}
        dataFiltered={dataFiltered}
        startIndex={startIndex}
        endIndex={endIndex}
        itemsPerPage={itemsPerPage}
        pages={pages}
        search={search}
        setCurrentPage={setCurrentPage}
        isIEs={true}
      />

      {modalOpen && (
        <ModalCadastrarIE isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}