'use strict';

// // Data needed for a later exercise
let flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30;`;

flights = flights.split(`+`);
const formatAirport = function (input) {
  return input.slice(0, 3).toUpperCase();
};
for (const flight of flights) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ''} ${type.replaceAll(
    `_`,
    ` `
  )} ${formatAirport(from)} to ${formatAirport(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(50);
  console.log(output);
}
//console.log(flights);

// // Data needed for first part of the section

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (let n of names) {
//     n = n.replace(n[0], n[0].toUpperCase());
//     namesUpper.push(n);
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName(`ann jonas shmidt`);
// //Padding

// const message = `Go to gate 23`;
// console.log(message.padStart(25, `+`).padEnd(30, `+`));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const lastNum = str.slice(-4);
//   return lastNum.padStart(str.length, `*`);
// };
// console.log(maskCreditCard(4234342345632345));
// console.log(maskCreditCard(`423434234563`));

// //Repeat
// const message2 = `Bad waether ... All Departures delayd... `;
// console.log(message2.repeat(3));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
// };
// planesInLine(3);

// const airline = `Tap Air Portugal`;
// const plane = `A320`;

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) {
//     console.log(`You got the middle seat`);
//   } else {
//     console.log(`You got lucky`);
//   }
// };
// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);
// //Comparing email
// const email = `jonas@jonas.io`;
// const loginEmail = `   Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const Trimmedemail = lowerEmail.trim();
// console.log(Trimmedemail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //Replacing
// const priceGB = `288,97P`;
// const priceUS = priceGB.replace(`P`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announcment = `All passengers come to bording door 23. Boarding door 23!`;

// //console.log(announcment.replace(`door`, `gate`));
// console.log(announcment.replace(/door/g, `gate`));

// //Booleans
// const plane1 = `Airbus A320neo`;
// console.log(plane1.includes(`A320`));
// console.log(plane1.startsWith(`Air`));

// if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`)) {
//   console.log(`Part of the NEW Airbus family`);
// }
// //Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are not allowed on board`);
//   } else {
//     console.log(`Welcome aboard`);
//   }
// };
// checkBaggage(`I have laptop,some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and gun for protection`);
/////////////////////////////////
//Map practice
// const ordersSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);
// const question = new Map([
//   [`question`, `What is the best programming language in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct`],
//   [false, `Try again`],
// ]);
// console.log(question);
// const hours = new Map(Object.entries(openingHours));
// console.log(hours);
// //Quiz app
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// //const answer = Number(prompt(`Your answer`));
// const answer = 3;
// console.log(question.get(answer === question.get(`correct`)));
// //Convert map to array
// console.log([...question]);
// //console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
///////////////////////////////////
//Maps Fundamentals
// const rest = new Map();
// rest.set(`name`, `Classico Ialiano`);
// rest.set(1, `Firenze,Italy`);
// rest.set(2, `Lisbon,Portugal`);
// //console.log(rest);
// rest
//   .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open`)
//   .set(false, `We are close`);

// // console.log(rest.get(`name`));
// // console.log(rest.get(true));

// const time = 21;
// //.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// //console.log(rest.has(`categories`));
// rest.delete(2);
// //rest.clear();
// const arr = [1, 2];
// rest.set(arr, `test`);
// rest.set(document.querySelector(`h1`), `heading`);
// console.log(rest);
// console.log(rest.get(arr));

////////////////////////////////
//Sets
// console.log(ordersSet);

// console.log(new Set(`Jonas`));
// console.log(ordersSet.size);
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet.has(`Bread`));
// ordersSet.add(`Garlic Bread`);
// ordersSet.add(`Garlic Bread`);
// ordersSet.delete(`Risotto`);
// //ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) {
//   console.log(order);
// }
// // Example
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
// );

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// //With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// //Example
// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Methods
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);
// //Arrays
// const users = [{ name: `Jonas`, email: `hello@jonas.io` }];
// console.log(users[0]?.name ?? `User array empty`);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

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
