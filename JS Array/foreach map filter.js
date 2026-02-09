let numbers = [1, 2, 3, 4, 5];


//1. filter()
// first it will create new array and then it will check for each element if the condition is true or not, if it is true then it will add that element in new array and return that new array at the end

// ===== WHAT filter() DOES (Using for loop) =====

// // Step 1: Create an empty array to store results
// let divBytwo = [];

// // Step 2: Loop through each element in the original array
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i]; // Get current element
  
//   // Step 3: Check the condition (num % 2 === 0)
//   if (num % 2 === 0) {
//     // Step 4: If condition is TRUE, add this element to the new array
//     divByTwo.push(num);
//   }
//   // If condition is FALSE, skip it (don't add to new array)
// }

// console.log(divByTwo); // Output: [2, 4]

// Example 1: Filter even numbers from the array
let divByTwo = numbers.filter(function(num){
  return num % 2 === 0;
})
console.log(divByTwo);

// Example 2: object array filter

let product = [
    {
        name: "Laptop",
        price: 50000,
        inStock: true
    },
    {
        name: "Phone",
        price: 30000,
        inStock: false
    },

    {
        name: "Tablet",
        price: 20000,
        inStock: true
    }
]

let inStock = product.filter(function(item){
    return item.inStock === true;
})

console.log(inStock);


