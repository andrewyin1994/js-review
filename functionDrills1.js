/* eslint-disable no-console */
/* eslint-disable strict */
function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative.');
  }
  return 2019 - age;
}

function createGreeting(name,age) {
  const yearOfBirth = getYearOfBirth(age);

  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
  const greeting = createGreeting('Chris', -1);
  console.log(greeting);
} catch(error) {
  console.error(error);
}
