const isIncludes = (str1, str2) =>
  str2.trim().length && str1.toLowerCase().includes(str2.toLowerCase());

module.exports.isIncludes = isIncludes;
