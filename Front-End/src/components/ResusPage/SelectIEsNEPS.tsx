import { FaChevronDown } from "react-icons/fa6";

interface SelectProps {
  title: string;
  textFirstOption: string;
  htmlFor: string;
  data: string[];
}

function SelectIEsNEPS({ title, textFirstOption, htmlFor, data }: SelectProps) {
  return (
    <div className="flex flex-col gap-2 w-2/5 relative">
      <label htmlFor={htmlFor} className="text-roxo font-bold text-lg">{title}</label>
      <select name={htmlFor} id={htmlFor} defaultValue={""} className="w-full p-inputPadding rounded-lg appearance-none font-medium">
        <option value="" disabled>{textFirstOption}</option>
        {data.map(item => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>

      <FaChevronDown className="absolute right-4 top-[3.2rem] text-[#828282] text-lg" />   
    </div>
  )
}

export default SelectIEsNEPS