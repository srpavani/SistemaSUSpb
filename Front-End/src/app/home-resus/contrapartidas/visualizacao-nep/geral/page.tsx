import BackButton from "@/components/Buttons/BackButton";
import BalancoTotalNEPS from "@/components/ResusPage/Contrapartidas/BalancoTotalNEPS";

interface Props {
  searchParams: { view: string, date: string };
}

export default function VisualizacaoBalancoPorNEPGeral({ searchParams }: Props) {
  return (
    <div>
      <h1 className='text-3xl mt-14 mb-14 font-bold'>Contrapartidas -{">"} Visualização por NEP -{">"} Balanço Total</h1>

      <BalancoTotalNEPS searchParams={searchParams} />

      <BackButton href="/home-resus/contrapartidas/visualizacao-nep" />
    </div>
  )
}