import Card from "@/components/ResusPage/Card";

export default function Solicitações() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Solicitações</h1>

      <div className="flex flex-col items-center gap-10 mb-32">
        <Card title="Documentos Requeridos" src="Icone_Estágios.png" linkTo="/home-resus/plano-trabalho/documentos-requeridos"/>
      </div>
    </>
  )
}