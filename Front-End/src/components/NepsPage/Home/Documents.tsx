import Link from "next/link";

function Documents() {
  return (
    <div className="bg-roxo text-center flex justify-center items-center gap-6 rounded-lg w-full py-6 px-3 h-full">
      <span className="bg-roxoClaro flex px-9 py-7 justify-center items-center rounded-full text-5xl text-roxo font-bold aspect-square xl:text-6xl">
        7
      </span>
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold text-xl 2xl:text-2xl">
          Documentações Pendentes
        </h2>
        <Link
          href={"/"}
          className="bg-roxoClaro text-roxo py-3 text-center rounded-lg font-bold transition hover:bg-[#b3b1b6]"
        >
          Ir para Documentações
        </Link>
      </div>
    </div>
  );
}

export default Documents;
