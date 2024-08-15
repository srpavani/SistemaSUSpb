import Card from "@/components/NepsPage/Card";

export default function Contrapartidas() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Contrapartidas</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card
          title="Nova Planilha"
          src="icon-folder3.png"
          linkTo="/home-neps/contrapartidas/nova-planilha"
        />

        <Card
          title="Planilha"
          src="icon-folder.png"
          linkTo="/home-neps/contrapartidas/planilha"
        />
      </div>
    </>
  );
}
