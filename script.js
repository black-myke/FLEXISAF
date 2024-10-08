// let Keyword allows to redeclare a variable with block scope
var x = 12; // x is 12 here
console.log(x);

{
    let x = 20; //x is 20 here
    console.log(x);
}

// conts Ketyword allows to declare a constant. A JS variable that cannot be cahnged
var x = 12; // x is 12 here
console.log(x);

{
    const x = 20; //x is 20 here and x cannot be used anywhere inside this scope again
    console.log(x);
} 
console.log(" ");

// ARROW FUNCTIONS
const arrFun = (length, breadth) => {
    return length * breadth;
}

console.log(`Result of the arrow function: ${arrFun(10, 3)}`);
console.log(" ");


// FOR/OF LOOP:  
const logos = ["Ferrai", "BMW", "Dominos", "Mobil"];
// looping over arrays 
console.log("Lopping through array of logos:");
for(let x of logos) {
    console.log(x);
}

// looping over strings
const srtingLoop = "Mathematician";
console.log("Lopping through strings:");
for(let x of srtingLoop) {
    console.log(x);
}
console.log("");

ifPassword = "Fl£xi$@f";
if (ifPassword.length >= 10 && ifPassword.includes("@")) {
  console.log("Password is very strong"); //this would display on the console because it meets the code's requirement
} else if (ifPassword.length >= 8 || ifPassword.includes("-")) {
  console.log("Not too strong but manageable");
} else {
  console.log("Cannot use this password. Not strong enough!");
}

const calculate = (radius) => {
    return 3.14 * radius ** 2;
};
  
const letArea = calculate(3);
console.log("Arrow function area is: ", letArea);
  
const bill = (products, tax) => {
 let total = 0;
 for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
    }
 return total;
};
  
const result = bill([100, 207, 830], 0.2);
console.log("Total is: ", result);

console.log(Math); //This is the various list of the Math object properties
// Some Math properties
console.log(Math.PI);
console.log(Math.E);
// Some Math methods
const area = 6.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// Random Numbers
const random = Math.random();
console.log(random);
console.log(random * 12);

const todos = [
  {
    id: 1,
    task: "Hospital Appointment",
    isDone: false,
  },
  {
    id: 2,
    task: "Coding Lesson",
    isDone: true,
  },
  {
    id: 3,
    task: "Watch Movie",
    isDone: true,
  },
];

// forEach()
todos.forEach(function (item) {
  console.log(item.task); // This would output the whole tasks in the todo
});

todos.forEach(function (done) {
  console.log(done.isDone);
});

// ---

// map()
const todoTask = todos.map(function (text) {
  return text.task;
});
console.log(`The task in the todo will be output below`);
console.log(todoTask);

let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
// ---

// filter()
const doneTodo = todos.filter(function (done) {
  return done.isDone === true;
});
console.log(doneTodo);

numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
// ---

// reduce()
numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
// ---

// find()
numbers = [1, 2, 3, 4];
const found = numbers.find((num) => num > 2);
console.log(found); // 3
// --

// findIndex()
numbers = [1, 2, 3, 4];
const numIndex = numbers.findIndex((num) => num > 2);
console.log(numIndex); // 2
// ---

// some()
numbers = [1, 2, 3];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true
// --

// every()
numbers = [2, 4, 6];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true
// ---

// sort()
const sortNumbers = [4, 2, 3, 1];
sortNumbers.sort((a, b) => a - b);
console.log(sortNumbers); // [1, 2, 3, 4]
// ---

// flatMap()
numbers = [1, 2, 3];
const flatResult = numbers.flatMap((num) => [num, num * 2]);
console.log(flatResult); // [1, 2, 2, 4, 3, 6]






// WEEK 1 TASK
const westAfrica = [ "Benin", "Burkina Faso", "Cape Verde", "The Gambia", 
                    "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", 
                    "Liberia", "Mali", "Mauritania", "Niger", "Nigeria", 
                    "Senegal", "Sierra Leone", "Togo" ];


let displayText = " ";

for (let x of westAfrica) {
    displayText += x + "<br />";
}

document.getElementById("array").innerHTML = displayText;