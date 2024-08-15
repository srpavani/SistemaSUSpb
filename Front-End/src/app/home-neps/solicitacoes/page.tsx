import Card from "@/components/NepsPage/Card";

export default function Solicitacoes() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Solicitações</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card title="Documentos Requeridos" src="Icone_Estágios.png" linkTo="/home-neps"/>
        <Card title="Solicitações de Estágio Recebidas" src="Icone_IEs.png" linkTo="/home-neps"/>
      </div>
    </>
  )
}