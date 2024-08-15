'use client'

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()

  return (
     <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-4xl font-bold mb-4">Oops! Página não encontrada =/</h2>
      <p className="text-lg text-gray-500 mb-6">Não conseguimos encontrar a página que você está procurando.</p>
      <button type="button" className="bg-roxo hover:bg-violet-800 transition text-white font-bold py-3 w-52 rounded-lg" onClick={() => router.back()}>
        Voltar
      </button>
    </div>
  )
}
