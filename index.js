/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

// Math.random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 10, multiply your answer by 10:
// Math.random() * 10
// To get it to be a whole number, i.e. an integer, apply Math.floor, which rounds down to the nearest whole number:
// Math.floor(Math.random() * 10)
// To get a whole number between 1 and 10, add 1 to the answer:
// Math.floor(Math.random() * 10 + 1)

 const newID = 1000000000 + oldID;
 const ageIsValid = Number.isInteger(currentAge);
 const randomNumber = Math.random()*20;
 const randomInteger = Math.floor(Math.random()*20);
 const randomUserID = Math.floor(Math.random()*20) + 1000000000;
