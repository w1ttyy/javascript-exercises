const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) =>
    getAge(current) > getAge(oldest) ? current : oldest,
  );
};

function getAge(person) {
  let death = person.yearOfDeath ?? new Date().getFullYear();
  return death - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
