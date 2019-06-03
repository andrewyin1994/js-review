/* eslint-disable no-console */
'use strict';

function jediName(firstName, lastName) {
  return lastName.slice(0,3) + firstName.slice(0,2);

}
console.log (jediName('Beyonce', 'Knowles'));

function beyond(num) {
  if(num === Infinity) console.log('And beyond.');
  else if(num !== Infinity && num > 0) console.log('To infinity...');
  else if(num !== Infinity && num < 0) console.log('To negative infinity...');
  else console.log('Staying home.');
}

beyond(Infinity);
beyond(1);
beyond(-1);
beyond(0);