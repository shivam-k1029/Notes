// Object in JavaScript: collection of key-value pairs

let obj = {
    name: "John",
    salary: 50000,
    languages: ["JavaScript", "Python", "C++"],
    isAdmin: false,
    "college name": "NST" // key with space
}

console.log(obj)
console.log(obj.languages[1]) // Accessing array using key
console.log(obj.name) // Accessing value using key
console.log(obj.salary) // Accessing value using key

console.log(obj.name = "Shivam") // Modifying value using key

console.log(obj["college name"]) // Accessing value of key with space using bracket notation