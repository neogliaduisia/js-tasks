/*
  Sort users by age, oldest users first,
*/

const users = [
  { name: 'Dan', language: 'JS', age: 21 },
  { name: 'Steve', language: 'C#', age: 30 },
  { name: 'Tom', language: 'JS', age: 12 },
  { name: 'Max', language: 'C++', age: 40 },
  { name: 'Innokenty', language: '1C', age: 54 },
  { name: 'Michael', language: 'C++', age: 40 },
];

function sortUsersByAge(usersArray) {
  return usersArray.sort((a, b) => {
    return b.age - a.age
  });
};

const assert = require("assert");
assert.deepStrictEqual(
  sortUsersByAge([
    { name: 'Dan', language: 'JS', age: 21 },
    { name: 'Steve', language: 'C#', age: 30 },
    { name: 'Tom', language: 'JS', age: 12 },
    { name: 'Max', language: 'C++', age: 40 },
    { name: 'Innokenty', language: '1C', age: 54 },
    { name: 'Michael', language: 'C++', age: 40 },
  ]),
  [
    { name: 'Innokenty', language: '1C', age: 54 },
    { name: 'Max', language: 'C++', age: 40 },
    { name: 'Michael', language: 'C++', age: 40 },
    { name: 'Steve', language: 'C#', age: 30 },
    { name: 'Dan', language: 'JS', age: 21 },
    { name: 'Tom', language: 'JS', age: 12 },
  ]
);
