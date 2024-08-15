"use client";

import { useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/Register/Input";
import { CursoSchemaType, cursoSchema } from "@/schemas/cursoSchema";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: CursoType | undefined;
}

export default function ModalEdicaoCurso({ isOpen, onClose, item }: Props) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<CursoSchemaType>({
    resolver: zodResolver(cursoSchema), 
    defaultValues: { curso: item?.curso, inoc: item?.inoc }
  })

  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, isOpen, onClose)

  const onSubmit = (data: any) => {
    console.log(data)

    if(data) {
      toast.success("Curso editado com sucesso", { position: 'top-right' })
      reset()
      onClose()
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-roxoClaro h-[38rem] overflow-y-scroll flex flex-col py-8 text-center" ref={ref} id="dialog-content-top">
        <Image
          src={"/images/Logo_fundo_Transparente.png"} width={214} height={140}
          alt="Logo ESP - PB" className="mx-auto"
        />
        <h2 className="-mt-8 text-center tracking-wide font-semibold text-[1.05rem]">Adicionar Novo Curso</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-8">
          <Input 
            {...register("curso")}
            name="curso"
            label="Digite o nome do curso"
            placeholder="Digite o nome do novo curso"
            className="w-[20rem] placeholder:text-sm2"
            classNameError="text-center"
            error={errors.curso}
          />

          <Input 
            {...register("inoc", { valueAsNumber: true })}
            type="number"
            name="inoc"
            label="INOC (R$)"
            placeholder="Informe o INOC em reais"
            className="w-[20rem] placeholder:text-sm2"
            classNameError="text-center"
            error={errors.inoc}
            step={0.01}
          />

          <button type="submit" className="bg-roxo text-white py-3 w-52 mt-4 mx-auto rounded-lg transition-all hover:bg-violet-800">Cadastrar Curso</button>
        </form>


        <Image
          src={"/images/icon-xmark.png"} width={25} height={25} alt="Ícone fechar"
          className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700"
          onClick={onClose} title="Fechar modal"
        />
      </DialogContent>
    </Dialog>
  );
}