import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getLocaisTrabalho(cargo: string) {
   try {
    if(cargo === "coord_nep") {
      const response = await axios.get(`${baseURL}/esp/neps/lista/`)

      return response.data
    } else if(cargo === "coord_ie") {
      const response = await axios.get(`${baseURL}/esp/iess/lista/`)

      return response.data
    } else if(cargo === "adm_resus") {
      return [
        { esp_pb_id: 1, esp_nome: "Administrador do Resus" } 
      ]
    }
  } catch (error) {
    console.error("Erro ao buscar locais de trabalho: " + error);
  }
}