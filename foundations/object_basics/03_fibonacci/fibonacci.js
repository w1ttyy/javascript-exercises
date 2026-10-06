const fibonacci = function (num) {
  if (num < 0 || !Number.isInteger(num)) {
    return "OOPS";
  }
  if (num === 0) return 0;

  let prevNum = 0;
  let actNum = 1;
  for (let i = 0; i < num; i++) {
    let nextNum = actNum + prevNum;
    prevNum = actNum;
    actNum = nextNum;
  }
  return prevNum;
};


// Do not edit below this line
module.exports = fibonacci;
