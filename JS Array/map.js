// map - > array.map() is a method that creates a new array by applying a function to each element of the original array. It does not modify the original array but returns a new one with the transformed values.

// let numbers = [1, 2, 3, 4, 5];

// ===== WHAT map() DOES (Using for loop) =====

// // Step 1: Create an empty array to store transformed results
// let doubled = [];

// // Step 2: Loop through each element in the original array
// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i]; // Get current element
  
//   // Step 3: Apply the transformation (multiply by 2)
//   let transformedValue = num * 2;
  
//   // Step 4: Add the transformed value to the new array
//   doubled.push(transformedValue);
// }

// console.log(doubled); // Output: [2, 4, 6, 8, 10]
// console.log(numbers); // Original unchanged: [1, 2, 3, 4, 5]


// Example 1: Double each number in the array

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(function(num){
    return num * 2;
})

console.log(double);

//example 2: object array map


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

let productNames = product.filter(function(item){
    return item.inStock;
}).map((gst) => {
    return gst.price + gst.price * 0.18;
})

console.log(productNames);