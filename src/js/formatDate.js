export const FormatDate = (date) => {
  const fechaNacimiento = new Date(date)
  const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  const day = fechaNacimiento.getDate().toString().padStart(2, '0')
  const monthIndex = fechaNacimiento.getMonth() // Obtenemos el número de mes
  const monthName = monthNames[monthIndex] // Obtenemos el nombre de mes del array
  const year = fechaNacimiento.getFullYear()
  const formattedDate = `${day}-${monthName}-${year}`

  return formattedDate
}
