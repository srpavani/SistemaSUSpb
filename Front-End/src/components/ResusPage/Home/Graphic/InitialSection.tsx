function InitialSection() {
  return (
     <div className="flex justify-between items-center mb-3">
        <h2 className="text-roxo font-bold text-xl">Contrapartida Semestrais</h2>

        <select 
          name="selectPeriod" 
          id="selectPeriod" 
          className="border-roxoClaro bg-slate-100 rounded-md p-2 font-medium cursor-pointer"
        >
          <option value="month">Mês</option>
          <option value="semester">Semestre</option>
          <option value="year">Ano</option>
        </select>
      </div>
  )
}

export default InitialSection