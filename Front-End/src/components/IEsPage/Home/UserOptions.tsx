import { useAuthContext } from "@/contexts/AuthContext";
import Image from "next/image";

interface OptionProps {
  iconSrc: string;
  title: string;
  onClick?: () => void;
}

export function UserOptions() {
  const { logout } = useAuthContext()

  return (
    <div className="absolute mt-3">
      <div className="w-auto h-auto bg-roxoClaro text-roxo rounded-lg relative shadow-[0_10px_20px_rgba(0,_0,_0,_0.6)]">
        <div className="flex flex-col font-bold">
          <Option iconSrc="icon-config.png" title="Configurações"/>
          <Option iconSrc="icon-power.png" title="Sair" onClick={logout}/>
        </div>

        <div 
          className="w-0 h-0 absolute bottom-full left-3"
          style={{ borderBottom: '12px solid #E6E1EE', borderRight: '12px solid transparent',  borderLeft: '12px solid transparent' }}
        ></div>
      </div>
    </div>
  )
}

export function Option({ iconSrc, title, onClick }: OptionProps) {
  return (
    <p className="flex gap-2 transition cursor-pointer pr-12 pl-3 py-2 hover:text-gray-500" onClick={onClick}>
      <Image
        width={22}
        height={15}
        src={`/images/${iconSrc}`}
        alt={`Ícone ${title}`}
      />
      {title}
    </p>
  )
}