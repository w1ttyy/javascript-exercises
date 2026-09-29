const sumAll = function (a, b) {
  let sum = 0;
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }
  if (a < b) {
    for (a; a <= b; a++) {
      sum += a;
    }
    return sum;
  }
  if (a > b) {
    for (b; b <= a; b++) {
      sum += b;
    }
    return sum;
  }
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
