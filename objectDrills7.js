'use strict'

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name, 
    nickname, 
    race, 
    origin, 
    attack, 
    defense,
    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    evaluateFight(character) {
      let damageDealt = 0,
        damageReceived = 0;

      if (this.atk > character.def) {
        damageDealt = this.atk - character.def;
      }

      if (this.def < character.atk) {
        damageReceived = character.atk - this.def;
      }

      console.log( `Your opponent takes ${damageDealt} damage and you receive ${damageReceived} damage.`);
    },
  };
}
    

newCharacters.push(createCharacter("Arwen", "Half-elf", "Rivendell", "Mesa", 11, 3));


const newCharacters = [   
  createCharacter("Gandalf", "gandy", "wizard", "m.e", 10, 6), 
  createCharacter("Gandalf1", "gandy1", "wizard1", "m.e1", 101, 61), 
  createCharacter("Gandalf2", "gandy2", "wizard2", "m.e2", 102, 62)
];

newCharacters.find(char => char.nickname === 'aragorn').describe();


const onlyHobbits = newCharacters.filter(char => char.race === 'Hobbit');
console.log(onlyHobbits);

const onlyHighAttack = newCharacters.filter(char => char.atk > 5);
console.log(onlyHighAttack);