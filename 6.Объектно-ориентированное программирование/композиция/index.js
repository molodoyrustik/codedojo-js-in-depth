class Character {
  constructor(name) {

  }

  move() {}

  speak() {}
}

class WarriorBehavior {
  attack() {
    // code
  }

  defend() {
    // code
  }
}

class WizzardBehavior {
  castSpell() {
    // code
  }
}

class Warrior extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    this.behavior = new WarriorBehavior();
  }

  attack() {
    this.behavior.attack();
  }

  defend() {
    this.behavior.defend();
  }
}

class Wizzard extends Character {
  constructor(name, spell) {
    super(name);
    this.spell = spell;
    this.behavior = new WizzardBehavior();
  }

  castSpell() {
    this.behavior.castSpell();
  }
}

class Knigt extends Character {
  constructor(name, weapon, spell) {
    super(name);
    this.weapon = weapon;
    this.spell = spell;
    this.warriorBehavior = new WarriorBehavior();
    this.wizzardBehavior = new WizzardBehavior();
  }

  attack() {
    this.warriorBehavior.attack();
  }

  defend() {
    this.warriorBehavior.defend();
  }

  castSpell() {
    this.wizzardBehavior.castSpell();
  }
  
}

let warrior = new Warior();
let wizzard = new Wizzard()
let knigt = new Knigt();
