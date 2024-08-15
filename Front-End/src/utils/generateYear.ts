export default function generateYear(actualYear?: boolean) {
  let currentYear = new Date().getFullYear()
  const yearArray = []

  currentYear = actualYear ? currentYear + 1 : currentYear

  for(let year = 2018; year < currentYear; year++) {
    const text = `${year}`
    const value = year
    yearArray.push({ text, value })
  }

  return yearArray
}
