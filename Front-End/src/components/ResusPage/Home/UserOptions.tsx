import { useAuthContext } from "@/contexts/AuthContext";
import { FaGear, FaPowerOff } from "react-icons/fa6";

interface OptionProps {
  icon: any;
  title: string;
  onClick?: () => void;
}

export function UserOptions() {
  const { logout } = useAuthContext()

  return (
    <div className="absolute mt-3">
      <div className="w-auto h-auto bg-roxoClaro text-roxo rounded-lg relative shadow-[0_10px_20px_rgba(0,_0,_0,_0.6)]">
        <div className="flex flex-col font-bold">
          <Option icon={<FaGear />} title="Configurações"/>
          <Option icon={<FaPowerOff />} title="Sair" onClick={logout}/>
        </div>

        <div 
          className="w-0 h-0 absolute bottom-full left-3"
          style={{ borderBottom: '12px solid #E6E1EE', borderRight: '12px solid transparent',  borderLeft: '12px solid transparent' }}
        ></div>
      </div>
    </div>
  )
}

export function Option({ icon, title, onClick }: OptionProps) {
  return (
    <p className="flex  items-center gap-2 transition cursor-pointer pr-12 pl-3 py-2 rounded-lg hover:bg-roxo hover:text-white" onClick={onClick}>
      {icon}
      {title}
    </p>
  )
}