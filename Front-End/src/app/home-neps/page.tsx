import { AvailableVacancies } from "@/components/NepsPage/Home/AvailableVacancies";
import Documents from "@/components/NepsPage/Home/Documents";
import ChartSection from "@/components/NepsPage/Home/Graphic/ChartSection";
import GraphicCard from "@/components/NepsPage/Home/Graphic/GraphicCard";
import InitialSection from "@/components/NepsPage/Home/Graphic/InitialSection";
import InfoCard from "@/components/NepsPage/Home/InfoCard";
import SeeInfoCard from "@/components/NepsPage/Home/SeeInfoCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-10 mt-12 gap-5 xl:gap-10">
      <div className="col-span-7 flex flex-col justify-between">
        <div className="flex flex-wrap gap-4 mb-12 xl:flex-nowrap 1.5xl:mb-10">
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
            subTitle="Contrapartida (Mês)"
            quantity={4300}
            imageNoPadding={true}
            hasRealSign={true}
          />
        </div>

        <div className="flex w-full gap-6">
          <div className="w-2/6">
            <SeeInfoCard
              title="Atalhos"
              buttonTitle="Relatórios"
              buttonTitle2="Históricos"
            />
          </div>
          <div className="w-4/6">
            <Documents />
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <AvailableVacancies />
      </div>

      {/* Graphic */}
      <div className="col-span-10 bg-roxoClaro rounded-lg py-6 px-4 xl:px-10">
        <InitialSection />

        <ChartSection />

        <div className="flex justify-between flex-wrap mt-10 font-bold gap-4 xl:flex-nowrap">
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