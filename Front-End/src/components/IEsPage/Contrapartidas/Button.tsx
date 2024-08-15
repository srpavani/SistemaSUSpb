interface ButtonProps {
  onClick?: () => void;
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <button 
      className="bg-[#3C117E] text-white w-52 p-3 rounded-xl text-lg font-bold transition duration-300 hover:bg-violet-800 "
      onClick={onClick}
    >
      Gerar Balanço
    </button>
  )
}