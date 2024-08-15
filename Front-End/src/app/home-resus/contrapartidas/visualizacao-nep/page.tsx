import BackButton from "@/components/Buttons/BackButton"
import ButtonGerarBalancoTotal from "@/components/ResusPage/Contrapartidas/ButtonGerarBalancoTotal"
import TableContrapartidasNepsBalanco from "@/components/ResusPage/Tables/TableContrapartidasNepsBalanco"

function VisualizacaoBalancoPorNEP() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-4 font-bold">Contrapartidas -{">"} Visualização de Balanço por NEP</h1>

      <TableContrapartidasNepsBalanco />

      <ButtonGerarBalancoTotal balancoPorNEP={true} />

      <BackButton href={"/home-resus/contrapartidas"} className="mt-16"/>
    </>
  )
}

export default VisualizacaoBalancoPorNEP