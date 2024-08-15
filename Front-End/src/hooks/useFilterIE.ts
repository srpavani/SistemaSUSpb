import { Dispatch, SetStateAction, useEffect } from "react"

interface IEType {
  id: number;
  instituicaoEnsino: string;
  tipoIE: string;
  estagiarios: number;
}

export default function useFilterIE(selectedOption: string, setFilteredData: Dispatch<SetStateAction<IEType[]>>, data: IEType[]) {
  useEffect(() => {
    if(selectedOption === "" || selectedOption === "todas") {
      setFilteredData(data)
    } else if(selectedOption === "publicas") {
      setFilteredData(data.filter(d => d.tipoIE === "Pública"))
    } else if(selectedOption === "privadas") {
      setFilteredData(data.filter(d => d.tipoIE === "Privada"))
    }
  }, [selectedOption])
}