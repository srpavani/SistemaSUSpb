import BackButton from "@/components/Buttons/BackButton";
import VisualizacaoNovaPlanilhaEspecifica from "@/components/NepsPage/Contrapartidas/VisualizacaoNovaPlanilhaEspecifica";

interface Props {
  params: { ie: string };
  searchParams: { view: string, date: string };
}

export default function NovaPlanilhaEspecifica({ params, searchParams }: Props) {
  return (
    <div>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Contrapartidas -{">"} Novas Planilhas</h1>

      <VisualizacaoNovaPlanilhaEspecifica params={params} searchParams={searchParams} />

      <BackButton href="/home-neps/contrapartidas/nova-planilha" />
    </div>
  )
}