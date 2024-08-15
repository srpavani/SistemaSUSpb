//
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Button from "../../SelectsContrapartidas/Button";
import Image from "next/image";
import { SelectViewBy } from "@/components/SelectsContrapartidas/SelectViewBy";

interface Props {
  balancoPorNEP?: boolean;
}

function ButtonGerarBalancoTotal({ balancoPorNEP }: Props) {
  return (
    <div className={`w-full flex justify-center items-center -mt-4`}>
      <Dialog>
        <DialogTrigger asChild>
          <Button text="Gerar Balanço Total"/>
        </DialogTrigger>

        <DialogContent className="bg-roxoClaro min-h-[38rem] flex flex-col py-8">
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
          <DialogClose>
            <Image
              src={"/images/icon-xmark.png"}
              width={25}
              height={25}
              alt="Ícone fechar"
              className="absolute right-6 top-6 text-5xl cursor-pointer text-roxo hover:text-violet-700"
              title="Fechar modal"
            />
          </DialogClose>

          <SelectViewBy isContrapartidasRESUS={true} balancoPorNEP={balancoPorNEP} balancoGeral={true} onlySemesterYear={true} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ButtonGerarBalancoTotal;