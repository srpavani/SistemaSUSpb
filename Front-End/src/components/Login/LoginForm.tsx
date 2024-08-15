"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchemaType, loginSchema } from "../../schemas/loginSchema";
import Link from "next/link";
import { Input } from "./Input";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLoaderContext } from "@/contexts/LoaderContext";
import { useAuthContext } from "@/contexts/AuthContext";
import { usePasswordToggle } from "@/hooks/usePasswordToggle";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const { handleLoading, loading } = useLoaderContext()
  const { login } = useAuthContext()
  const [ icon, inputType, setVisible ] = usePasswordToggle()

  const handleForm = async (data: LoginSchemaType) => {
    try {
      handleLoading(true);
      const response = await login(data)
      handleLoading(false);

      if (!response) {
        return toast.error(
          "Email ou senha inválida",
          { duration: 3250, position: "top-right" }
        );
      }

      router.push("/login-acesso");
      toast.success("Login realizado com sucesso.", { position: "top-right" });

      reset();
    } catch (error) {
      console.error("Erro: " + error);
    }
  };

  return (
    <div className="bg-[#D9D9D9] px-8 pt-6 pb-8 rounded-lg flex justify-normal items-center flex-col gap-5 w-[35rem] shadow-dropCadastro ">
      <Image
        src={"/images/Logo_fundo_Transparente.png"}
        alt="Logo Rede Escola SUS-PB"
        width={270}
        height={250}
      />
      <h1 className="-mt-11 font-semibold tracking-wide">Sistema de Gestão da Rede Escola SUS-PB</h1>

      <form
        className="flex flex-col gap-4 items-center mt-5"
        onSubmit={handleSubmit(handleForm)}
      >
        <Input
          {...register("email")}
          name="email"
          label="E-mail"
          placeholder="Email"
          error={errors.email}
        />

        <div className="relative">
          <Input
            {...register("password")}
            type={inputType}
            name="password"
            label="Senha"
            placeholder="Senha"
            error={errors.password}
          />

          <span className='absolute top-[2.85rem] right-2 cursor-pointer text-gray-600' onClick={() => setVisible((prev) => !prev)} title='Mostrar/Esconder senha'>
            {icon}
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#3C117E] text-white w-[11rem] py-[0.6rem] rounded-lg transition-all mt-4 hover:bg-violet-800"
        >
          {loading ? "Carregando..." : "Entrar"}
        </button>
        <div className="text-center mt-4">
          <p className="mb-1">Não possui uma conta?</p>
          <Link
            href={"/cadastro"}
            className="font-bold text-[#3C117E] transition-all hover:text-[#8057bd]"
          >
            Cadastre-se aqui
          </Link>
        </div>
      </form>
    </div>
  );
}
