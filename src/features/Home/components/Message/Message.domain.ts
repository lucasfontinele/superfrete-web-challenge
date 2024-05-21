export function formatDate(toFormat: Date | number) {
  const date = new Date(toFormat)
  const pad = (number: number) => (number < 10 ? '0' + number : number)

  const day = pad(date.getDate())
  const month = pad(date.getMonth() + 1)
  const year = date.getFullYear()
  
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())

  return `${day}/${month}/${year} - ${hours}h${minutes}`
}
