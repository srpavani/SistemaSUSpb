import BackButton from "@/components/Buttons/BackButton";
import VisualizacaoIE from "@/components/ResusPage/Contrapartidas/VisualizacaoIE";
import TableContrapartidasMonthDays from "@/components/ResusPage/Tables/TableContrapartidasMonthDays";
import TableContrapartidaNepsConveniadas from "@/components/ResusPage/Tables/TableContrapartidasNepsConveniadas";

interface Props {
  params: { id: number };
  searchParams: { view: string, date: string };
}

export default function VisualizacaoBalancoPorIEEspecifica({ params, searchParams }: Props) {
  return (
    <div>
      <h1 className='text-3xl mt-14 mb-14 font-bold'>Contrapartidas -{">"} Visualização de Balanço por IE</h1>

      <VisualizacaoIE params={params} searchParams={searchParams} />

      {searchParams.view === "mes" ? (
        <TableContrapartidasMonthDays date={searchParams.date} isIEdata={false} />
      ) : (
        <TableContrapartidaNepsConveniadas date={searchParams.date} view={searchParams.view} />
      )}

      <BackButton href={"/home-resus/contrapartidas/visualizacao-ie"}/>
    </div>
  )
}