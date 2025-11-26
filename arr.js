let arr = [5, 'Hello', true, 3.14, null, undefined, [1, 2, 3]];
console.log(arr); // Logging the entire array

console.log(arr.length); // Length of the array

console.log(arr[1]); // Accessing the second element ('Hello')


arr.push('New Element'); // Adding an element at the end
console.log(arr);

arr.pop(); // Removing the last element
console.log(arr);

arr.shift(); // Removing the first element
console.log(arr);

arr.unshift('First Element'); // Adding an element at the beginning
console.log(arr);

arr.splice(2, 1, 'Replaced Element'); // Replacing the third element
console.log(arr);


