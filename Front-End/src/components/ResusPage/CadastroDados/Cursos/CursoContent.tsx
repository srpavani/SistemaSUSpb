'use client'

import { useState } from "react";
import TableCursos from "./TableCursos";
import ModalCurso from "./ModalCurso";

export default function CursoContent() {
  const [modalCurso, setModalCurso] = useState(false)

  return (
    <>
      <div className="flex justify-end">
        <button type="button" className="bg-roxo px-12 py-3 text-white rounded-lg flex items-center gap-2 transition-all text-lg hover:bg-violet-800" onClick={() => setModalCurso(true)}>Novo Curso</button>
      </div>

      <TableCursos />

      {modalCurso && (
        <ModalCurso isOpen={modalCurso} onClose={() => setModalCurso(false)} />
      )}
    </>
  )
}