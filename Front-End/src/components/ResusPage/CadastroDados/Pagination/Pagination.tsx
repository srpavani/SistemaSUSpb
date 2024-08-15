import { Dispatch, SetStateAction } from "react";
import Buttons from "./Buttons";
import { Accordion } from "@/components/ui/accordion";
import AccordionIE from "../IEs/AccordionIE";
import AccordionNEP from "../NEPs/AccordionNEP";

interface Props {
  currentItems: InstituicaoEnsinoType[] | NEPType[];
  startIndex:number;
  endIndex: number;
  search: string;
  currentPage: number;
  pages: number;
  dataFiltered: InstituicaoEnsinoType[] | NEPType[];
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isIEs: boolean;
}

function Pagination({ currentItems, dataFiltered, endIndex, startIndex, search, itemsPerPage, currentPage, pages, setCurrentPage, isIEs }: Props) {
  return (
    <>
      <div className="mt-8">
        {currentItems && currentItems.length > 0 ? (
          <>
            <h3 className="text-roxo font-bold text-[1.3rem] pl-16">{isIEs ? "Instituições de Ensino" : "Serviços de Saúde" }</h3>
            <Accordion type="single" collapsible className="w-full mt-2 flex flex-col">
              {search !== "" ? (
                <>
                  {dataFiltered.length > 0 ? dataFiltered.slice(startIndex, endIndex).map((item: any, index: number) => (
                    <>
                      {isIEs ? (
                        <AccordionIE item={item} index={index} key={index} />
                      ) : (
                        <AccordionNEP item={item} index={index} key={index} />
                      )}
                    </>
                  )) : (
                    <h3 className="text-center pb-10 font-bold text-xl">Não encontramos nenhuma {isIEs ? "IE" : "NEP"}</h3>
                  )}
                </>
              ) : (
                <>
                  {currentItems.map((item: any, index: number) => (
                    <span key={index}>
                      {isIEs ? (
                        <AccordionIE item={item} index={index} key={index} />
                      ) : (
                        <AccordionNEP item={item} index={index} key={index} />
                      )}
                    </span>
                  ))}
                </>
              )}
            </Accordion>
          </>
        ) : (
          <h3 className="text-center pb-10 font-bold text-xl">Não encontramos nenhuma IE</h3>
        )}
      </div>
    
      <Buttons 
        currentPage={currentPage}
        dataFiltered={dataFiltered}
        itemsPerPage={itemsPerPage}
        pages={pages}
        search={search}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default Pagination