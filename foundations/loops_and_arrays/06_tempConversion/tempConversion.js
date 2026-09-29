const convertToCelsius = function (ftemp) {
  let ctemp = Math.round(((ftemp - 32) *5/9)*10)/10;
  return ctemp;
};

const convertToFahrenheit = function (ctemp) {
    let ftemp = Math.round(((ctemp*1.8)+32)*10)/10;
  return ftemp;
};
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
