import Link from "next/link";

interface BackButtonProps {
  href: string;
  className?: string;
}

function BackButton({ href, className }: BackButtonProps) {
  return (
    <div className={className ? className : "mt-6"}>
      <Link
        href={href}
        className={`bg-[#3C117E] text-white px-20 py-4 rounded-lg font-bold border-2 border-roxo transition duration-300 hover:bg-transparent hover:text-roxo`}
      >
        Voltar
      </Link>
    </div>
  )
}

export default BackButton