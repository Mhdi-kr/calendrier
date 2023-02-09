type AddParams = { days?: number; months?: number; years?: number }

interface ICustomDate {
  date: Date
  add: (params: AddParams) => ICustomDate
  startOf: (primitive: 'day' | 'month' | 'year') => ICustomDate
}

const SECOND_DURATION = 1000 // in milliseconds
const MINUTE_DURATION = 60 * SECOND_DURATION
const HOUR_DURATION = 60 * MINUTE_DURATION
const DAY_DURATION = 24 * HOUR_DURATION

/**
 * Wrapper class for Javascript's `Date` class, returns itself when using helper methods, the final date is accessible through `date` property
 * @returns {Date | CustomDate}
 **/
export class CustomDate {
  date = new Date()
  public constructor(date?: Date) {
    date ? (this.date = date) : (this.date = new Date())
  }
  public clone(): CustomDate {
    return new CustomDate(this.date)
  }
  public add(params: AddParams): CustomDate {
    const date = new Date(this.date.valueOf() + this.getDayMillis(params.days))
    return new CustomDate(date)
  }
  public format(pattern: 'YYYY-MM-DD'): string {
    const year = this.date.getFullYear()
    const month = this.date.getMonth()
    const date = this.date.getDate()
    return [year, makeDoubleDigits(month), makeDoubleDigits(date)].join('-')
  }
  public startOf(primitive: 'day' | 'month' | 'year'): CustomDate {
    return new CustomDate()
  }
  public daysInMonth(): number {
    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const date = 0
    return new Date(year, month, date).getDate()
  }
  private getDayMillis(day?: number): number {
    return day ? day * DAY_DURATION : 0
  }
  private getMonthMillis(month?: number) {
    return
  }
  private getYearMillis() {}
}

const makeDoubleDigits = (num: number): string =>
  num.toString().length === 1 ? '0'.concat(num.toString()) : num.toString()
