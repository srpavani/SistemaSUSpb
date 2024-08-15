'use client'

import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { SelectDay, SelectMonth, SelectSemester, SelectYear } from "./SelectTime";

interface SelectViewByProps {
  isContrapartidasNEPS?: boolean;
  isContrapartidasIEs?: boolean;
  isContrapartidasRESUS?: boolean;
  id?: number | undefined;
  balancoGeral?: boolean;
  balancoPorNEP?: boolean;
  //items?: { id: number, instituicaoEnsino: string, tipoIE: string, estagiarios: number }[];
  onlyMonthSemester?: boolean;
  ieName?: string;
  onlySemesterYear?: boolean;
}

export function SelectViewBy({ isContrapartidasNEPS, isContrapartidasIEs, isContrapartidasRESUS, id, balancoGeral, balancoPorNEP, onlyMonthSemester, ieName, onlySemesterYear }: SelectViewByProps) {
  const [viewBy, setViewBy] = useState("")
  const [orgao, setOrgao] = useState("")

  useEffect(() => {
    if(isContrapartidasNEPS) setOrgao("neps")
    else if(isContrapartidasIEs) setOrgao("ies")
    else if(isContrapartidasRESUS) setOrgao("resus")
  }, [])

  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor="viewBy relative" className="font-bold">Visualizar por:</label>
      <div className="relative">
        <select name="viewBy" id="viewBy" defaultValue={""} 
          className="p-inputPadding rounded-lg w-72 text-[#575555] appearance-none cursor-pointer" 
          onChange={(ev) => setViewBy(ev.target.value)}
        >
            <option value="" disabled>
              Escolha o Tipo de Visualização
            </option>
            {onlyMonthSemester ? (
              <>
                <option value="month">Mês</option>
                <option value="semester">Semestre</option>
              </>
            ) : onlySemesterYear ? (
              <> 
                <option value="semester">Semestre</option>
                <option value="year">Ano</option>
              </>
            ) : (
              <>
                <option value="day">Dia</option>
                <option value="month">Mês</option>
                <option value="semester">Semestre</option>
                <option value="year">Ano</option>
              </>
            )}
        </select>

        <FiChevronDown className="absolute right-3 top-4 text-base"/>
      </div>
      
      {viewBy === "day" ? (
        <SelectDay orgao={orgao} id={id} balancoGeral={balancoGeral} balancoPorNEP={balancoPorNEP} />
      ) : viewBy === "month" ? (
        <SelectMonth orgao={orgao} id={id} balancoGeral={balancoGeral}balancoPorNEP={balancoPorNEP} ieName={ieName} />
      ) : viewBy === "semester" ? (
        <SelectSemester orgao={orgao} id={id} balancoGeral={balancoGeral} balancoPorNEP={balancoPorNEP} ieName={ieName} />
      ) : viewBy === "year" && (
        <SelectYear orgao={orgao} id={id} balancoGeral={balancoGeral} balancoPorNEP={balancoPorNEP}/>
      )}
    </div>
  )
}