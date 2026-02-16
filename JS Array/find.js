//Find the first element in the array that is greater than 3
let numbers = [1, 2, 3, 4, 5];


// ===== WHAT find() DOES (Using for loop) =====

// // Step 1: Create a variable to store the result (starts as undefined)
// let firstGreaterThanThree;

// // Step 2: Loop through each element in the array
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i]; // Get current element
  
//   // Step 3: Check if the condition is true
//   if (num > 3) {
//     // Step 4: If TRUE, store this element and STOP the loop
//     firstGreaterThanThree = num;
//     break;  // ← Important: STOP searching after finding first match
//   }
// }

// console.log(firstGreaterThanThree); // Output: 4


let firstGreaterThanThree = numbers.find(function(num){
    return num > 3;
})

console.log(firstGreaterThanThree); // Output: 4