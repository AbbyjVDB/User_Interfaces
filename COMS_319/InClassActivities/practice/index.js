let d4 = new Date();
alert("Todays date is " + d4 + "when execute content External file");

//message to console
console.log("Hello Class from External Javascript file")

//change page color
document.body.style.backgroundColor = 'green';

let x = 10;
let y = 3;

x++;
console.log(x);

x+=5;
console.log(x);
x*=3;
console.log(x);
x-=1;
console.log(x);
x**=2;
console.log(x);

//Strict Equality
console.log(1 === 1);
console.log('1' === 1);

//Loose equality
console.log('1' == 1);
console.log(true == 1);


let points = 95;

let pass = points >= 70 ? 'approve':'fail';
console.log(pass);

console.log(true&&false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);
highIncome = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible : ', eligibleForLoan);

let refused = !eligibleForLoan;
console.log('App Refused : ', eligibleForLoan);

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
//Add read Permission
myPermission = myPermission | readPermission;
console.log(myPermission);
//Add write permission
myPermission = myPermission | writePermission;
console.log(myPermission);

// Check Read permission
let message =
(myPermission & readPermission) ? 'Yes' : 'No';
console.log(message);


// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// //increment
// console.log(x++);
// console.log(x);

// //decrement
// console.log(--x);
// //shows x then decrements
// console.log(x--);
// console.log(x);



