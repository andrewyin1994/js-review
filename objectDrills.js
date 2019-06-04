/* eslint-disable no-console */
'use strict';


/**
 * object initializer and methods
 */
let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

/**
 * iterating over object properties
 */
let obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

for (let p in obj) {
  console.log(p, obj[p]);
}

/**
 * arrays in objects
 */
let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbit.meals[3]);

/**
 * arrays of objects
 */
let o1 = {
  name: 'John',
  jobTitle: 'lorem'
};
let o2 = {
  name: 'Jane',
  jobTitle:'ipsum',
  boss: 'John'
};
let o3 = {
  name: 'Jack',
  jobTitle: 'dolor',
  boss: 'Jane'
};

let objArr = [o1, o2, o3];

objArr.forEach(obj => {
  console.log(obj.name, obj.jobTitle);
});

/**
 * properties that aren't there
 */
objArr.forEach(obj => {
  obj.boss ? console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`) : console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
});

/**
 * cracking the code
 */
function decode(word) {
  const cipher = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
  };
  return cipher[word[0]] ? word[cipher[word[0]]] : ' ';
}
function decodeWords(sentence) {
  let words = sentence.split(' ');
  let decoded = '';
  words.forEach(function(word) {
    decoded += decode(word);
  });
  return decoded;
}

let sentence='craft block argon meter bells brown croon droop';
console.log(decodeWords(sentence));

/**
 * factory functions with lotr
 */

function createChar(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      let desc = `${this.name} is a ${this.race} from ${this.origin}.`;
      console.log(desc);
    },
    evaluateFight: function(opp) {
      let combat = `Your opponent takes ${Math.max(0, this.attack - opp.defense)} and you receive ${Math.max(0, opp.attack - this.defense)} damage.`;
      return combat;
    }
  };
}

let characters = [
  createChar('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createChar('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createChar('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createChar('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createChar('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(
  createChar('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 4)
);

characters.find((char => char.nickname === 'aragorn')).describe();

let hobbits = characters.filter((char) => char.race === 'Hobbit');
hobbits.forEach((hobbit) => {
  hobbit.describe();
});

let fighters = characters.filter((char) => char.attack >= 5);
fighters.forEach((fighter) => {
  fighter.describe();
});

function createCharWithWeapon(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      let desc = `${this.name} is a ${this.race} from ${this.origin} who uses a ${weapon}.`;
      console.log(desc);
    },
    evaluateFight: function(opp) {
      let combat = `Your opponent takes ${Math.max(0, this.attack - opp.defense)} and you receive ${Math.max(0, opp.attack - this.defense)} damage.`;
      return combat;
    }
  };
}

/**
 * BONUS: a database search
 */
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let matches = arr.filter((elem) => {
    let qKeys = Object.keys(query);
    for (let key of qKeys) {
      if (elem[key] !== query[key])
        return false;
    }
    return true;
  });

  return matches[0] ? matches[0] : null;
}

console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));


/**
 * BONUS: a database method
 */
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    let matches = this.store.heroes.filter((elem) => {
      let qKeys = Object.keys(query);
      for (let key of qKeys) {
        if (elem[key] !== query[key])
          return false;
      }
      return true;
    });
    return matches[0];
  }
};

console.log(Database.findOne({ id: 2 }));