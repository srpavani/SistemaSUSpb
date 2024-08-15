import BackButton from "@/components/Buttons/BackButton";
import BalancoTotalIEs from "@/components/ResusPage/Contrapartidas/BalancoTotalIEs";

interface Props {
  searchParams: { date: string, view: string }
}

export default function VisualizacaoBalancoPorIEGeral({ searchParams}: Props) {
  return (
    <div>
      <h1 className='text-3xl mt-14 mb-14 font-bold'>Contrapartidas -{">"} Visualização por IE -{">"} Balanço Total</h1>

      <BalancoTotalIEs searchParams={searchParams} />

      <BackButton href="/home-resus/contrapartidas/visualizacao-ie" />
    </div>
  )
}