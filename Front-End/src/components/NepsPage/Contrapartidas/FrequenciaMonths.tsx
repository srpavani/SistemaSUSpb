import { getMonthNameByName } from "@/utils/getMonthName";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Props {
  numberOfSemester: string;
  setSelectedMonth: React.Dispatch<string> 
}

// value do mês = nome ou número do mês?

export default function FrequenciaMonths({ numberOfSemester, setSelectedMonth }: Props) {
  const [monthActive, setMonthActive] = useState("")

  useEffect(() => {
    if(numberOfSemester === "1") setMonthActive("janeiro")
    else setMonthActive("julho")
  }, [numberOfSemester])

  const handleClick = (month: string, number: string) => {
    setSelectedMonth(month)
    setMonthActive(month)
    
    const monthCapitalize = getMonthNameByName(month)
    toast.success(`Mudança para o mês de ${monthCapitalize}`, { position: 'top-right' })
  }

  const checkMonthStyle = (month: string) => {
    if(monthActive === month) return "font-extrabold uppercase"
    else return "font-medium capitalize"
  }

  return (
    <>
      {numberOfSemester === "1" ? (
        <div className="mt-12 flex justify-between">
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("janeiro")}`} onClick={() => handleClick("janeiro", "1")}>Janeiro</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("fevereiro")}`} onClick={() => handleClick("fevereiro", "2")}>Fevereiro</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("marco")}`} onClick={() => handleClick("marco", "3")}>Março</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("abril")}`} onClick={() => handleClick("abril", "4")}>Abril</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("maio")}`} onClick={() => handleClick("maio", "5")}>Maio</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("junho")}`} onClick={() => handleClick("junho", "6")}>Junho</span>
        </div>
      ) : (
        <div className="mt-12 flex justify-between">
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("julho")}`} onClick={() => handleClick("julho", "7")}>Julho</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("agosto")}`} onClick={() => handleClick("agosto", "8")}>Agosto</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("setembro")}`} onClick={() => handleClick("setembro", "9")}>Setembro</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("outubro")}`} onClick={() => handleClick("outubro", "10")}>Outubro</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("novembro")}`} onClick={() => handleClick("novembro", "11")}>Novembro</span>
          <span className={`text-roxo text-[1.1rem] tracking-wide cursor-pointer transition-all hover:text-black ${checkMonthStyle("dezembro")}`} onClick={() => handleClick("dezembro", "12")}>Dezembro</span>
        </div>
      )}
    </>
  )
}