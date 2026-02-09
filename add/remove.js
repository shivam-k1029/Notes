let = [1,2,3,4,5];

// add element at the end
arr.push(6);
console.log("After push:", arr); // [1,2,3,4,5,6]

// remove element from the end
let removedEnd = arr.pop();
console.log("After pop:", arr); // [1,2,3,4,5]
console.log("Removed from end:", removedEnd); // 6

// add element at the beginning
arr.unshift(0);
console.log("After unshift:", arr); // [0,1,2,3,4,5]

// remove element from the beginning
let removedStart = arr.shift();
console.log("After shift:", arr); // [1,2,3,4,5]
console.log("Removed from start:", removedStart); // 0

// remove element from specific index
let indexToRemove = 2; // removing element at index 2
let removedSpecific = arr.splice(indexToRemove, 1); 
console.log("After splice:", arr); // [1,2,4,5]
console.log("Removed from specific index:", removedSpecific); // [3]

// add element at specific index
let indexToAdd = 2; // adding element at index 2
arr.splice(indexToAdd, 0, 3); 
console.log("After adding at specific index:", arr); // [1,2,3,4,5]