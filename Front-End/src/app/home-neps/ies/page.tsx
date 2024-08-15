import Card from "@/components/NepsPage/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEs",
  description: "Opções dentro de IEs",
};

export default function Ies() {
  return (
    <>
      <h1 className="text-4xl mt-14 mb-10 font-bold">IEs</h1>

      <div className="flex flex-col items-center gap-10 mb-32">
        <Card title="Estágio" src="Icone_Estágios.png" linkTo="/home-neps/ies/estagio"/>

        <Card title="IEs Conveniadas" src="Icone_IEs.png" linkTo="/home-neps/ies/ies-conveniadas"/>
        
        <Card title="Cursos" src="Icone_Cursos.png" linkTo="/home-neps/ies/cursos"/>
      </div>
    </>
  )
}