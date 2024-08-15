import Image from "next/image"
import Link from "next/link";

interface CardProps {
  title: string;
  src: string;
  linkTo: string;
}

function Card({ title, src, linkTo }: CardProps) {
  return (
    <Link className="bg-roxo w-[55rem] h-24 relative  flex justify-center items-center rounded-lg cursor-pointer transition hover:bg-[#5b1bbb]" href={linkTo}>
      <Image
        src={`/images/${src}`}
        width={58}
        height={58}
        alt={src}
        className="absolute left-8 top-5"
      />
      <h2 className="text-white text-2xl">{title}</h2>
    </Link>
  )
}

export default Card