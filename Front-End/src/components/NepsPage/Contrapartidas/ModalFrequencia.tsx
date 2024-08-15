
import { Input } from "@/components/Register/Input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useOutsideClick from "@/hooks/useOutsideClick";
import { getMonthNameByName } from "@/utils/getMonthName";
import Image from "next/image";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  item: { instituicao_ensino: string, semestre: string, curso: string };
  month: string;
  day: number;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newData: Type) => void;
  currentValues: { frequencia: number, valor: number }
}

interface Type {
  frequencia: number;
  valor: number;
}

export default function ModalFrequencia({ item, month, day, isOpen, onClose, onSave, currentValues }: Props) {
  const { 
    register,
    handleSubmit
  } = useForm<Type>({
    defaultValues: {
      frequencia: currentValues.frequencia,
      valor: currentValues.valor
    }
  })

  const ref = useRef<HTMLDivElement>(null)
  const monthCapitalize = getMonthNameByName(month)
  useOutsideClick(ref, isOpen, onClose)

  const onSubmit = (data: Type) => {
    console.log(data)
    onSave(data)
    toast.info(`Frequência: ${data.frequencia} | Valor: ${data.valor}`, { position: 'top-right' })
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="bg-roxoClaro min-h-[38rem] flex flex-col py-8 text-center"
        ref={ref}
      >
        <Image
          src={"/images/Logo_fundo_Transparente.png"}
          width={214} height={140} alt="Logo ESP - PB"
          className="mx-auto"
        />
        <h2 className="-mt-8 text-center tracking-wide">
          Edição de Planilha
        </h2>
        
        <p>Dia <span className="font-bold">{day}</span> de <span className="font-bold">{monthCapitalize}</span> de <span className="font-bold">{item.semestre.split(".")[0]}</span></p>

        <form className="flex flex-col gap-8 items-center mt-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("frequencia")}
            type="number"
            label="Frequência dos Alunos:"
            name="frequencia"
            placeholder="Insira a frequência"
            className="w-64"
          />

          <Input
            {...register("valor")}
            type="number"
            label="Atualizar Valor"
            name="valor"
            placeholder="Insira o valor:"
            className="w-64"
            step="0.01"
          />

          <button type="submit" className="bg-[#3C117E] text-white w-40 p-[0.6rem] rounded-xl text-lg font-bold mt-6 transition duration-300 hover:bg-violet-800">Salvar</button>
        </form>

        <Image
          src={"/images/icon-xmark.png"}
          width={25} height={25} alt="Ícone fechar"
          className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700"
          onClick={onClose}
          title="Fechar modal"
        />
      </DialogContent>
    </Dialog>
  );
}