import { Dispatch, SetStateAction } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Props {
  search: string;
  currentPage: number;
  pages: number;
  dataFiltered: any;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export default function Buttons({ currentPage, dataFiltered, itemsPerPage, pages, search, setCurrentPage }: Props) {
  const searchPages = Math.ceil(dataFiltered.length / itemsPerPage)

  const handlePreviousNextClick = (toPage: number, action: string, isSearch?: boolean) => {
    if(action === "previous" && toPage >= 0) {
      return setCurrentPage(currPage => currPage - 1)
    }

    if(isSearch && action === "next" && toPage < searchPages) {
      return setCurrentPage(currPage => currPage + 1)
    }

    if(!isSearch && action === "next" && toPage < pages) {
      return setCurrentPage(currPage => currPage + 1)
    }
  }

  const defaultStyleBtn = (conditional: boolean) => {
    return `${conditional ? 'bg-[#E0E0E0] cursor-default hover:bg-[#E0E0E0] hover:text-roxo' : 'bg-white cursor-pointer hover:text-white hover:bg-roxo'} text-roxo px-3 py-2 rounded-md text-xl  font-semibold transition-all`
  }

  return (
    <div className="flex justify-end py-4 border-t-2 border-t-roxoClaro">
      {!search && search === "" ? (
        <p className="flex gap-4 items-center mr-8 text-roxo font-bold">
          <span onClick={() => handlePreviousNextClick(currentPage - 1, "previous")} className={defaultStyleBtn(currentPage === 0)}>
            <FaChevronLeft className="text-base" />
          </span>
          <span className="tracking-widest text-[1.05rem]">
            {currentPage+1}/{pages}
          </span>
          <span onClick={() => handlePreviousNextClick(currentPage + 1, "next")} className={defaultStyleBtn(currentPage === pages - 1)}>
            <FaChevronRight className="text-base" />
          </span>
        </p>
      ) : (
        <p className="flex gap-4 items-center mr-8 text-roxo font-bold">
          <span onClick={() => handlePreviousNextClick(currentPage - 1, "previous", true)} className={defaultStyleBtn(currentPage === 0)}>
            <FaChevronLeft className="text-base" />
          </span>
          <span className="tracking-widest text-[1.05rem]">
            {dataFiltered.length === 0 ? currentPage : currentPage+1}/{searchPages}
          </span>
          <span onClick={() => handlePreviousNextClick(currentPage + 1, "next", true)} className={defaultStyleBtn(currentPage === searchPages - 1 || currentPage === searchPages)}>
            <FaChevronRight className="text-base" />
          </span>
        </p>
        
      )}
    </div>
  )
}