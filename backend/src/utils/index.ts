export function getNextDate(queryString: string) {
  const [year, month, day] = queryString.split("-").map(Number);

  if (year && month && day) {
    // Full date: add one day
    return new Date(year, month - 1, day + 1);
  } else if (year && month) {
    // Year and month: add one month
    return new Date(year, month, 1);
  } else if (year) {
    // Year only: add one year
    return new Date(year + 1, 0, 1);
  }
}

export function isValidDateString(dateString: string) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
