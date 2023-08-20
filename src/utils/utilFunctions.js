export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function DateTransform(date) {
  return new Date(date).toLocaleDateString('es-ES');
}