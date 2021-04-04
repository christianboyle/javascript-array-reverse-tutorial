// Method: Spread operator and reverse()
// Explanation: Good, but only works with ES6

let numbers = [1, 2, 3, 4, 5];

let reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers); // [5, 4, 3, 2, 1]

console.log(numbers); // [1, 2, 3, 4, 5]
