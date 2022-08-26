export function getNumberOfYears(startYear) {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - startYear;
}
