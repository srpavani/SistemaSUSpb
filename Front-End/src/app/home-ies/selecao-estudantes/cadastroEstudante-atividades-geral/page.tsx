import BackButton from "@/components/Buttons/BackButton";
import FormAtividadesGeral from "@/components/IEsPage/SelecaoEstudantes/FormAtividadesGeral";

export default function cadastroEstudanteAtividadesGeral() {
  return (
    <>
      <h1 className="text-4xl mt-14 mb-10 font-bold">Cadastro de Estudantes</h1>

      <FormAtividadesGeral />

      <BackButton href="/home-ies/selecao-estudantes" className="mt-28" />
    </>
  )
}