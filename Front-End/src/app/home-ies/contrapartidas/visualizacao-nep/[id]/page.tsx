interface VisualizacaoProps {
  params: { id: number };
  searchParams: { view: string, date: string };
}

import VisualizacaoNEP from '@/components/IEsPage/Contrapartidas/VisualizacaoNEP';
import Link from 'next/link';


export default function VisualizacaoNEPEspecifica({ params, searchParams }: VisualizacaoProps) {

  return (
    <div>
      <h1 className='text-3xl mt-14 mb-14 font-bold'>Contrapartidas -{">"} Visualização por NEP</h1>

      <VisualizacaoNEP params={params} searchParams={searchParams} />

      <Link href={"/home-ies/contrapartidas"} className='bg-roxo text-white px-16 py-4 rounded-lg border-2 border-roxo transition-all hover:bg-transparent hover:text-roxo'>Voltar</Link>
    </div>
  )
}