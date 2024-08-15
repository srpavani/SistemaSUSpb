import { toast } from "sonner"

export default function showInfoToastTipoIE(option: string) {
  if(option === "privadas" || option === "publicas") {
    toast.info(`Visualizando as IEs ${option === "publicas" ? "PÚBLICAS" : "PRIVADAS"}`, { position: "top-right" })
  } else {
    toast.info(`Visualizando TODAS as IEs`, { position: "top-right" })
  }
}