const palindromes = function (arr) {  
  arr = arr.toLowerCase().replace(/[./,\/#!$%\^&\*;:{}=\-_\s`~()]/g,"").trim();
    console.log(arr);

  const reversed = arr.split('').reverse().join('');
  console.log(reversed);

  if (arr == reversed) {
    return true;
  } else {
    return false;
  }
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
