import BackButton from "@/components/Buttons/BackButton"
import ButtonGerarBalancoTotal from "@/components/ResusPage/Contrapartidas/ButtonGerarBalancoTotal"
import TableContrapartidasIEsBalanco from "@/components/ResusPage/Tables/TableContrapartidasIEsBalanco"

function VisualizacaoBalancoPorIE() {
  return (
    <div>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Contrapartidas -{">"} Visualização de Balanço por IE</h1>

      <TableContrapartidasIEsBalanco />

      <ButtonGerarBalancoTotal balancoPorNEP={false} />

      <BackButton href={"/home-resus/contrapartidas"} className="mt-16"/>
    </div>
  )
}

export default VisualizacaoBalancoPorIE