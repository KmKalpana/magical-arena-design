class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  attackPlayer(defender) {
    const attackRoll = rollDice();
    const defenseRoll = rollDice();
    const damage = this.attack * attackRoll;
    const defended = defender.strength * defenseRoll;
    const actualDamage = Math.max(damage - defended, 0);

    defender.health -= actualDamage;

    return {
      attackRoll,
      defenseRoll,
      damage,
      defended,
      actualDamage,
      defenderHealth: defender.health,
    };
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

module.exports = { Player, rollDice };
