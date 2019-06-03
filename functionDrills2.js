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

let sentence='craft block argon meter bells brown croon droop';


function decode(encodedword){
  if (encodedword[0]==='a') console.log(encodedword[1]);
  else if (encodedword[0]==='b') console.log(encodedword[2]);
  else if (encodedword[0]==='c') console.log(encodedword[3]); 
  else if (encodedword[0]==='d') console.log(encodedword[4]);
  else console.log(' ');
}
let words=sentence.split(' ');
console.log (words);
for (let i=0; i<words.length; i++)
  decode (words[i]);
