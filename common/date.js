export function getCurrentDate () {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const myDay = new Date().getDate()
  return year + '-' + month + '-' + myDay
}
