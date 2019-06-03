/* eslint-disable no-console */
/* eslint-disable strict */
function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative.');
  }
  return 2019 - age;
}

function createGreeting(name,age) {
  
  if (name || age === undefined){
    throw new Error('Arguments not valid.');
  }
  const yearOfBirth = getYearOfBirth(age);

  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
  const greeting = createGreeting();
  console.log(greeting);
} catch(error) {
  console.error(error);
}


