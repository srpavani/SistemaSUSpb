import BackButton from "@/components/Buttons/BackButton";
import VisualizacaoNEP from "@/components/ResusPage/Contrapartidas/VisualizacaoNEP";
import TableContrapartidaIEsConveniadas from "@/components/ResusPage/Tables/TableContrapartidaIEsConveniadas";
import TableContrapartidasMonthDays from "@/components/ResusPage/Tables/TableContrapartidasMonthDays";

interface Props {
  params: { id: number };
  searchParams: { view: string, date: string };
}

export default function VisualizacaoBalancoPorNEPEspecifica({ params, searchParams }: Props) {
  return (
    <div>
      <h1 className='text-3xl mt-14 mb-14 font-bold'>Contrapartidas -{">"} Visualização de Balanço por NEP</h1>

      <VisualizacaoNEP params={params} searchParams={searchParams} />

      {searchParams.view === "mes" ? (
        <TableContrapartidasMonthDays date={searchParams.date} isIEdata={true} />
      ) : (
        <TableContrapartidaIEsConveniadas date={searchParams.date} view={searchParams.view} />
      )}
     
      <BackButton href={"/home-resus/contrapartidas/visualizacao-nep"}/>
    </div>
  )
}