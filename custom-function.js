// Method: Custom function
// Explanation: Good, function that needs to reverse an array without creating a copy

function customReverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    // Swap the elements with temp variable
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    // Move indices to the middle
    leftIndex++;
    rightIndex--;
  }
}

let myArray = [1, 2, 3, 4, 5];

customReverse(myArray);

console.log(myArray); // [5, 4, 3, 2, 1]
