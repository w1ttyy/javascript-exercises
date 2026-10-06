const palindromes = function (arr) {
  cleanArr = arr
    .toLowerCase()
    .replace(/[./,\/#!$%\^&\*;:{}=\-_\s`~()]/g, "")
  console.log(arr);

  const reversed = cleanArr.split("").reverse().join("");
  console.log(reversed);

  return cleanArr === reversed;
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
