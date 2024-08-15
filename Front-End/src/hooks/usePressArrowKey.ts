import { Dispatch, SetStateAction, useEffect } from "react";

export default function usePressArrowKey(etapForm: number, setEtapForm: Dispatch<SetStateAction<number>>, maxPages: number) {
  const handleKeyPress = (ev: KeyboardEvent) => {
    if(ev.key === "ArrowLeft" && etapForm > 1) {
      setEtapForm(etapForm - 1)
    } else if(ev.key === "ArrowRight" && etapForm < maxPages) {
      setEtapForm(etapForm + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [etapForm])
}