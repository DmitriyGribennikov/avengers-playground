import moment from "moment/moment";

export const toUtcStartOfDay = (date) => moment(date).utc().startOf('day')

export const humanizeDate = date => moment(date).format('D. MMM. YYYY')