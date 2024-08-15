interface Props {
  params: { id: number };
  searchParams: { view: string, date: string };
}

import { getMonthNameByNumber } from '@/utils/getMonthName';
import data from '../../../../databaseTeste/dataNEPS.json'

export default function VisualizacaoNEP({ params, searchParams }: Props) {
  const nep = data.find(nep => nep.id === +params.id)
  const view = searchParams.view

  const capitalizeView = view[0].toUpperCase() + view.slice(1)

  let date = searchParams.date
  if(searchParams.view === "mes") {
    date = getMonthNameByNumber(searchParams.date)
  }

  return (
    <>
      {nep ? (
        <> 
          <div className='bg-roxo text-white px-8 py-7 flex justify-between items-center rounded-lg'>
            <div className='flex flex-col gap-4 text-lg'> 
              <h2>
                <span className='font-bold'>Serviço de Saúde:</span> {nep?.neps}
              </h2>
              <h2>
                <span className='font-bold'>Tipo de Visualização:</span> {view === "mes" ? "Mês" : capitalizeView} ({date})
              </h2>
            </div>

            <div className='bg-roxoClaro text-roxo font-bold w-36 p-2 py-4 rounded-lg text-center cursor-pointer  transition-all hover:bg-[#c7c3ce]'>
              Gerar Planilha Completa
            </div>
          </div>
        </>
      ) : (
        <h1 className='text-red-500 text-xl font-bold mb-14'>Não conseguimos encontrar a NEP especificada.</h1>
      )}
    </>
  )
}