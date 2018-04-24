import moment from 'moment'

export function formatDate(time, Format) {
  if (arguments.length === 0) {
    return null
  }

  const timeFormat = Format || 'YYYY-MM-DD'

  const m = moment(time);
  const time_str = m.format(timeFormat)
  return time_str
}

export function changeDate(timeStr, days, Format) {
  if (arguments.length === 0) {
    return null
  }
  const timeFormat = Format || 'YYYY-MM-DD'
  const m = moment(timeStr, timeFormat);
  return m.add(days, 'days').format(timeFormat)
}
