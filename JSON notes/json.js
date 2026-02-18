const user = {
    name: 'Shivam',
    age: 19
};

let data1 = JSON.stringify(user) // Converts a JavaScript object into a JSON string
console.log('In JSON:', data1)



const jsonString = '{"name": "Shivam", "age": 19}'; // A JSON string representing a user object

let data2 = JSON.parse(jsonString) // Converts a JSON string into a JavaScript object
console.log('In obj:', data2)



const url = "https://dummyjson.com/products/1";