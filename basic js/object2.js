// let student = {
//     name: "Alice",
//     age: 20,
//     address: 'delhi',
// }
    
// // keys
// let keys = Object.keys(student);
// console.log("Keys:", keys); // ["name", "age", "address"]

// // values
// let values = Object.values(student);
// console.log("Values:", values); // ["Alice", 20, "delhi"]

// // entries
// let entries = Object.entries(student);
// console.log("Entries:", entries); 
// // [["name", "Alice"], ["age", 20], ["address", "delhi"]]

// for(let [key, value] of entries){
//     console.log(`${key}: ${value}`);
// }


// let std = [
//      {
//         name: "Bob",   
//         age: 22,
//     },

//      {
//          name: "Charlie",
//          age: 23,
//      }
//     ]



// console.log(std);
// console.log(std.length)

 //for(let student of std){
//     console.log(`Name: ${student.name}, Age: ${student.age}`);
// }

// let {name, age} = std[0]; // destructuring
// console.log(name); // "Bob"
// console.log(age);  // 22


// for(let i  = 0; i< std.length; i++){{
//     let {name, age} = std[i];
//     console.log(`Name: ${name}, Age: ${age}`);
// }
// }

// merge two objects
// let obj1 = {a: 1, b: 2};
// let obj2 = {b: 3, d: 4};

// let mergedObj = {...obj1, ...obj2}; // b from obj2 will overwrite b from obj1
// console.log(mergedObj); // {a: 1, b: 3, d: 4}

// // Array destructuring to get first two colors
// let colors = ["red", "blue", "green"];
// let [primary, secondary] = colors;
// console.log(`primary = "${primary}"`);
// console.log(`secondary = "${secondary}"`);


objj = {
    name: "John",
    age: 25,
    college: 'NST'
}

for(let key in objj){
    console.log(`${key}: ${objj[key]}`);
}








