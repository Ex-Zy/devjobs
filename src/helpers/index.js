export const arrayStringToLowerCase = (arr) =>
  Object.values(arr).map((v) => (typeof v === "string" ? v.toLowerCase() : v));

export const lowerCase = (str) => str.toLowerCase();
