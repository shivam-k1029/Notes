let numbers = [1, 2, 3, 4, 5];



// let numbers = [1, 2, 3, 4, 5];

// ===== WHAT forEach() DOES (Using for loop) =====

// // Step 1: Loop through each element in the array
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i]; // Get current element
  
//   // Step 2: Execute the function for this element
//   console.log(num * 2);
// }

// Example 1: Using forEach to print each number
numbers.forEach(function(num) {
    console.log(num*2);
});

