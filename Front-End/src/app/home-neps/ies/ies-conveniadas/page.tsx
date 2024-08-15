import BackButton from "@/components/Buttons/BackButton"
import TableIEsConveniadas from "@/components/NepsPage/Tables/TableIEsConveniadas"

export default function IesConveniadas() {
  return (
    <>
      <h1 className="text-2xl mt-14 mb-10 font-bold">IES -{">"} INSTITUIÇÕES DE ENSINO CONVENIADAS</h1>

      <TableIEsConveniadas />

      <BackButton href="/home-neps/ies" />
    </>
  )
}