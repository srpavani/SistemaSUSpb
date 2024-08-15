import { FiChevronDown } from "react-icons/fi";

interface CustomSelectProps {
  label: string;
  isOpen: boolean;
  dataArray: { text: string, value: string | number }[];
  toggleDropdown: (item: any) => void;
}

function CustomSelect({ label, isOpen, dataArray, toggleDropdown }: CustomSelectProps) {
  return (
    <div className="relative mt-6 text-center mb-12">
      <button
        className={`bg-white w-72 rounded-lg font-bold p-3 flex  justify-between items-center ${isOpen &&  'rounded-b-none'}`}
        onClick={() => toggleDropdown(null)}
      >
        {label}
        <FiChevronDown  />
      </button>
      <ul className={`absolute bg-white text-gray-800 pt-1 w-full h-64 overflow-y-scroll ${isOpen ? 'block' : 'hidden'}`}>
        {dataArray.map(data => (
          <li className=" py-2 px-4 cursor-pointer hover:bg-gray-300" onClick={() => toggleDropdown(data)} key={data.value}>
            {data.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomSelect