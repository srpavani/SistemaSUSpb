'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";

const LoginAccess = () => {
  const { user } = useAuthContext()
  const [orgao, setOrgao] = useState("")
  const [firstName, setFirstName] = useState("")

  useEffect(() => {
    if(user) {
      if("esp_pb_id" in user) setOrgao("esp")
      else if("nep_id" in user) setOrgao("nep")
      else if("ie_id" in user) setOrgao("ie")

      setFirstName(user.nomeCompleto.split(" ")[0])
    }
  }, [])

  return (
    <main className="flex flex-col flex-grow justify-center">
      <div className="p-24 flex justify-center">
        <div className="p-5 bg-bgCadastro w-[43rem] h-[527px] pb-20 rounded-[30px] shadow-dropCadastro flex flex-col items-center">
          <Image
            src={"/images/Logo_fundo_Transparente.png"}
            alt="Logo Rede Escola SUS-PB"
            width={280}
            height={200}
          />
          <span className="flex justify-center text-xl font-normal tracking-wide -mt-7">
            Sistema de Gestão da Rede Escola SUS-PB
          </span>
          <h3 className="mt-8 text-xl">
            <strong>
              Bem vindo, <span className="text-roxo">{firstName}!</span>
            </strong>
          </h3>
          <h2 className="mt-3 text-[1.3rem]">
            <strong>Entrar em:</strong>
          </h2>
          <div className="flex gap-12 mt-8">
            <div className={orgao !== "ie" ? 'cursor-not-allowed' : ''}>
              <Link className={orgao !== "ie" ? 'pointer-events-none' : ''} href={"/home-ies"}>
                <div className={`w-36 h-32 bg-vermelho flex justify-center items-center shadow-dropShadow rounded-3xl transition-all hover:bg-red-600`}>
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/images/homeicon.png"}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <h4 className="text-xl mt-1  text-white font-bold">IE</h4>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className={orgao !== "esp" ? 'cursor-not-allowed' : ''}>
              <Link className={orgao !== "esp" ? 'pointer-events-none' : ''} href={"/home-resus"}>
                <div className="w-36 h-32 bg-roxo flex justify-center items-center shadow-dropShadow rounded-3xl transition-all hover:bg-violet-800">
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/images/homeicon.png"}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <h4 className="text-xl mt-1 text-white font-bold">RESUS</h4>
                  </div>
                </div>
              </Link>
            </div>
      
            <div className={orgao !== "nep" ? 'cursor-not-allowed' : ''}>
              <Link className={orgao !== "nep" ? 'pointer-events-none' : ''} href={"/home-neps"}>
                <div className="w-36 h-32 bg-verde flex justify-center items-center shadow-dropShadow rounded-3xl transition-all hover:bg-green-600">
                  <div className="flex flex-col items-center">
                    <Image
                      src={"/images/homeicon.png"}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <h4 className="text-xl mt-1  text-white font-bold">NEP</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginAccess;
