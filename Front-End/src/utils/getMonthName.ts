export function getMonthNameByNumber(date: string) {
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  const monthNumber = parseInt(date.split("-")[1])
  console.log(monthNames[monthNumber - 1])

  return monthNames[monthNumber - 1]
}

export function getMonthNameByName(month: string) {
  const monthNames: { [key: string]: string } = {
    "janeiro": "Janeiro",
    "fevereiro": "Fevereiro",
    "marco": "Março",
    "abril": "Abril",
    "maio": "Maio",
    "junho": "Junho",
    "julho": "Julho",
    "agosto": "Agosto",
    "setembro": "Setembro",
    "outubro": "Outubro",
    "novembro": "Novembro",
    "dezembro": "Dezembro"
  }

  return monthNames[month]
}