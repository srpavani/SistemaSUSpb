import Card from "@/components/IEsPage/Card";

export default function Solicitações() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Solicitações</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card title="Documentos Requeridos" src="Icone_Estágios.png" linkTo="/home-ies"/>

        <Card title="Enviar Solicitação de Estágio" src="Icone_IEs.png" linkTo="/home-ies"/>

        <Card title="Imprimir Formulário de Compactuação" src="icone-impressora-branca.png" linkTo="/home-ies"/>
      </div>
    </>
  )
}