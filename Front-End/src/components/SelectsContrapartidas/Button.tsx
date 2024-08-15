interface ButtonProps {
  onClick?: () => void;
  text: string;
}

export default function Button({ onClick, text }: ButtonProps) {
  return (
    <button 
      className="bg-[#3C117E] text-white min-w-48 px-4 py-3 rounded-xl text-lg font-bold transition duration-300 hover:bg-violet-800 "
      onClick={onClick}
    >
      {text}
    </button>
  )
}