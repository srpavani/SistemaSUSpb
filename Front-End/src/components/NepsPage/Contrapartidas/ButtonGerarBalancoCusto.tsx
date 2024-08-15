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
  instituicao_ensino: string;
}

function ButtonGerarBalancoCusto({ instituicao_ensino }: Props) {
  return (
    <div className="mt-10 w-full flex justify-center items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button text="Gerar Balanço de Custos"/>
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

          <h2 className="font-bold text-lg text-center mt-4">Instituição de Ensino:</h2>
          <p className="text-center bg-white w-72 mx-auto p-inputPadding rounded-lg text-cinza -mt-3 mb-6">
            {instituicao_ensino}
          </p>

          <SelectViewBy isContrapartidasNEPS={true} onlyMonthSemester={true} ieName={instituicao_ensino} />

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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ButtonGerarBalancoCusto;