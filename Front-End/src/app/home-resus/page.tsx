import Documents from "@/components/ResusPage/Home/Documents";
import ChartSection from "@/components/ResusPage/Home/Graphic/ChartSection";
import GraphicCard from "@/components/ResusPage/Home/Graphic/GraphicCard";
import InitialSection from "@/components/ResusPage/Home/Graphic/InitialSection";
import InfoCard from "@/components/ResusPage/Home/InfoCard";
import SeeInfoCard from "@/components/ResusPage/Home/SeeInfoCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home RESUS",
  description: "Página inicial do RESUS",
};

function Dashboard() {
  return (
    <div className="grid grid-cols-10 mt-12 gap-5 xl:gap-9">
      <div className="col-span-7">
        <div className="flex flex-wrap gap-4 mb-12 xl:flex-nowrap xl:justify-between 1.5xl:mb-10">
          <InfoCard
            color="#FE0000"
            imageAlt="Ícone Estágios"
            imageSrc="Icone_Estágios_Red.png"
            title="Estágios"
            subTitle="Estagiários"
            quantity={19}
          />

          <InfoCard
            color="#006837"
            imageAlt="Ícone Documentação"
            imageSrc="Img_Doc.png"
            title="Documentação"
            subTitle="+ Documentações"
            quantity={13}
            width={79}
            height={79}
          />

          <InfoCard
            color="#29AAE1"
            imageAlt="Ícone Itens"
            imageSrc="Icone_Bag_Blue.png"
            title="Itens"
            subTitle="Itens Alocados"
            quantity={23}
          />

          <InfoCard
            color="#FBB03B"
            imageAlt="Ícone Dólar"
            imageSrc="Icone_Dollar_Yellow.png"
            title="Contrapartida"
            subTitle="+ Contrapartidas"
            quantity={4300}
            imageNoPadding={true}
            hasRealSign={true}
          />
        </div>

        <div className="flex gap-4 w-full justify-around">
          <SeeInfoCard
            title="Históricos Passados"
            buttonTitle="Ver Históricos"
          />
          <SeeInfoCard title="Relatórios Finais" buttonTitle="Ver Relatórios" />
          <SeeInfoCard
            title="Solicitações"
            buttonTitle="Ir para Solicitações"
          />
        </div>
      </div>

      <div className="col-span-3">
        <Documents />
      </div>

      {/* Graphic */}
      <div className="col-span-10 bg-roxoClaro rounded-lg py-6 px-4 xl:px-10">
        <InitialSection />

        <ChartSection />

        <div className="flex justify-between flex-wrap mt-10 font-bold gap-4 xl:flex-nowrap">
          <GraphicCard
            title="Contrapartida IEs (Mês)"
            textColor="text-vermelho"
            quantity={10015}
          />

          <GraphicCard
            title="Contrapartida NEPS (Mês)"
            textColor="text-verde"
            quantity={10015}
          />

          <GraphicCard title="Contrapartidas Semestrais" quantity={20310} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
