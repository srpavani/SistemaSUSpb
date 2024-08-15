import { Checkbox } from "@/components/ui/checkbox"

interface Props {
  selectedOption: string;
  handleCheckboxClick: (option: string) => void;
}

export default function CheckboxsTipoIEs({ selectedOption, handleCheckboxClick }: Props) {
  return (
    <div className="flex justify-center gap-12 mt-14 mb-6">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="todas"
          checked={selectedOption === 'todas'}
          onClick={() => handleCheckboxClick('todas')} 
          />
        <label
          htmlFor="todas"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Todas
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="publicas"
          checked={selectedOption === 'publicas'}
          onClick={() => handleCheckboxClick('publicas')} 
        />
        <label
          htmlFor="publicas"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Públicas
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="privadas"
          checked={selectedOption === 'privadas'}
          onClick={() => handleCheckboxClick('privadas')} 
          />
        <label
          htmlFor="privadas"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Privadas
        </label>
      </div>
    </div>
  )
}