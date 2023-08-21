/**
 * Function to get string with first character in uppercase.
 * @param {String} str
 * @return {String} Capitalize String
 */
export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Function to get formated date.
 * @param {String} date
 * @return {String} Formated date
 */
export function DateTransform(date) {
  return new Date(date).toLocaleDateString('es-ES');
}

/**
 * Function to get combined dates.
 * @param {String} dateIn
 * @param {String} dateOut
 * @return {String} Combined dates
 */
export function DatesParse(dateIn, dateOut) {
  return `${DateTransform(dateIn)} - ${DateTransform(dateOut)}`;
}
