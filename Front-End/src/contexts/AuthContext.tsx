'use client'

import { LoginSchemaType } from "@/schemas/loginSchema";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { userLogin } from "@/services/authService";
import { logoutService } from "@/services/logoutService";
import { useLoaderContext } from "./LoaderContext";

interface AuthContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  login: (userData: LoginSchemaType) => Promise<any>;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    if(typeof window !== 'undefined') {
      const storedUser = localStorage.getItem("user")
      return storedUser ? JSON.parse(storedUser) : null
    }
    
    return null
  })

  const router = useRouter()
  const pathname = usePathname()
  const { handleLoading } = useLoaderContext()

  const inHome = pathname.startsWith("/home-neps") || pathname.startsWith("/home-ies") || pathname.startsWith("/home-resus")

  useEffect(() => {
    if(!localStorage.getItem("authtoken") && inHome) {
      router.push("/")
    }

    if(pathname.startsWith("/home-neps") && !user?.nep_id) {
      router.push("/")
      logout()
    } else if(pathname.startsWith("/home-ies") && !user?.ie_id) {
      router.push("/")
      logout()
    } else if(pathname.startsWith("/home-resus") && !user?.esp_pb_id) {
      router.push("/")
      logout()
    }
  }, [])

  const login = async(userData: LoginSchemaType) => {
    try {
      const responseLogin = await userLogin(userData)
      if(responseLogin) {
        localStorage.setItem("authtoken", responseLogin.token)
        localStorage.setItem("user", JSON.stringify(responseLogin))
        setUser(responseLogin)
      }

      return responseLogin;
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
    }
  }

  const logout = async() => {
    //const authToken = localStorage.getItem("authtoken")
    //const responseData = await logoutService(authToken!)
    //console.log(responseData)
    localStorage.removeItem("authtoken")
    localStorage.removeItem("user")
    router.push("/")
    Cookies.remove('auth-token')
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}