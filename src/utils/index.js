export const formatDateToPicker = (date) => {
  let d = date ? new Date(date) : new Date()
  let month = '' + (d.getUTCMonth() + 1),
  day = '' + d.getUTCDate(),
  year = d.getUTCFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

export const formatDateToDsiplay = (date) => {
  let d = new Date(date)
  let month = '' + (d.getUTCMonth() + 1),
  day = '' + d.getUTCDate(),
  year = d.getUTCFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [day, month, year].join('/')
}
