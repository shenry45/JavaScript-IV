/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor (obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
  constructor (attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
// function takes an object so restructure arguments referencing
class Humanoid extends CharacterStats {
  constructor (specs) {
    super(specs);
    this.team = specs.team;
    this.weapons = specs.weapons;
    this.language = specs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


console.log('----------------------');

// Stretch task

class Villain extends Humanoid{
  constructor (specs) {
    super(specs);
    this.damage = specs.damage;
    this.catchPhrase = specs.catchPhrase;
  }
  attack(heroName) {
    const attackStat = Math.round(Math.random()*this.damage);

    if (this.healthPoints > 0) {
      if ((heroName.healthPoints - attackStat) > 0) {
        heroName.healthPoints -= attackStat;

        console.log(`${heroName.name} has been hit with ${this.weapons[Math.floor(Math.random()*this.weapons.length)]} causing ${attackStat} damage and now has ${heroName.healthPoints} health remaining!`);

        console.log(`${heroName.name} says: '${heroName.catchPhrase}'`);

        return `${this.name} attacked ${heroName} with ${this.weapons[Math.round(Math.random*this.weapons.length)]}`;
      } else {
        console.log(`${heroName.name} has been defeated by the infamous ${this.name}.`);
      }
    }
  }
}

class Hero extends Humanoid {
  constructor (specs) {
    super(specs);
    this.damage = specs.damage;
    this.catchPhrase = specs.catchPhrase;
  }
  attack(villainName) {
    const attackStat = Math.round(Math.random()*this.damage);
    
    if (this.healthPoints > 0) {
      if ((villainName.healthPoints - attackStat) > 0) {
        villainName.healthPoints -= attackStat;
      
        console.log(`${villainName.name} has been hit with ${this.weapons[Math.round(Math.random()*this.weapons.length)]} causing ${attackStat} damage and now has ${villainName.healthPoints} health remaining!`);
      
        console.log(`${villainName.name} says: '${villainName.catchPhrase}'`);
      
        return `${villainName.name} attacked ${this.name}`;
      } else {
        console.log(`${villainName.name} has been defeated!`);
      }
    }
  }
}

const superMan = new Hero({
  createdAt: new Date(),
  name: 'SuperMan',
  damage: 250,
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 1000,
  team: 'Earth Protectors',
  weapons: [
    'Punch',
    'Super Hot',
  ],
  language: 'Kryptonian',
  catchPhrase: 'Darn you demon!',
  defeat: 'You will never see the light of day'
});

const polarBear = new Villain({
  createdAt: new Date(),
  name: 'Polar Bear',
  damage: 380,
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 1000,
  team: 'Earth Protectors',
  weapons: [
    'Swipe',
    'Bear Hug',
  ],
  language: 'Kryptonian',
  catchPhrase: 'Mrrrrnnnnnmmhhhhaa',
  defeat: '*thud*'
});

polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);
superMan.attack(polarBear);
polarBear.attack(superMan);