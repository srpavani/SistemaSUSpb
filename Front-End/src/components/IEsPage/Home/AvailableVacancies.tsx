interface RowTableProps {
  area: string;
  vacancies: number;
}

export function AvailableVacancies() {
  return (
    <div className="bg-roxoClaro flex flex-col rounded-lg overflow-y-auto max-h-[50.5rem] h-auto 1.5xl:max-h-[45rem]">
      <div className="bg-roxo text-white pt-10 px-8 pb-4 rounded-t-lg">
        <h2 className="text-center text-3xl font-bold">Vagas NEPS</h2>

        <div className="flex justify-between mt-8">
          <h3>NEPS</h3>
          <h3>Vagas</h3>
        </div>
      </div>

      <div className="flex flex-col gap-6 pl-7 pr-12 py-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <RowTable key={index} area={`NEPS-${index + 1}`} vacancies={index} />
        ))}
      </div>
    </div>
  );
}

export function RowTable({ area, vacancies }: RowTableProps) {
  return (
    <div className="flex justify-between text-roxo font-medium gap-6">
      <span className="font-bold">{area}</span>
      <span>{vacancies}</span>
    </div>
  );
}
