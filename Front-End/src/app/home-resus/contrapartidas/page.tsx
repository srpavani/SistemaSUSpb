import Card from "@/components/ResusPage/Card";

export default function Contrapartidas() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Contrapartidas</h1>

      <div className="flex flex-col items-center gap-10 mb-32">
        <Card
          title="Visualização por NEP"
          src="Icone_Custos2.png"
          linkTo="/home-resus/contrapartidas/visualizacao-nep"
        />

        <Card
          title="Visualização por IE"
          src="Icone_Custos2.png"
          linkTo="/home-resus/contrapartidas/visualizacao-ie"
        />
      </div>
    </>
  );
}
