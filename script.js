'use strict';
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

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
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    for (let player of players) {
      console.log(`${player} has scored a goal !`);
    }
    console.log(`Total scored goals : ${players.length}`);
  },
};
//1
const [players1, players2] = game.players;

//2
const [gl, ...fieldPlayers] = players1;
//3
const allPlayers = [...players1, ...players2];
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5
//const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
//6
//game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);
//7
team1 < team2 && console.log(`Team 1 is morea likely to win`);
team1 > team2 && console.log(`Team 2 is morea likely to win`);

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = `20:00`,
//     address,
//   }) {
//     console.log(
//       `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicius pasta with ${ing1},${ing2} and ${ing3}.`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };

// const rest1 = {
//   name: `Carpi`,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La pizzaa`,
//   owner: `Giovanni Rossi`,
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //OR assignment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish assignment operator

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && `<ANONYMOUS>`;
// // rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;

// console.log(rest1);
// console.log(rest2);
// console.log(`.....OR.....`);
// console.log(3 || `Jonas`);
// console.log(`` || `Jonas`);
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// console.log(`......AND....`);

// console.log(0 && `Jonas`);
// console.log(7 && `Jonas`);
// console.log(`Hello` && 23 && null && `jonas`);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// // }

// restaurant.orderPizza && restaurant.orderPizza(`mushroom`, `spinach`);
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// //Functions
// const add = function (...numbers) {
//   let sum = 0;
//   // for (let el of numbers) {
//   //   sum += el;
//   // }
//   console.log(numbers.reduce((a, b) => a + b));
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(3, 5, 8, 5, 3, 4);

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza(`mushrooms`, `onion`, `spinach`);
// restaurant.orderPizza(`mushrooms`);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);
// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = `Jonas`;
// const letters = [...str, ` `, `S.`];
// console.log(letters);
// //Real-world example
// const ingredients = [
//   //   prompt(`Let\'s make pasta !
//   // Ingridient 1?`),
//   //   prompt(`Ingredient 2?`),
//   //   prompt(`Ingredient 3 ?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// //Objects
// const newRestaurant = { foundedIn: 1996, ...restaurant, founder: `Guiseppe` };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del Sole 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: `Via del Sole 21`,
//   starterIndex: 1,
// });
// //Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, openingHours, tags);
// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);
// //nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// //Nested destructoring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
