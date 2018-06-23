export const formatDateToPicker = (date) => {
  let d = new Date(date)
  if (!date) d = new Date()

  d = new Date( d.getTime() - d.getTimezoneOffset() * -60000 );
  let month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

export const formatDateToDsiplay = (date) => {
  let d = new Date(date)
  var timeZoneDate = new Date( d.getTime() - d.getTimezoneOffset() * -60000 );
  let month = '' + (timeZoneDate.getMonth() + 1),
  day = '' + timeZoneDate.getDate(),
  year = timeZoneDate.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [day, month, year].join('/')
}