export const arrayStringToLowerCase = (arr) =>
  Object.values(arr).map((v) => (typeof v === "string" ? v.toLowerCase() : v));

export const lowerCase = (str) => str.toLowerCase();

export const isEmptyString = (str) => str.trim().length === 0;

export const getImageUrl = (name) =>
  new URL(`../assets/logos/${name}`, import.meta.url).href;

export const removeExtension = (filename) =>
  filename.substring(0, filename.lastIndexOf(".")) || filename;

export function getHostName(websiteUrl) {
  if (!websiteUrl.trim().length) return "";

  return new URL(websiteUrl).hostname;
}
