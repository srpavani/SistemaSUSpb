import Card from "@/components/IEsPage/Card";

export default function CadastroDados() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Cadastro de Dados</h1>

      <div className="flex flex-col items-center gap-10 mb-32">
        <Card title="Cadastro e Edição de IEs" src="icone-dados-ies.png" linkTo="/home-resus/cadastro-dados/cadastro-edicao-ies"/>

        <Card title="Cadastro e Edição de NEPS" src="icone-dados-neps.png" linkTo="/home-resus/cadastro-dados/cadastro-edicao-neps"/>

        <Card title="Cadastro e Edição de Cursos" src="icone-dados-cursos.png" linkTo="/home-resus/cadastro-dados/cadastro-edicao-cursos"/>
      </div>
    </>
  )
}