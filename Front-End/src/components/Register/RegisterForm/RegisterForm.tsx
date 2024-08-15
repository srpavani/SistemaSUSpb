"use client";

import { Input } from "@/components/Register/Input";
import { RegisterSchemaType, registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Select } from "../Select";
import Button from "../Button";
import { userRegister } from "@/services/authService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import cargosData from '../../../../databaseTeste/cargo-localTrabalho.json'
import { useLocaisTrabalho } from "./useLocaisTrabalho";
import { getLocaisTrabalho } from "@/services/getLocaisTrabalho";
import { useLoaderContext } from "@/contexts/LoaderContext";
import { usePasswordToggle } from "@/hooks/usePasswordToggle";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    reValidateMode: "onChange",
  })
  const cargoSelecionado = watch("cargo")
  const router = useRouter()
  const { handleLoading }  = useLoaderContext()
  const [ icon, inputType, setVisible ] = usePasswordToggle()
  const [ icon2, inputType2, setVisible2 ] = usePasswordToggle()

  const locaisTrabalho = useLocaisTrabalho(cargoSelecionado);

  const handleForm = async (data: RegisterSchemaType) => {
    handleLoading(true);
    try {
      clearErrors("tk")
      clearErrors("email")
      clearErrors("cpf")

      const locaisTrabalho = await getLocaisTrabalho(data.cargo)
      
      let completeData: any // por enquanto - teste
      if(cargoSelecionado === "adm_resus") {
        const local =  locaisTrabalho.find((local: any) => local.esp_nome === data.endereco_local_trabalho)

        completeData = { ...data, esp_pb_id: local.esp_pb_id }
        console.log(completeData)
      } else if(cargoSelecionado === "coord_nep") {
        const local =  locaisTrabalho.find((local: any) => local.nep_nome === data.endereco_local_trabalho)

        completeData = { ...data, nep_id: local.nep_id }
      } else if(cargoSelecionado === "coord_ie") {
        const local =  locaisTrabalho.find((local: any) => local.ie_nome === data.endereco_local_trabalho)

        completeData = { ...data, ie_id: local.ie_id }
      } 

      const responseData = await userRegister(completeData)

      if(responseData) {
        toast.success("Conta criada com sucesso!", { position: 'top-right' })
        router.push("/")
      }

      reset()
    } catch (error: any) {
      console.error("Erro: " + error.message)

      if(error.message === "Token de acesso inválido") {
        setFocus("tk")
        setError("tk", { message: "Token de acesso inválido" })
      }

      if(error.message === "Esse E-mail já está cadastrado") {
        setFocus("email")
        setError("email", { message: "Esse e-mail já está cadastrado" })
      } 
      
      if(error.message === "Esse CPF já está cadastrado") {
        setFocus("cpf")
        setError("cpf", { message: "Esse CPF já está cadastrado" })
      }
    } finally {
      handleLoading(false)
    }
  }

  return (
    <form className="w-[41rem] space-y-12" onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
           <Input
            {...register("nomeCompleto")}
            label="Nome Completo (*)"
            name="nomeCompleto"
            placeholder="Digite seu nome completo"
            error={errors.nomeCompleto}
            className="w-[18rem] placeholder:text-sm2"
          />

          <Input
            {...register("email")}
            label="E-mail (*)"
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            error={errors.email}
            className="w-[18rem] placeholder:text-sm2"
          />
        </div>

        <div className="flex justify-between">
          <Input
            {...register("cpf")}
            label="CPF (*)"
            name="cpf"
            placeholder="Digite o seu CPF"
            error={errors.cpf}
            className="w-[18rem] placeholder:text-sm2"
          />

          <Input
            {...register("telefone")}
            label="Telefone (*)"
            name="telefone"
            placeholder="Ex: (83)98888-7777"
            error={errors.telefone}
            className="w-[18rem] placeholder:text-sm2"
          />
        </div>

        <div className="flex justify-between">
          <div className="relative">
            <Input
              {...register("password")}
              type={inputType}
              label="Senha (*)"
              name="password"
              placeholder="Digite sua senha"
              error={errors.password}
              className="w-[18rem] placeholder:text-sm2"
            />

            <span className='absolute top-[2.85rem] right-2 cursor-pointer text-gray-700' onClick={() => setVisible((prev) => !prev)} title='Mostrar/Esconder senha'>
              {icon}
            </span>
          </div>

          <div className="relative">
            <Input
              {...register("password2")}
              type={inputType2}
              label="Confirme sua Senha (*)"
              name="password2"
              placeholder="Confirme sua senha"
              error={errors.password2}
              className="w-[18rem] placeholder:text-sm2"
            />

            <span className='absolute top-[2.85rem] right-2 cursor-pointer text-gray-700' onClick={() => setVisible2((prev) => !prev)} title='Mostrar/Esconder senha'>
              {icon2}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <Select
            {...register("cargo")}
            label="Cargo (*)"
            name="cargo"
            error={errors.cargo}
            defaultValue=""
          >
            <option value="" disabled>Selecione o Cargo</option>
            {cargosData.map((cargo) => (
              <option key={cargo.value} value={cargo.value}>{cargo.cargo}</option>
            ))}
          </Select>

          <Select
            {...register("endereco_local_trabalho")}
            label="Local de Trabalho (*)"
            name="endereco_local_trabalho"
            error={errors.endereco_local_trabalho}
            disabled={!cargoSelecionado}
            defaultValue=""
          >
            <option value="" disabled>{cargoSelecionado ? "Selecione o Local de Trabalho" : "Primeiro escolha o cargo"}</option>
            {locaisTrabalho && locaisTrabalho.map(localTrabalho => (
              <option key={localTrabalho.id} value={localTrabalho.nome}>{localTrabalho.nome}</option>
            ))}
          </Select>
        </div>

        <div className="flex justify-between">
          <Input
            {...register("data_admissao_cargo")}
            type="date"
            label="Data da Admissão (*)"
            name="data_admissao_cargo"
            error={errors.data_admissao_cargo}
            className="w-[18rem] placeholder:text-sm2"
          />
          
          <Input
            {...register("tk", { valueAsNumber: true })}
            type="number"
            label="Token de Acesso (*)"
            name="tk"
            placeholder="Digite o token fornecido"
            error={errors.tk}
            className="w-[18rem] placeholder:text-sm2"
          />
        </div>
      </div>
      
      <div className="w-full space-y-2">
        <Input
          {...register("endereco")}
          label="Endereço do Local de Trabalho (*)"
          name="endereco"
          placeholder="Digite o endereço"
          error={errors.endereco}
        />
      </div>

      <div className="flex w-[659px] gap-x-4">
        <Input
          {...register("bairro")}
          label="Bairro (*)"
          name="bairro"
          placeholder="Digite o Bairro"
          className="w-[279px]"
          error={errors.bairro}
        />
        <Input
          {...register("numero")}
          label="Número (*)"
          name="numero"
          placeholder="Ex: 000"
          className="w-[148px]"
          error={errors.numero}
        />
        <Input
          {...register("cep")}
          label="CEP (*)"
          name="cep"
          placeholder="Ex: 00000-000"
          className="w-[200px]"
          error={errors.cep}
        />
      </div>

      <div className="w-full text-center">
        <Button />
      </div>
    </form>
  );
}

export default RegisterForm;
