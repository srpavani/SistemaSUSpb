import Image from "next/image";
import LogoRESUS from "../../../public/images/Logo_fundo_Transparente.png";

import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import RegisterForm from "@/components/Register/RegisterForm/RegisterForm";

export const metadata: Metadata = {
  title: "Cadastro - ESP",
  description: "Página de Cadastro ESP",
};

export default function Cadastro() {
  return (
    <>
      <div className="mt-[78px] mb-24 flex justify-center">
        <div className="p-5 bg-bgCadastro w-[800px] pb-16 rounded-[30px] shadow-dropCadastro flex flex-col items-center">
          <Image
            width={280}
            height={250}
            src={LogoRESUS}
            alt="Logo RESUS-PB"
          />
          <span className="flex justify-center text-[1.2rem] font-semibold tracking-wide -mt-8">
            Sistema de Gestão da Rede Escola SUS-PB
          </span>
          <h1 className="text-primaryColor flex justify-center font-light text-4xl mt-8 mb-12">
            Cadastro
          </h1>
          <div>
            <RegisterForm />

            <div className="text-center mt-6">
              <p className="mb-1 font-medium">Já possui uma conta?</p>
              <Link href={"/"} className="font-bold text-[#3C117E] transition-all hover:text-[#8057bd]">Faça login aqui.</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
