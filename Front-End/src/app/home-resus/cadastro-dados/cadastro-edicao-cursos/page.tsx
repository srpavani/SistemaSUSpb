import BackButton from "@/components/Buttons/BackButton";
import CursoContent from "@/components/ResusPage/CadastroDados/Cursos/CursoContent";

export default function CadastroEdicaoCursos() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-8 font-bold">Cadastro e Edição de Cursos</h1>

      <CursoContent />

      <BackButton href="/home-resus/cadastro-dados" />
    </>
  )
}