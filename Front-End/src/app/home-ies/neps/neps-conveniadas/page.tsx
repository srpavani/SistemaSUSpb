import BackButton from "@/components/Buttons/BackButton";
import TableNepsConveniadas from "@/components/IEsPage/Tables/TableNEPSConveniadas";

export default function NepsConveniadas() {
  return (
    <>
      <h1 className="text-2xl mt-14 mb-10 font-bold">NEPS -{">"} NEPS CONVENIADAS</h1>

      <TableNepsConveniadas />

      <BackButton href="/home-ies/neps"/>
    </>
  )
}