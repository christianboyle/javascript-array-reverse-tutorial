// Method: Native JS reverse() method
// Explanation: Bad, because it modifies the original array

let numbers = [1, 2, 3, 4, 5];

let reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // [5, 4, 3, 2, 1]

console.log(numbers); // [5, 4, 3, 2, 1]
