(async () => {
  const { expect } = await import("chai");
  const { Player, rollDice } = require("../Player");
  const { simulateGame } = require("../simulateGame");

  describe("Player", () => {
    it("should correctly initialize a player", () => {
      const player = new Player("Test Player", 100, 10, 15);
      expect(player.name).to.equal("Test Player");
      expect(player.health).to.equal(100);
      expect(player.strength).to.equal(10);
      expect(player.attack).to.equal(15);
    });

    it("should reduce defender health correctly after attack", () => {
      const attacker = new Player("Attacker", 100, 10, 15);
      const defender = new Player("Defender", 100, 10, 15);
      const result = attacker.attackPlayer(defender);

      expect(result.attackRoll).to.be.within(1, 6);
      expect(result.defenseRoll).to.be.within(1, 6);
      expect(result.damage).to.equal(attacker.attack * result.attackRoll);
      expect(result.defended).to.equal(defender.strength * result.defenseRoll);
      expect(result.actualDamage).to.equal(
        Math.max(result.damage - result.defended, 0)
      );
      expect(defender.health).to.equal(100 - result.actualDamage);
    });
  });

  describe("simulateGame", () => {
    it("should correctly simulate a game", () => {
      const playerA = new Player("Player A", 50, 5, 10);
      const playerB = new Player("Player B", 100, 10, 5);
      const result = simulateGame(playerA, playerB);

      expect(result.winner).to.be.oneOf(["Player A", "Player B"]);
      expect(result.log).to.be.an("array").that.is.not.empty;
    });

    it("should end the game when one player's health reaches zero", () => {
      const playerA = new Player("Player A", 50, 5, 10);
      const playerB = new Player("Player B", 100, 10, 5);
      const result = simulateGame(playerA, playerB);

      expect(playerA.health).to.be.at.most(0);
      expect(playerB.health).to.be.at.most(0);
    });
  });
})();
