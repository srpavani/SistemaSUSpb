interface GraphicCard {
  textColor?: string;
  title: string;
  titleBlock?: string;
  quantity: number;
}

function GraphicCard({ textColor, title, titleBlock, quantity }: GraphicCard) {
  return (
    <div className="bg-white rounded-xl text-center py-4 px-8 text-roxo flex flex-col justify-center items-center w-60 transition hover:bg-[#ffffff94]">
      <h3 className={`mb-3 ${textColor}`}>
        {title} <span className="block">{titleBlock}</span>
      </h3>
      <span className="text-2xl">R${quantity}</span>
    </div>
  );
}

export default GraphicCard;
