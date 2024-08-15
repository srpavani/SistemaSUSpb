import Card from "@/components/NepsPage/Card";

export default function Dashboards() {
  return (
    <>
      <h1 className="text-3xl mt-14 mb-14 font-bold">Dashboards</h1>

      <div className="flex flex-col items-center gap-10 mb-48">
        <Card title="Panorama das Contrapartidas" src="icon-graphic.png" linkTo="/dashboard-neps"/>
        <Card title="Panorama das Doações" src="icon-graphic.png" linkTo="/dashboard-neps"/>
      </div>
    </>
  )
}