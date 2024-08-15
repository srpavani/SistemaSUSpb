import Image from "next/image"

interface InfoCardProps {
  color: string;
  imageSrc: string;
  imageAlt: string;
  imageNoPadding?: boolean;
  title: string;
  subTitle: string;
  quantity: number;
  width?: number;
  height?: number;
  hasRealSign?: boolean;
}

function InfoCard(props: InfoCardProps) {
  return (
    <div className="bg-roxoClaro flex flex-col justify-between items-center gap-2 p-3 rounded-lg w-[48.5%] transition-all xl:min-w-40 2xl:max-w-60 xl:px-2 xl:py-6  hover:bg-[#d4d1d8]">
      <div className="rounded-full mb-2 " style={{ border: `14px solid ${props.color}` }}>
        <Image
          width={`${props.width ? props.width : 90}`} 
          height={`${props.height ? props.height : 90}`} 
          className={`${props.imageNoPadding ? 'p-0' : 'p-4'}`}
          src={`/images/${props.imageSrc}`}
          alt={props.imageAlt}
        />
      </div>

      <h2 className="text-roxo text-xl font-bold">{props.title}</h2>
      <p className="xl:text-sm  1.5xl:text-base">{props.subTitle}</p>
      <span className="text-roxo text-2xl font-bold mt-2">
        {props.hasRealSign && 'R$'} {props.quantity}
      </span>
    </div>
  )
}

export default InfoCard