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
console.log(words);
for (let i=0; i<words.length; i++) {
  decode (words[i]);
}


function days(month, leapYear) {
  let mon;
  let days;
  switch(month) {
  case 'January':
    mon = 'January';
    days = 31;
    break;
  case 'February':
    mon = 'February';
    if(leapYear) days = 29;
    else days = 28;
    break;
  case 'March':
    mon = 'March';
    days = 31;
    break;
  case 'April':
    mon = 'April';
    days = 30;
    break;
  case 'May':
    mon = 'May';
    days = 31;
    break;
  case 'June':
    mon = 'June';
    days = 30;
    break;
  case 'July':
    mon = 'July';
    days = 31;
    break;
  case 'August':
    mon = 'August';
    days = 31;
    break;
  case 'September':
    mon = 'September';
    days = 30;
    break;
  case 'November':
    mon = 'November';
    days = 31;
    break;
  case 'December':
    mon = 'December';
    days = 30;
    break;
  default:
    return 'Must provide valid month.';
  }

  return `${mon} has ${days} days.`;
}

console.log(days('February', true));
console.log(days('February', false));
console.log(days('djsfjdslfs'));


function compare (choice1) {
  const choice2 = Math.floor(Math.random() * 3) + 1;
  if (choice1 < 1 || choice1 > 3)
    throw new Error ('invalid');
  if (choice1 ===choice2) { 
    return 'the result is a tie';
    
  }
  if (choice1===1){
    if (choice2===3){
      return 'win';} 
    else return 'lose';
  }
  if (choice1===3){
    if (choice2===2){
      return 'win';} 
    else return 'lose';
  }
  if (choice1===2){
    if (choice2===1){
      return 'win';} 
    else return 'lose';
  }
    
}
console.log (compare(9));