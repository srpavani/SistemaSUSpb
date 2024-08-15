import Card from "@/components/ResusPage/Card";

export default function PlanoTrabalho() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Plano de Trabalho</h1>

      <div className="flex flex-col items-center gap-10 mb-32">
        <Card title="Gerar novo Plano de Trabalho" src="icon-shopping-bag2.png" linkTo="/home-resus/plano-trabalho/gerar-plano-trabalho"/>

        <Card title="Visualizar Planos de Trabalho" src="icon-shopping-bag3.png" linkTo="/home-resus/plano-trabalho/visualizar-plano-trabalho"/>

        <Card title="Visualizar Controle de Doações" src="icon-shopping-bag.png" linkTo="/home-resus/plano-trabalho/visualizar-controle-doacoes"/>
      </div>
    </>
  )
}