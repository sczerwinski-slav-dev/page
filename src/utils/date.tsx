import moment from 'moment'

const dateFormat = 'D MMMM YYYY'

export function formatDate(date: string): string {
  return moment(date).format(dateFormat)
}
