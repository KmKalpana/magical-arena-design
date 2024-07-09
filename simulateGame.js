const { Player } = require("./Player");

function simulateGame(playerA, playerB) {
  const log = [];

  while (playerA.health > 0 && playerB.health > 0) {
    if (playerA.health <= playerB.health) {
      log.push(playerA.attackPlayer(playerB));
      if (playerB.health > 0) {
        log.push(playerB.attackPlayer(playerA));
      }
    } else {
      log.push(playerB.attackPlayer(playerA));
      if (playerA.health > 0) {
        log.push(playerA.attackPlayer(playerB));
      }
    }
  }

  return {
    winner: playerA.health <= 0 ? playerB.name : playerA.name,
    log,
  };
}

module.exports = { simulateGame };
