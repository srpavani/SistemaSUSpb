import axios from "axios";

const baseURL = "http://localhost:8000"

export async function logoutService(authToken: string) {
  console.log(authToken)
  try {
    const response = await axios.post(`${baseURL}/user/logout/`, {
      headers: {
        Authorization: `Token ${authToken}`
      }
    })

    return response.data
  } catch (error) {
    console.error("Erro ao fazer logout:  " + error)
  }
}