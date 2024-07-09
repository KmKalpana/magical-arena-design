const { Player } = require("./Player");
const { simulateGame } = require("./simulateGame");

const playerA = new Player("Player A", 50, 5, 10);
const playerB = new Player("Player B", 100, 10, 5);

const result = simulateGame(playerA, playerB);

console.log("Game Result:");
console.log(`Winner: ${result.winner}`);
console.log("Battle Log:");
result.log.forEach((entry, index) => {
  console.log(`Turn ${index + 1}:`, entry);
});
