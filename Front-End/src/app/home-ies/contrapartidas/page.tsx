
import ButtonModalGerarBalancoGeral from "@/components/IEsPage/Contrapartidas/ButtonModalGerarBalancoGeral";
import TableContrapartidas from "@/components/IEsPage/Tables/TableContrapartidas";

export default function Contrapartidas() {
  return (
    <>
      <h1 className="text-3xl my-14 font-bold">Contrapartidas</h1>

      <TableContrapartidas />

      <div className="text-center">
        <ButtonModalGerarBalancoGeral />
      </div>
    </>
  )
}