import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { getLocaisTrabalho } from "@/services/getLocaisTrabalho"
import { useLoaderContext } from "@/contexts/LoaderContext"

export function useLocaisTrabalho(cargoSelecionado: string) {
  const { setValue } = useForm()
  const { handleLoading } = useLoaderContext()
  const [locaisTrabalho, setLocaisTrabalho] = useState<LocalTrabalhoSelect[]>([])

  useEffect(() => {
    const fetchLocaisTrabalho = async () => {
      if(cargoSelecionado) {
        try {
          handleLoading(true)
          let locais = await getLocaisTrabalho(cargoSelecionado)

          locais = locais.map((local: { nep_id?: number, nep_nome?: string, ie_id?: number, ie_nome?: string, esp_pb_id?: number, esp_nome?: string }) => {
            if(cargoSelecionado === "coord_nep") {
              return {
                id: local.nep_id,
                nome: local.nep_nome
              }
            } else if(cargoSelecionado === "coord_ie") {
              return {
                id: local.ie_id,
                nome: local.ie_nome
              }
            } else if(cargoSelecionado === "adm_resus") {
              return {
                id: local.esp_pb_id,
                nome: local.esp_nome
              }
            }
            
            return local
          })

          handleLoading(false)
          setValue("endereco_local_trabalho", "")
          setLocaisTrabalho(locais)
        } catch (error) {
          console.error("Erro ao obter locais de trabalho:", error)
        }
      } else {
        setLocaisTrabalho([])
        setValue("endereco_local_trabalho", "")
      }
    }

    fetchLocaisTrabalho()
  }, [cargoSelecionado, setValue])

  return locaisTrabalho
}