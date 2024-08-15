import Card from "@/components/IEsPage/Card";

export default function Neps() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">NEPS</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card title="Meus Cursos" src="Icone_Cursos.png" linkTo="/home-ies"/>
        <Card title="NEPS Conveniadas" src="icon-neps2.png" linkTo="/home-ies/neps/neps-conveniadas"/>
      </div>
    </>
  )
}