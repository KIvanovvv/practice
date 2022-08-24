'use strict';
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
for (const [score, player] of game.scored.entries()) {
  console.log(`Goal ${score + 1}: ${player}`);
}
//2
let totalOdds = 0;
for (const odds of Object.values(game.odds)) {
  totalOdds += odds;
}
totalOdds /= Object.keys(game.odds).length;
console.log(totalOdds.toFixed(2));
//3
for (let key of Object.keys(game.odds)) {
  console.log(
    `Odd of ${game?.[key] ? `victory ${game[key]}` : `draw`} : ${
      game.odds[key]
    }`
  );
}
//Bonus
const scorers = {};
for (const player of game.scored) {
  if (scorers.hasOwnProperty(player)) {
    let newScore = scorers[player] + 1;
    scorers[player] = newScore;
  } else {
    scorers[player] = 1;
  }
}
console.log(scorers);