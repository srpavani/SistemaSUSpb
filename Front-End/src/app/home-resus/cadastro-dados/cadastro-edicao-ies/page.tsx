import BackButton from "@/components/Buttons/BackButton";
import CadastroEdicaoIEContent from "@/components/ResusPage/CadastroDados/IEs/CadastroEdicaoIEContent";

export default function CadastroEdicaoIEs() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Cadastro e Edição de IE</h1>

      <CadastroEdicaoIEContent />

      <BackButton href="/home-resus/cadastro-dados" className="mt-16" />
    </>
  )
}