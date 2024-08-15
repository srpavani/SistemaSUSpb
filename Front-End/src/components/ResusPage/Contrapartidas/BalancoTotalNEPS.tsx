import { getMonthNameByNumber } from "@/utils/getMonthName";
import TableContrapartidasBalancoTotalNEPS from "../Tables/TableContrapartidasBalancoTotalNEPS";

interface Props {
  searchParams: { view: string, date: string };
}

export default function BalancoTotalNEPS({ searchParams }: Props) {
  const view = searchParams.view
  const capitalizeView = view[0].toUpperCase() + view.slice(1)

  let date = searchParams.date
  if(searchParams.view === "mes") {
    date = getMonthNameByNumber(searchParams.date)
  }

  return (
    <>
      <div className='bg-roxo text-white px-8 py-7 flex justify-between items-center rounded-lg'>
        <div className='flex flex-col gap-4 text-lg'> 
          <h2>
            <span className='font-bold'>Tipo de Visualização:</span> {capitalizeView} ({date})
          </h2>
        </div>

        <div className='bg-roxoClaro text-roxo font-bold w-44 p-2 py-4 rounded-lg text-center cursor-pointer  transition-all hover:bg-[#c7c3ce]'>
          Imprimir Planilha Completa
        </div>
      </div>

      <TableContrapartidasBalancoTotalNEPS date={searchParams.date} view={searchParams.view}  />
    </>
  )
}