import BackButton from "@/components/Buttons/BackButton";
import CadastroEdicaoIEContent from "@/components/ResusPage/CadastroDados/IEs/CadastroEdicaoIEContent";
import CadastroEdicaoNEPContent from "@/components/ResusPage/CadastroDados/NEPs/CadastroEdicaoNEPContent";

export default function CadastroEdicaoNeps() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Cadastro e Edição de NEP</h1>

      <CadastroEdicaoNEPContent />

      <BackButton href="/home-resus/cadastro-dados" className="mt-16" />
    </>
  )
}