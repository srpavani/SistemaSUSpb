import SelectIEsNEPS from "@/components/ResusPage/SelectIEsNEPS"

const ies = ["IE1", "IE2", "IE3", "IE4", "IE5"]
const neps = ["NEPS1", "NEPS2", "NEPS3", "NEPS4", "NEPS5"]

export default function Dashboards() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-10 font-bold">Dashboards</h1>

      <div className="bg-roxoClaro w-full min-h-screen rounded-lg p-10">
        <div className="flex gap-8 justify-center">
          <SelectIEsNEPS title="IEs" htmlFor="ies" textFirstOption="Selecione a IE" data={ies} />

          <SelectIEsNEPS title="NEPS" htmlFor="neps" textFirstOption="Selecione a NEPS" data={neps} />
        </div>
      </div>
    </>
  )
}