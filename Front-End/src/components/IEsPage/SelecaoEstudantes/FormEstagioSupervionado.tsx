'use client'

import { Input } from "@/components/Register/Input";
import { Select } from "@/components/Register/Select";
import { EstagioIESchemaType, estagioIESchema } from "@/schemas/estagioIESchema";
import generateSemester from "@/utils/generateSemester";
import scrollToTop from "@/utils/scrollToTop";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const cursos = [
  {text: "Medicina", value: "medicina"},
  {text: "Engenharia", value: "engenharia"},
  {text: "Odontologia", value: "odontologia"},
  {text: "Fonodiologia", value: "fonodiologia"},
  {text: "Outros", value: "outros"},
]

export default function FormEstagioSupervisionado() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EstagioIESchemaType>({
    resolver: zodResolver(estagioIESchema)
  })
  const semesters = generateSemester()

  const onSubmit = (data: EstagioIESchemaType) => {
    console.log(data)

    if(data) {
      toast.success("Cadastro feito com sucesso", { position: 'top-right' })
      
      reset()
      scrollToTop()
    }
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form className="bg-roxoClaro w-[58rem] mx-auto py-8 px-12 rounded-lg flex flex-col gap-8 formPlaceholerSmall" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between">
        <Input
          {...register("nome_estudante")}
          label="Nome (*)"
          name="nome_estudante"
          placeholder="Insira o nome do estudante"
          error={errors.nome_estudante}
          className="w-[20rem]"
        />

        <Input
          {...register("matricula")}
          label="Matrícula (*)"
          name="matricula"
          placeholder="Insira a matricula do estudante"
          error={errors.matricula}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Input
          {...register("email")}
          type="email"
          label="E-mail (*)"
          name="email"
          placeholder="Insira o email do estudante"
          error={errors.email}
          className="w-[20rem]"
        />

        <Input
          {...register("telefone")}
          type="tel"
          label="Telefone (*)"
          name="telefone"
          placeholder="Insira o telefone do estudante"
          error={errors.telefone}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Select
          {...register("curso")}
          label="Curso (*)"
          name="curso"
          error={errors.curso}
          defaultValue=""
          className="w-[20rem]"
        >
          <option value="" disabled>Selecione o Curso</option>
          {cursos.map(curso => (
            <option key={curso.value} value={curso.value}>{curso.text}</option>
          ))}
        </Select>

        <Input
          {...register("setor_estagio")}
          label="Setor de Realização de Estágio (*)"
          name="setor_estagio"
          placeholder="Insira o setor da realização do estágio"
          error={errors.setor_estagio}
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

        <div className="flex gap-4">
          <Input
            {...register("horario_inicio")}
            type="time"
            label="Horário de Início (*)"
            name="horario_inicio"
            placeholder="00:00h"
            error={errors.horario_inicio}
            className="w-[9.5rem]"
          />
          
          <Input
            {...register("horario_saida")}
            type="time"
            label="Horário de Saída (*)"
            name="horario_saida"
            placeholder="00:00h"
            error={errors.horario_saida}
            className="w-[9.5rem]"
          />
          </div>
      </div>

      <div className="flex justify-between">
        <Input
          {...register("cpf")}
          label="CPF (*)"
          name="cpf"
          placeholder="Insira o CPF do estudante"
          error={errors.cpf}
          className="w-[20rem]"
        />

        <Input
          {...register("rg")}
          label="RG/UF (*)"
          name="rg"
          placeholder="Insira o RG/UF do estudante"
          error={errors.rg}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Input
          {...register("endereco")}
          label="Endereço (*)"
          name="endereco"
          placeholder="Insira o endereço do estudante"
          error={errors.endereco}
          className="w-[20rem]"
        />

        <Input
          {...register("cidade")}
          label="Cidade/UF (*)"
          name="cidade"
          placeholder="Insira o Cidade/UF do estudante"
          error={errors.cidade}
          className="w-[20rem]"
        />
      </div>

      <div className="flex justify-between">
        <Input
          {...register("bairro")}
          label="Bairro (*)"
          name="bairro"
          placeholder="Insira o Bairro do estudante"
          error={errors.bairro}
          className="w-[20rem]"
        />

        <Input
          {...register("cep")}
          label="CEP (*)"
          name="cep"
          placeholder="Insira o CEP do estudante"
          error={errors.cep}
          className="w-[20rem]"
        />
      </div>

      <h3 className="text-xl font-bold -ml-6 mt-6">Seguro de Acidentes Pessoais</h3>

      <div className="flex justify-between">
        <Input
          {...register("nome_seguradora")}
          label="Nome da Seguradora"
          name="nome_seguradora"
          placeholder="Insira o nome da seguradora"
          error={errors.nome_seguradora}
          className="w-[20rem]"
        />

        <Input
          {...register("numero_apolice")}
          label="Número da Apólice"
          name="numero_apolice"
          placeholder="Insira o número da apólice"
          error={errors.numero_apolice}
          className="w-[20rem]"
        />
      </div>

      <button type="submit" className="bg-[#3C117E] text-white w-60 py-4 rounded-lg font-bold border-roxo transition duration-300 hover:bg-violet-800 mx-auto mt-10 text-[1.1rem]">Salvar Cadastro</button>
    </form>
  )
}