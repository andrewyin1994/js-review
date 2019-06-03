/* eslint-disable no-console */
/* eslint-disable strict */
function getYearOfBirth(age){
  
  return 2019 - age;
}
function createGreeting(name,age) {
  const yearOfBirth=getYearOfBirth(29);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting('Chris', 29);
console.log(greeting);