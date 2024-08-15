'use client'

import { useLoaderContext } from "@/contexts/LoaderContext"

export default function Loader() {
  const { loading } = useLoaderContext()
  
  return (
    <>
      {loading && (
        <div className="fixed bg-pretoOverlay top-0 left-0 w-full h-full text-white flex justify-center items-center">
          <div className="w-16 h-16 border-8 border-gray-200 border-t-roxo rounded-full animate-spin"></div>
        </div>
      )}
    </>
  )
}