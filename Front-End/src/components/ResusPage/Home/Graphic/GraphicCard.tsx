interface GraphicCard {
  textColor?: string;
  title: string;
  quantity: number;
}

function GraphicCard({ textColor, title, quantity }: GraphicCard) {
  return (
     <div className="bg-white rounded-2xl text-center py-4 px-8 text-roxo flex flex-col justify-between items-center w-60 transition hover:bg-[#ffffff94]">
        <h3 className={`mb-3 ${textColor} xl:text-lg`}>
          {title}
        </h3>
        <span className="text-2xl">R${quantity}</span>
      </div>
  )
}

export default GraphicCard