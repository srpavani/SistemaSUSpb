import BackButton from "@/components/Buttons/BackButton";
import FormResidenciaRodizio from "@/components/IEsPage/SelecaoEstudantes/FormResidenciaRodizio";

export default function cadastroEstudanteResidenciaRodizio() {
  return (
    <>
      <h1 className="text-4xl mt-14 mb-10 font-bold">Cadastro de Estudantes</h1>

      <FormResidenciaRodizio />

      <BackButton href="/home-ies/selecao-estudantes" className="mt-20" />
    </>
  )
}