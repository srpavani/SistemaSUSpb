'use client'

import { Input } from "@/components/Register/Input";
import scrollToTop from "@/utils/scrollToTop";
import { Dispatch, SetStateAction, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  selectedOption?: string;
  setSelectedOption?: Dispatch<SetStateAction<string>>;
  item?: InstituicaoEnsinoType;
  errors: any
}

export function FormEdicaoIE1Etap({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Input
        {...register("instituicao_ensino")}
        name="instituicao_ensino"
        label="Instituição de Ensino"
        placeholder="Digite o nome da IE"
        className="w-[20rem] placeholder:text-sm2"
        
        error={errors.instituicao_ensino}
        classNameError="text-center"
      />

      <Input
        {...register("numero_convenio")}
        name="numero_convenio"
        label="Número do Convênio"
        placeholder="Digite o número do convênio da IE"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.numero_convenio}
        classNameError="text-center"
      />

      <Input
        {...register("data_assinatura")}
        name="data_assinatura"
        type="date"
        label="Data da Assinatura:"
        className="w-[20rem]"
        error={errors.data_assinatura}
        classNameError="text-center"
      />

      <Input
        {...register("publicacao_doe_pb")}
        name="publicacao_doe_pb"
        type="date"
        label="Publicação do DOE/PB:"
        className="w-[20rem]"
        error={errors.publicacao_doe_pb}
        classNameError="text-center"
      />

      <Input
        {...register("cidade")}
        name="cidade"
        label="Cidade:"
        placeholder="Digite a cidade da IE"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.cidade}
        classNameError="text-center"
      />

      <Input
        {...register("macrorregiao")}
        name="macrorregiao"
        label="Macrorregião:"
        placeholder="Digite a macrorregião da IE"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.macrorregiao}
        classNameError="text-center"
      />
    </div>
  ) 
}

export function FormEdicaoIE2Etap({ register, item, errors }: Props) {
  useEffect(() => {
    scrollToTop("dialog-content-top")
  }, [])

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
        label="Contato do Responsável:"
        placeholder="Digite o contato do responsável"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.contato_responsavel}
        classNameError="text-center"
      />

      <Input
        {...register("email_responsavel")}
        name="email_responsavel"
        type="email"
        label="E-mail do responsável:"
        placeholder="Digite o email do responsável"
        className="w-[20rem] placeholder:text-sm2"
        error={errors.email_responsavel}
        classNameError="text-center"
      />

      {item?.nome_segundo_responsavel !== "" && (
        <>  
          <Input
            {...register("nome_segundo_responsavel")}
            name="nome_segundo_responsavel"
            label="Nome do Segundo Responsável:"
            placeholder="Digite o nome do 2° responsável"
            className="w-[20rem] placeholder:text-sm2"
            error={errors.nome_segundo_responsavel}
            classNameError="text-center"
          />

          <Input
            {...register("contato_segundo_responsavel")}
            name="contato_segundo_responsavel"
            type="tel"
            label="Contato do Segundo Responsável:"
            placeholder="Digite o contato do 2° responsável"
            className="w-[20rem] placeholder:text-sm2"
            error={errors.contato_segundo_responsavel}
            classNameError="text-center"
          />

          <Input
            {...register("email_segundo_responsavel")}
            name="email_segundo_responsavel"
            type="email"
            label="E-mail do Segundo Responsável:"
            placeholder="Digite o email do 2° responsável"
            className="w-[20rem] placeholder:text-sm2"
            error={errors.email_segundo_responsavel}
            classNameError="text-center"
          />
        </>
      )}
    </div>
  ) 
}