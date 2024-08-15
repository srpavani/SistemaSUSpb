import Link from "next/link";

interface SeeInfoCard {
  title: string;
  buttonTitle: string;
  buttonTitle2: string;
  wFull?: boolean;
}

function SeeInfoCard({ title, buttonTitle, buttonTitle2, wFull }: SeeInfoCard) {
  return (
    <div
      className={`bg-roxoClaro py-6 rounded-lg text-center flex flex-col justify-center gap-4 items-center w-full`}
    >
      <h2 className="text-xl text-roxo font-bold mb-1 1.5xl:text-2xl">
        {title}
      </h2>
      <Link
        href={"/"}
        className="text-white bg-roxo py-3 px-6 text-center w-3/4 rounded-lg border-2 border-roxo transition duration-300 hover:bg-transparent hover:text-roxo"
      >
        {buttonTitle}
      </Link>
      <Link
        href={"/"}
        className="text-white bg-roxo py-3 px-6 text-center w-3/4 rounded-lg border-2 border-roxo transition duration-300 hover:bg-transparent hover:text-roxo"
      >
        {buttonTitle2}
      </Link>
    </div>
  );
}

export default SeeInfoCard;
