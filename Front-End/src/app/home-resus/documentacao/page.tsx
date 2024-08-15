import Card from "@/components/ResusPage/Card";

export default function Documentacao() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Documentação</h1>

      <div className="flex flex-col items-center gap-10 mb-32">
        <Card title="Documentos NEPS" src="icon-neps2.png" linkTo="/home-resus/documentacao/documentos-neps"/>

        <Card title="Documentos IEs" src="Icone_IEs.png" linkTo="/home-resus/documentacao/documentos-ies"/>
      </div>
    </>
  )
}