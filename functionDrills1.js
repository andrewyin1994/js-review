/* eslint-disable no-console */
/* eslint-disable strict */

function createGreeting(name,age){
  return `Hi, my name is ${name} and I'm ${age} years old.`;
}

const greeting = createGreeting('Chris', 29);

console.log(greeting);