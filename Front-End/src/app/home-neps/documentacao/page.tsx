import Card from "@/components/NepsPage/Card";

export default function Documentacao() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Documentação</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card title="Documentos Pendentes" src="icon-folder2.png" linkTo="/home-neps"/>
        <Card title="Documentos Enviados" src="icon-folder.png" linkTo="/home-neps"/>
      </div>
    </>
  )
}