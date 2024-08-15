import BackButton from "@/components/Buttons/BackButton";
import FormEstagioSupervisionado from "@/components/IEsPage/SelecaoEstudantes/FormEstagioSupervionado";

export default function cadastroEstudanteEstagioSupervisionado() {
  return (
    <>
      <h1 className="text-4xl mt-14 mb-10 font-bold">Cadastro de Estudantes</h1>

      <FormEstagioSupervisionado />

      <BackButton href="/home-ies/selecao-estudantes" className="mt-20" />
    </>
  )
}