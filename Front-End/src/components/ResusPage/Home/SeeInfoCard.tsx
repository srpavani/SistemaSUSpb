import Link from "next/link"

interface SeeInfoCard {
  title: string;
  buttonTitle: string;
}

function SeeInfoCard({ title, buttonTitle }: SeeInfoCard) {
  return (
    <div className={`bg-roxoClaro py-8 rounded-lg text-center flex flex-col justify-between items-center p-2 flex-1 max-h-48 xl:flex-1`}>
      <h2 className="text-[1.1rem] xl:text-xl text-roxo font-bold mb-6">{title}</h2>
      <Link href={"/"} className="text-white bg-roxo py-3 px-6 text-center rounded-lg border-2 border-roxo text-[0.93rem] transition duration-300 hover:bg-transparent hover:text-roxo">{buttonTitle}</Link>
    </div>
  )
}

export default SeeInfoCard