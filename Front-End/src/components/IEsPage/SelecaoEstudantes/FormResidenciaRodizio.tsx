'use client'

import { Input } from "@/components/Register/Input";
import { Select } from "@/components/Register/Select";
import { ResidenciaIESchemaType, residenciaIESchema } from "@/schemas/residenciaIESchema";
import generateSemester from "@/utils/generateSemester";
import scrollToTop from "@/utils/scrollToTop";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function FormResidenciaRodizio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ResidenciaIESchemaType>({
    resolver: zodResolver(residenciaIESchema)
  })
  const semesters = generateSemester()

  const onSubmit = (data: ResidenciaIESchemaType) => {
    console.log(data)

    if(data) {
      toast.success("Cadastro feito com sucesso", { position: 'top-right' })
      
      reset()
      scrollToTop()
    }
  }

  return (
    <form className="bg-roxoClaro w-[58rem] mx-auto py-10 px-12 rounded-lg flex flex-col gap-8 formPlaceholerSmall" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between">
        <Input
          {...register("nome_residente")}
          label="Nome do Residente (*)"
          name="nome_residente"
          placeholder="Insira o nome do residente"
          error={errors.nome_residente}
          className="w-[20rem]"
        />

        <Input
          {...register("programa_residencia")}
          label="Programa de Residência (*)"
          name="programa_residencia"
          placeholder="Insira o programa de residência"
          error={errors.programa_residencia}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Input
          {...register("hospital_sede")}
          label="Hospital Sede (*)"
          name="hospital_sede"
          placeholder="Insira o hospital sede"
          error={errors.hospital_sede}
          className="w-[20rem]"
        />

        <Input
          {...register("hospital_rodizio")}
          label="Hospital Rodízio (*)"
          name="hospital_rodizio"
          placeholder="Insira o hospital rodízio"
          error={errors.hospital_rodizio}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Input
          {...register("conselho_profissional")}
          label="Conselho Profissional (*)"
          name="conselho_profissional"
          placeholder="Insira o conselho profissional"
          error={errors.conselho_profissional}
          className="w-[20rem]"
        />

        <Input
          {...register("setor")}
          label="Setor (*)"
          name="setor"
          placeholder="Insira o setor"
          error={errors.setor}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Select
          {...register("semestre")}
          label="Período (Ano e Semestre) (*)"
          name="semestre"
          error={errors.semestre}
          defaultValue=""
          className="w-[20rem]"
        >
          <option value="" disabled>Selecione o Semestre</option>
          {semesters.reverse().map(semester => (
            <option key={semester.value} value={semester.value}>{semester.text}</option>
          ))}
        </Select>

        <Input
          {...register("turnos")}
          label="Turnos (*)"
          name="turnos"
          placeholder="Insira os turnos"
          error={errors.turnos}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Input
          {...register("preceptor_responsavel")}
          label="Preceptor Responsável (*)"
          name="preceptor_responsavel"
          placeholder="Insira o preceptor responsavel"
          error={errors.preceptor_responsavel}
          className="w-[20rem]"
        />
      </div>

      <button type="submit" className="bg-[#3C117E] text-white w-60 py-4 rounded-lg font-bold border-roxo transition duration-300 hover:bg-violet-800 mx-auto mt-10 text-[1.1rem]">Salvar Cadastro</button>
    </form>
  )
}