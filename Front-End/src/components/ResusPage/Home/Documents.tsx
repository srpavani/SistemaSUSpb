import Link from "next/link";

function Documents() {
  return (
    <div className="bg-roxo text-center flex flex-col justify-center items-center gap-4 rounded-lg py-6 px-2 h-[55%] xl:h-full xl:px-4 xl:gap-6">
      <span className="bg-roxoClaro flex p-9 justify-center items-center rounded-full text-5xl text-roxo font-bold aspect-square xl:text-6xl">
        21
      </span>
      <h2 className="text-white font-bold text-2xl">Documentações Pendentes</h2>
      <p className="text-roxoClaro italic text-sm2">
        Você possui documentações pendentes
      </p>
      <Link
        href={"/"}
        className="bg-roxoClaro text-roxo py-3 px-6 text-center rounded-lg font-bold transition hover:bg-[#cbc6d3]"
      >
        Ver Documentação
      </Link>
    </div>
  );
}

export default Documents;
