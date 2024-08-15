export default function generateSemester() {
  const date = new Date()
  const currentYear = date.getFullYear()
  const month = date.getMonth()

  const semesterArray = []

  let numSemester: number
  if(month > 6) numSemester = 2
  else numSemester = 1

  for(let year = 2018; year <= currentYear; year++) {
    if(year === currentYear && numSemester === 1) {
      const text = `1° de ${year}`
      const value = `${year}.1`
      semesterArray.push({ text, value })
      break
    }

    for(let semester = 1; semester <= 2; semester++) {
      const text = `${semester}° de ${year}`
      const value = `${year}.${semester}`
      semesterArray.push({ text, value })
    }
  }

  return semesterArray
}