import BackButton from "@/components/Buttons/BackButton";
import BalancoGeral from "@/components/IEsPage/Contrapartidas/BalancoGeral";

interface VisualizacaoGeralProps {
  searchParams: { view: string, date: string };
}

export default function VisualizacaoNEPGeral({ searchParams }: VisualizacaoGeralProps) {
  return (
    <>
      <h1 className='text-3xl mt-14 mb-14 font-bold'>Contrapartidas -{">"} Balanço Total</h1>

      <BalancoGeral searchParams={searchParams} />

      <BackButton href={"/home-ies/contrapartidas"}/>
    </>
  )
}