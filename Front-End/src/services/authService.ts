'use client'

import { LoginSchemaType } from "@/schemas/loginSchema";
import { RegisterSchemaType } from "@/schemas/registerSchema";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function userRegister(data: RegisterSchemaType) {
  try {
    let url: string
    if(data.cargo === 'coord_ie') url = `${baseURL}/user/registrar/ie/`
    else if (data.cargo === 'coord_nep') url = `${baseURL}/user/registrar/nep/`
    else if(data.cargo === 'adm_resus') url = `${baseURL}/user/registrar/esp/`
    else throw new Error('Cargo inválido')

    const response = await axios.post(url, data)

    return response.data
  } catch (error: any) {
    if(error.response) {
      console.error("Erro ao fazer cadastro: " + error)

      if(error.response.data.tk && error.response.data.tk.includes(`Invalid pk \"${data.tk}\" - object does not exist.`)) {
        throw new Error("Token de acesso inválido")
      }

      if(error.response.data.email && error.response.data.email.includes("user with this email already exists.")) {
        throw new Error("Esse E-mail já está cadastrado")
      }

      if(error.response.data.cpf && error.response.data.cpf.includes("user with this cpf already exists.")) {
        throw new Error("Esse CPF já está cadastrado")
      }
    }
  }
}

export async function userLogin(data: LoginSchemaType) {
  try {
    const response = await axios.post(`${baseURL}/user/login/`, data);

    if (response.data && response.data.token) {
      Cookies.set("auth-token", response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:  " + error);
  }
}

/*
export async function userLoginHeaders(data: LoginSchemaType, token: any) {
  await axiosInstance.post("/login/", data, {
    headers: {
      'Authorization': `Token ${token}`
    }
  })
} 
*/
