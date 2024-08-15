'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { UserOptions } from "./UserOptions"

function InputUserArea() {
  const [configVisible, setConfigVisible] = useState<boolean>(false)
  const userOptionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (ev: any) => {
      if(userOptionsRef.current && !userOptionsRef.current.contains(ev.target)) {
        setConfigVisible(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [userOptionsRef])

  return (
    <div className="flex items-center gap-12 relative">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-roxoClaro w-2/3 p-3 rounded pl-10"
      />

      <Image
        width={25} 
        height={25}
        className="absolute left-2"
        src="/images/Icone_Lupa.png" 
        alt="Ícone Lupa" 
      />

      <div className="relative" ref={userOptionsRef}>
        <Image
          width={45}
          height={45}
          className="bg-roxo p-2 rounded-full cursor-pointer transition duration-300 hover:bg-[#8151ce]"
          src="/images/Icone_Usuario.png"
          alt="Ícone usuário"
          onClick={() => setConfigVisible(!configVisible)}
          title="Abrir/Fechar opções de usuário"
        />

        {configVisible && <UserOptions />}
      </div>
    </div>
  )
}

export default InputUserArea