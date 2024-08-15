import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  text: string;
  src: string;
  alt: string;
  linkTo: string;
  isActive: boolean;
}

export const MenuItem = ({ text, src, alt, linkTo, isActive }: MenuItemProps) => {
  return (
    <div>
      <Link 
        className={`w-full text-[#e6e1ee] p-3 py-5  flex gap-3 hover:bg-[#794EBA] items-center xl:m-auto xl:w-11/12 xl:rounded-2xl ${isActive && 'bg-[#794EBA] font-bold'}`}
        href={linkTo}
      >
        <Image
          src={src}
          alt={alt} 
          width={22} 
          height={22} 
        />
        {text}
      </Link>  
    </div>
  );
}