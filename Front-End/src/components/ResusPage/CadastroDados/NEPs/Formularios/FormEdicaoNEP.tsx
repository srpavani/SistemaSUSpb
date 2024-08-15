'use client'

import { Input } from "@/components/Register/Input";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  errors: any;
}

export function FormEdicaoNEP1Etap({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Input
        {...register("nep")}
        name="nep"
        label="Nome da NEP"
        placeholder="Digite o nome da NEP"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.nep}
        classNameError="text-center"
      />

      <Input
        {...register("regiao_saude")}
        name="regiao_saude"
        label="Região de Saúde"
        placeholder="Digite o região de saúde da NEP"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.regiao_saude}
        classNameError="text-center"
      />

      <Input
        {...register("municipio")}
        name="municipio"
        label="Município:"
        placeholder="Digite a município da NEP"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.municipio}
        classNameError="text-center"
      />
    </div>
  ) 
}

export function FormEdicaoNEP2Etap({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Input
        {...register("nome_diretor")}
        name="nome_diretor"
        label="Nome do Diretor:"
        placeholder="Digite o nome do diretor"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.nome_diretor}
        classNameError="text-center"
      />

      <Input
        {...register("telefone_servico")}
        name="telefone_servico"
        type="tel"
        label="Telefone de Serviço:"
        placeholder="Digite o telefone de serviço"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.telefone_servico}
        classNameError="text-center"
      />

      <Input
        {...register("email_direcao_geral")}
        name="email_direcao_geral"
        type="email"
        label="E-mail do Direção Geral:"
        placeholder="Digite o email do direção geral"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.email_direcao_geral}
        classNameError="text-center"
      />
    </div>
  ) 
}

export function FormEdicaoNEP3Etap({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Input
        {...register("nome_responsavel")}
        name="nome_responsavel"
        label="Nome do Responsável:"
        placeholder="Digite o nome do responsável"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.nome_responsavel}
        classNameError="text-center"
      />

      <Input
        {...register("contato_responsavel")}
        name="contato_responsavel"
        type="tel"
        label="Contato do  Responsável:"
        placeholder="Digite o contato do  responsável"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.contato_responsavel}
        classNameError="text-center"
      />

      <Input
        {...register("email_responsavel")}
        name="email_responsavel"
        type="email"
        label="E-mail do Responsável:"
        placeholder="Digite o email do responsável"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.email_responsavel}
        classNameError="text-center"
      />
    </div>
  ) 
}