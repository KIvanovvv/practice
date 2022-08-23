'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
const hours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Es6 enhanced object literals
  hours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicius pasta with ${ing1},${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
console.log(restaurant);

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
