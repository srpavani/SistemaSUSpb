"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import data from "../../../../databaseTeste/dataNEPS.json";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { SelectViewBy } from "@/components/SelectsContrapartidas/SelectViewBy";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

function ModalNEP({ isOpen, onClose, id }: ModalProps) {
  const item = data.find((i) => i.id === id);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(ev.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="bg-roxoClaro min-h-[38rem] flex flex-col py-8"
        ref={ref}
      >
        <Image
          src={"/images/Logo_fundo_Transparente.png"}
          width={214}
          height={140}
          alt="Logo ESP - PB"
          className="mx-auto"
        />
        <h2 className="-mt-8 text-center tracking-wide">
          Visualização do Balanço de Custos
        </h2>
        <h2 className="font-bold text-lg text-center mt-4">NEP:</h2>
        <p className="text-center bg-white w-72 mx-auto p-inputPadding rounded-lg text-cinza -mt-3 mb-6">{item?.neps}</p>

        <Image
          src={"/images/icon-xmark.png"}
          width={25}
          height={25}
          alt="Ícone fechar"
          className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700"
          onClick={onClose}
          title="Fechar modal"
        />

        <SelectViewBy isContrapartidasIEs={true} id={item?.id} />
      </DialogContent>
    </Dialog>
  );
}

export default ModalNEP;
