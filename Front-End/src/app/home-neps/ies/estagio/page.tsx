import BackButton from "@/components/Buttons/BackButton";
import Card from "@/components/NepsPage/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estágio",
  description: "Opções dentro de Estágio",
};

export default function Estagio() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">IEs -{">"} Estágios</h1>

      <div className="flex flex-col items-center gap-10">
        <Card title="Novo Estágio" src="Img_Estágios.png" linkTo="/home-neps" />
        <Card title="Estágios em Andamento" src="Icone_Estágios.png" linkTo="/home-neps" />
      </div>

      <div className="mt-44">
        <BackButton href="/home-neps/ies" />
      </div>
    </>
  )
}