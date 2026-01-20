// function getRandomInt(max){
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(3));
// //output: 0, 1, or 2

// console.log(getRandomInt(1));
// //output: 0

// console.log(Math.random());
// //output: a number from 0 to <1

let selectedColors = ['red', 'blue', 'orange'];
//console.log(selectedColors);
//console.log(selectedColors[1]);
selectedColors[3] = 'green';
selectedColors[3] = 100;
console.log(selectedColors.length);

const numbers = [3, 4];

numbers.push(5,6);
console.log(numbers);

numbers.unshift(1,2);
console.log(numbers);

numbers.splice(2,0,'a','b');
console.log(numbers);

const number =[1,2,3,1,4,1,5];
//indexOf returns -1 if does not exist

console.log(number.indexOf('a'));
console.log(number.indexOf(1));
console.log(number.lastIndexOf(1));
//includes
console.log(numbers.includes(4));

const number2 =[1,2,3,1,4,1,5,3,3,4,4,5,5,6,1];

console.log(number2.indexOf(1,0));
console.log(number2.indexOf(1,2));
console.log(number2.indexOf(1,6));

numbers.push(7);
console.log(numbers);
//remove last element
const last = numbers.pop();
console.log(last);
console.log(numbers);
//remove first element
const first = numbers.shift();
console.log(first);
console.log(numbers);
//removing in between
const middle = numbers.splice(2,2);
console.log(middle);
console.log(numbers);

const letters = ['a','b','c','d'];
//for..of statement iterates over values
for(let letter of letters)
    console.log(letter);
//for..in statement iterates over the enumerable 
//string properties of an object
for(let letter in letters)
    console.log(letter);









