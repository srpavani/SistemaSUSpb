'use client'

import { useState } from "react";

import cursos from '../../../../databaseTeste/cursos.json'
import selectIE from '../../../../databaseTeste/selectIE.json'
import generateSemester from "@/utils/generateSemester";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectSchemaType, selectsSchema } from "@/schemas/selectsSchema";
import { Select } from "./Select";
import TableContrapartidasFrequencia from "../Tables/TableContrapartidasFrequencia";
import BackButton from "@/components/Buttons/BackButton";

export default function SelectsNovasPlanilhas() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<SelectSchemaType>({
    resolver: zodResolver(selectsSchema)
  })
  const [showTable, setShowTable] = useState(false)
  const semesters = generateSemester()
  const [dataToSend, setDataToSend] = useState<SelectSchemaType>({
    instituicao_ensino: "",
    semestre: "",
    curso: ""
  })
  
  const onSubmit = (data: SelectSchemaType) => {
    setShowTable(true)
    setDataToSend({
      instituicao_ensino: data.instituicao_ensino, 
      semestre: data.semestre, 
      curso: data.curso 
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-roxo rounded-lg flex justify-around pt-9 pb-10">
          <Select
            {...register("instituicao_ensino")}
            label="Instituição de Ensino:"
            name="instituicao_ensino"
            error={errors.instituicao_ensino}
            defaultValue=""
          >
            <option value="" disabled>
                Selecione a Instituição de Ensino
              </option>
              {selectIE.map(ie => (
                <option value={ie.value} key={ie.value}>{ie.ie}</option>
              ))}
          </Select>

          <Select
            {...register("semestre")}
            label="Selecione o Semestre:"
            name="semestre"
            error={errors.semestre}
            defaultValue=""
          >
            <option value="" disabled>
              Informe o Semestre
            </option>
            {semesters.reverse().map(semester => (
              <option value={semester.value} key={semester.value}>{semester.text}</option>
            ))}
          </Select>
        </div>

        <div className="flex justify-center items-center gap-16 mt-10">
          <Select
            {...register("curso")}
            label="Informe o Curso a ser analisado:"
            name="curso"
            error={errors.curso}
            defaultValue=""
            isCurso={true}
          >
            <option value="" disabled>
              Selecione o Curso
            </option>
            {cursos.map(curso => (
              <option value={curso.value} key={curso.value}>{curso.curso}</option>
            ))}
          </Select>

          <button type="submit" className={`bg-roxo text-white px-16 py-3 ${errors.curso ? 'mt-2' : 'mt-7'}  rounded-lg font-bold transition duration-300 hover:bg-violet-800`} title="Visualizar a tabela de acordo com os dados selecionados">Visualizar</button>
        </div>
      </form>

      {showTable && <TableContrapartidasFrequencia data={dataToSend} />}
    </>
  )
}