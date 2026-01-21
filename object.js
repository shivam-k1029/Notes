// // Object in JavaScript: collection of key-value pairs

// let obj = {
//     name: "John",
//     salary: 50000,
//     languages: ["JavaScript", "Python", "C++"],
//     isAdmin: false,
//     "college name": "NST" ,// key with space

//     subject : {
//         psp: 10,
//         maths: 20,
//         sNw: 30
        
//     }
// }

// console.log(obj.subject.maths) // Accessing nested object value 

// console.log(obj)
// console.log(obj.languages[1]) // Accessing array using key
// console.log(obj.name) // Accessing value using key
// console.log(obj.salary) // Accessing value using key

// console.log(obj.name = "Shivam") // Modifying value using key

// console.log(obj["college name"]) // Accessing value of key with space using bracket notation


let person = {
    hello : function() {    
        console.log("Hello, World!");
    }, // Method inside object

    name : "Alice",
    language : "JavaScript"
}

person.hello(); // Calling the method

delete person.language; // Deleting a key-value pair
console.log(person);