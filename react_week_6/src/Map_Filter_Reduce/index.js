import dishes from '../Tasks_Components/dishes';

let numbers = [3, 56, 2, 48, 5];


// MAP
// This basically creates a new array by doing something to each of the item
function double(x) {
    return x * 2;
}
let doubled = numbers.map(double);
console.log(doubled);
// Doing same with forEach()
let doubledNumher = [];
numbers.forEach(function (num) {
    return doubledNumher.push(num *2);
})



// FILTER
numbers.filter(function (num) {
    return num > 10;
})
// Doing same with forEach()
var newArrayNumbers = [];
numbers.forEach(function (num) {
    if (num < 10) {
        newArrayNumbers.push(num);
    }
})


// REDUCE
// This works by accumulating a value by doing something to an item in an array
numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})
// Doing same with forEach()
let newNumber = 0;
numbers.forEach(function (num) {
    return newNumber += num
})


// FIND
// This brings out the first value that match a result from a function

let findNumber = numbers.find(function (num) {
    return num > 10;
})
console.log(findNumber);


// FINDINDEX
// This brings out the index of the first value that match a result from a function

let findIndexNumber = numbers.findIndex(function (num) {
    return num > 10;
})
console.log(findIndexNumber);


// Challenge!!! \\
const foodNames = dishes.map(function (dishesEntry) {
    return dishesEntry.name;
})

console.log(foodNames);
