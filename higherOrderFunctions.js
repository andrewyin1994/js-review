/* eslint-disable no-console */
'use strict';

/**
 * Functions as arguments (1)
 */
function repeat(fn, n) {
  for (let i = 0; i < n; i++)
    fn();
}
function hello() {
  console.log('Hello World');
}
function goodbye() {
  console.log('Goodbye World');
}

repeat(hello,5);
repeat(goodbye,5);


/**
 * Functions as arguments (2)
 */
function filter(arr, fn) {
  let newArray = [];

  for (let elem of arr) {
    if(fn(elem)) newArray.push(elem);
  }

  return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, function(name) {
  return name[0] === 'R';
});

console.log(filteredNames);

console.log(filter(myNames, (name) => { return name[0] === 'R'; }));


/**
 * Functions as return values
 */
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    let warning = `DANGER! There is a ${typeOfWarning} hazard at ${location}!`;
    let message = `The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter === 1 ? 'time' : 'times '} today!`;
    console.log(warning);
    console.log(message);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Beware of Flash Floods');
const tornadoWarning = hazardWarningCreator('Tornado Zone Ahead');
const mainst = 'Main St and Pacific Ave';
const centave = 'Centinela Ave and Olympic Blvd';

rocksWarning(mainst);
rocksWarning(centave);
floodWarning(mainst);
floodWarning(centave);
tornadoWarning(mainst);
tornadoWarning(centave);


/**
 *  forEach, filter and map
 */
function turtle(steps) {
  let counter = 1;
  const forwardLeft = steps.filter(function(step) {
    return (step[0] >= 0 && step[1] >= 0) ? true : false;
  });
  const totalSteps = forwardLeft.map(step => step[0] + step[1]);
  totalSteps.forEach((step) => {
    let movement = `Movement #${counter}: ${step} ${step === 1 ? 'step' : 'steps'}`;
    counter++;
    console.log(movement);
  });
}

const steps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtle(steps);


/**
 * reduce
 */
function decode(input) {
  const words = input.split(' ');
  const reducer = (acc, word) => acc + (word.length === 3 ? ' ' : word.slice(-1));
  return words.reduce(reducer, '');
}

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(decode(input));