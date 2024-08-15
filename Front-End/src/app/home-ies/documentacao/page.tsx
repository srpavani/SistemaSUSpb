import Card from "@/components/IEsPage/Card";

export default function Documentacao() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Documentação</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card title="Documentos Pendentes" src="icon-folder2.png" linkTo="/home-ies/documentacao/documentos-pendentes" />
        <Card title="Documentos Enviados" src="icon-folder.png" linkTo="/home-ies/documentacao/documentos-enviados" />

        <div className="bg-roxoClaro w-[55rem] min-h-[30rem] mt-12 p-6 rounded-xl">
          <h2 className="text-roxo text-[1.6rem] font-medium">Downloads</h2>

          <div className="w-full flex justify-center mt-11">
            <Card title="Anexos Editáveis" src="icon-folder.png" linkTo="/home-ies/documentacao/anexos-editaveis" smaller={true} />
          </div>
        </div>
      </div>
    </>
  )
}