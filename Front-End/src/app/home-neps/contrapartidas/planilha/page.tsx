import BackButton from "@/components/Buttons/BackButton";
import VisualizacaoPlanilha from "@/components/NepsPage/Contrapartidas/VisualizacaoPlanilha";

export default function Planilha() {
  return (
    <div>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Contrapartidas -{">"} Planilha</h1>

      <VisualizacaoPlanilha />

      <BackButton href="/home-neps/contrapartidas" />
    </div>
  )
}