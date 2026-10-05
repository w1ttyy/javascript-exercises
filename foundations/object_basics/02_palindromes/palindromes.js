const palindromes = function (arr) {
  console.log(arr);
  const reversed = arr.reverse();
  console.log(reversed);

  if (arr == reversed) {
    return true;
  } else {
    return false;
  }
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
