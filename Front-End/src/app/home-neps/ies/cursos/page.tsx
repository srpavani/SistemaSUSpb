import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import data from '../../../../../databaseTeste/dataIEs.json'
import BackButton from "@/components/Buttons/BackButton"
import TableCourses from "@/components/NepsPage/Tables/TableCourses"

const coursesName = ['MEDICINA', 'ENFERMAGEM', 'BIOMEDICINA', 'ODONTOLOGIA', 'FISIOTERAPIA', 'FARMÁCIA', 'FONOAUDIOLOGIA']

export default function AccordionPage() {
  return (
    <>
      <h1 className="text-3xl mt-12 mb-6 font-bold">CURSOS</h1>

      <Accordion type="single" collapsible className="w-full mt-2 mb-12 flex flex-col gap-8">
        {coursesName.map((course, index) => (
          <AccordionItem value={`item-${index+1}`} key={index+1}>
            <AccordionTrigger className="bg-violet-900 text-white px-8 rounded-lg tracking-wide	hover:bg-[#5b1bbb]">{course}</AccordionTrigger>
            <AccordionContent>
              <TableCourses data={data} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-20">
        <BackButton href="/home-neps/ies" />
      </div>
    </>
  )
}