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


// let person = {
//     hello : function() {    
//         console.log("Hello, World!");
//     }, // Method inside object

//     name : "Alice",
//     language : "JavaScript"
// }

// person.hello(); // Calling the method

// delete person.language; // Deleting a key-value pair
// console.log(person);

// let user = {
//     name: "Bhavesh",
//     age: 26,
//     city: "Delhi",
//     isLoggedIn: true,
//     email: "bhavesh@gmail.com",
// };

// console.log(user[email]);

let user = {
    "name": "Bhavesh",
    "age": 26,
    "city": "Delhi",
    "isLoggedIn": true,
    "email": "bhavesh@gmail.com"
}

//json.parse() : converts json data to js object
let jsonData = JSON.stringify(user);
console.log(jsonData);


// ============================================================================
// DIFFERENCE BETWEEN for...in AND for...of WITH OBJECTS
// ============================================================================

console.log("\n========== FOR...IN vs FOR...OF ==========\n");

// ============================================================================
// 1. FOR...IN LOOP
// ============================================================================
console.log("--- 1. FOR...IN LOOP ---");
console.log("for...in iterates over all ENUMERABLE PROPERTY NAMES (keys)");
console.log("Works with: Objects, Arrays (but not recommended for arrays)");

const personObj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

console.log("\nUsing for...in on object:");
for (let key in personObj) {
  console.log(`${key}: ${personObj[key]}`);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30
// city: New York


// ============================================================================
// 2. FOR...OF LOOP
// ============================================================================
console.log("\n--- 2. FOR...OF LOOP ---");
console.log("for...of iterates over ITERABLE VALUES (not keys)");
console.log("Works with: Arrays, Strings, Maps, Sets, etc.");
console.log("Does NOT work directly with plain objects!");

// for...of with array
const colors = ["red", "green", "blue"];
console.log("\nUsing for...of on array:");
for (let color of colors) {
  console.log(color);
}
// Output: red, green, blue

// for...of with object - THIS WILL ERROR!
// console.log("\nUsing for...of on plain object:");
// for (let value of personObj) {
//   console.log(value); // TypeError: personObj is not iterable
// }


// ============================================================================
// 3. COMPARISON TABLE
// ============================================================================
console.log("\n--- COMPARISON ---");
console.log(`
FEATURE           | FOR...IN          | FOR...OF
------------------|-------------------|------------------
Purpose           | Iterate KEYS      | Iterate VALUES
Works with        | Objects, Arrays   | Arrays, Strings, Maps, Sets
Returns           | Property names    | Element values
On Objects        | ✓ Works           | ✗ Error (not iterable)
On Arrays         | Keys/Indexes      | Values (recommended)
Inherited props   | Yes (enumerable)  | N/A
`);


// ============================================================================
// 4. PRACTICAL EXAMPLES WITH OBJECTS
// ============================================================================
console.log("\n--- PRACTICAL EXAMPLES ---");

const carObj1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  color: "Silver"
};

// Using for...in to get all keys
console.log("\nfor...in - Get all keys:");
for (let prop in carObj1) {
  console.log(prop);
}
// Output: brand, model, year, color

// Using for...in to get key-value pairs
console.log("\nfor...in - Get key-value pairs:");
for (let key in carObj1) {
  console.log(`${key}: ${carObj1[key]}`);
}
// Output:
// brand: Toyota
// model: Camry
// year: 2023
// color: Silver


// ============================================================================
// 5. HOW TO USE for...of WITH OBJECTS
// ============================================================================
console.log("\n--- USING for...of WITH OBJECTS ---");

// Method 1: Use Object.keys() with for...of
console.log("\nMethod 1: for...of with Object.keys():");
for (let key of Object.keys(carObj1)) {
  console.log(`${key}: ${carObj1[key]}`);
}

// Method 2: Use Object.values() with for...of
console.log("\nMethod 2: for...of with Object.values():");
for (let value of Object.values(carObj1)) {
  console.log(value);
}

// Method 3: Use Object.entries() with for...of
console.log("\nMethod 3: for...of with Object.entries():");
for (let [key, value] of Object.entries(carObj1)) {
  console.log(`${key}: ${value}`);
}


// ============================================================================
// 6. INHERITED PROPERTIES
// ============================================================================
console.log("\n--- INHERITED PROPERTIES ---");

// Create object with prototype
const parentObj = { inherited: "I am inherited" };
const childObj = Object.create(parentObj);
childObj.own = "I am own property";

console.log("for...in (includes inherited):");
for (let key in childObj) {
  console.log(key); // Shows: own, inherited
}

console.log("\nObject.keys() (only own):");
for (let key of Object.keys(childObj)) {
  console.log(key); // Shows: own
}

console.log("\nObject.getOwnPropertyNames() (only own):");
console.log(Object.getOwnPropertyNames(childObj)); // ["own"]


// ============================================================================
// 7. ARRAYS - for...in vs for...of
// ============================================================================
console.log("\n--- ARRAYS: for...in vs for...of ---");

const fruits = ["apple", "banana", "orange"];

console.log("for...in on array (returns INDEXES):");
for (let index in fruits) {
  console.log(index); // 0, 1, 2
}

console.log("\nfor...of on array (returns VALUES):");
for (let fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}


// ============================================================================
// 8. WHEN TO USE WHAT
// ============================================================================
console.log("\n--- WHEN TO USE WHAT ---");
console.log(`
USE for...in WHEN:
- Iterating over object properties (keys)
- Need to access both key and value from an object
- Working with plain objects

USE for...of WHEN:
- Iterating over array VALUES (preferred for arrays)
- Working with iterables (arrays, strings, maps, sets)
- Need cleaner, more readable code for collections

AVOID for...in WITH:
- Arrays (use for...of instead)
- When you need values from objects (convert to Object.keys/values first)
`);


// ============================================================================
// WORKING WITH OBJECTS USING obj = {} SYNTAX
// ============================================================================

console.log("\n========== OBJECT LITERALS obj = {} ==========\n");

// ============================================================================
// 1. CREATING OBJECTS WITH LITERAL SYNTAX
// ============================================================================
console.log("--- 1. CREATING OBJECTS ---");

// Empty object
const emptyObj = {};
console.log("Empty object:", emptyObj); // {}

// Object with properties
const student = {
  name: "Alice",
  rollNo: 101,
  marks: 95
};
console.log("Student object:", student);

// Object with different data types
const mixed = {
  string: "Hello",
  number: 42,
  boolean: true,
  array: [1, 2, 3],
  null: null,
  undefined: undefined,
  object: { nested: "value" }
};
console.log("Mixed data types:", mixed);


// ============================================================================
// 2. ACCESSING PROPERTIES
// ============================================================================
console.log("\n--- 2. ACCESSING PROPERTIES ---");

const userData1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com"
};

// Dot notation
console.log("Dot notation:");
console.log(userData1.firstName); // John
console.log(userData1.age); // 30

// Bracket notation
console.log("\nBracket notation:");
console.log(userData1["firstName"]); // John
console.log(userData1["age"]); // 30

// Properties with spaces (must use bracket notation)
const employee = {
  "first name": "Jane",
  "full address": "123 Main St, NYC",
  department: "IT"
};
console.log("\nWith spaces - bracket notation:");
console.log(employee["first name"]); // Jane
console.log(employee["full address"]); // 123 Main St, NYC

// Using variable as key
const key = "firstName";
console.log("\nUsing variable as key:", userData1[key]); // John


// ============================================================================
// 3. ADDING NEW PROPERTIES
// ============================================================================
console.log("\n--- 3. ADDING NEW PROPERTIES ---");

const product = {
  name: "Laptop",
  price: 1000
};
console.log("Original:", product);

// Add property using dot notation
product.color = "Silver";
product.stock = 50;

// Add property using bracket notation
product["warranty"] = "2 years";
product["in_stock"] = true;

console.log("After adding properties:", product);


// ============================================================================
// 4. MODIFYING PROPERTIES
// ============================================================================
console.log("\n--- 4. MODIFYING PROPERTIES ---");

const carObj2 = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  color: "Red"
};
console.log("Original car:", carObj2);

// Modify using dot notation
carObj2.year = 2023;
carObj2.color = "Blue";

// Modify using bracket notation
carObj2["brand"] = "Tesla (Updated)";

console.log("After modification:", carObj2);


// ============================================================================
// 5. DELETING PROPERTIES
// ============================================================================
console.log("\n--- 5. DELETING PROPERTIES ---");

const personData = {
  name: "Bob",
  age: 25,
  city: "London",
  country: "UK"
};
console.log("Before delete:", personData);

// Delete property
delete personData.age;
delete personData["country"];

console.log("After delete:", personData); // age and country are removed


// ============================================================================
// 6. CHECKING IF PROPERTY EXISTS
// ============================================================================
console.log("\n--- 6. CHECKING IF PROPERTY EXISTS ---");

const book = {
  title: "JavaScript Guide",
  author: "John Smith",
  pages: 400
};

// Method 1: in operator
console.log("'title' in book:", "title" in book); // true
console.log("'price' in book:", "price" in book); // false

// Method 2: hasOwnProperty()
console.log("book.hasOwnProperty('author'):", book.hasOwnProperty("author")); // true
console.log("book.hasOwnProperty('isbn'):", book.hasOwnProperty("isbn")); // false

// Method 3: Direct check (only if value is not null/undefined/false)
console.log("book.title:", book.title ? "exists" : "doesn't exist"); // exists
console.log("book.price:", book.price ? "exists" : "doesn't exist"); // doesn't exist


// ============================================================================
// 7. NESTED OBJECTS
// ============================================================================
console.log("\n--- 7. NESTED OBJECTS ---");

const company = {
  name: "Tech Corp",
  location: {
    street: "123 Tech Street",
    city: "San Francisco",
    country: "USA",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194
    }
  },
  employees: 500,
  founded: 2010
};

// Accessing nested properties
console.log("Company:", company.name);
console.log("City:", company.location.city);
console.log("Latitude:", company.location.coordinates.latitude);

// Adding nested object
company.ceo = {
  name: "Alice Johnson",
  age: 45,
  experience: 20
};
console.log("\nAfter adding CEO:", company);


// ============================================================================
// 8. METHODS IN OBJECTS
// ============================================================================
console.log("\n--- 8. METHODS IN OBJECTS ---");

const calculator = {
  value: 0,
  
  // Methods
  add: function(num) {
    this.value += num;
    return this;
  },
  
  subtract: function(num) {
    this.value -= num;
    return this;
  },
  
  multiply: function(num) {
    this.value *= num;
    return this;
  },
  
  getResult: function() {
    return this.value;
  }
};

console.log("Initial value:", calculator.value);
calculator.add(10);
console.log("After add(10):", calculator.value);
calculator.subtract(3);
console.log("After subtract(3):", calculator.value);
calculator.multiply(2);
console.log("After multiply(2):", calculator.value);
console.log("Final result:", calculator.getResult());


// ============================================================================
// 9. OBJECT UTILITY METHODS
// ============================================================================
console.log("\n--- 9. OBJECT UTILITY METHODS ---");

const laptop = {
  brand: "Dell",
  model: "XPS 13",
  price: 1200,
  specs: "Intel i7, 16GB RAM"
};

// Object.keys() - get all property names
console.log("Object.keys():", Object.keys(laptop));
// ["brand", "model", "price", "specs"]

// Object.values() - get all property values
console.log("Object.values():", Object.values(laptop));
// ["Dell", "XPS 13", 1200, "Intel i7, 16GB RAM"]

// Object.entries() - get key-value pairs
console.log("Object.entries():", Object.entries(laptop));
// [["brand", "Dell"], ["model", "XPS 13"], ...]

// Object.assign() - copy/merge objects
const defaults = { warranty: "1 year", support: "24/7" };
const merged = Object.assign({}, laptop, defaults);
console.log("Merged object:", merged);

// Object.freeze() - prevent modifications
const frozen = {
  name: "Immutable",
  value: 100
};
Object.freeze(frozen);
frozen.value = 200; // Won't work
console.log("Frozen object after modification attempt:", frozen);


// ============================================================================
// 10. DESTRUCTURING OBJECTS
// ============================================================================
console.log("\n--- 10. DESTRUCTURING OBJECTS ---");

const userProfile = {
  username: "john_doe",
  email: "john@example.com",
  role: "admin",
  isActive: true
};

// Basic destructuring
const { username, email, role } = userProfile;
console.log("Username:", username);
console.log("Email:", email);
console.log("Role:", role);

// Destructuring with renaming
const { username: userNameVar, role: userRole } = userProfile;
console.log("\nRenamed - user:", userNameVar, "userRole:", userRole);

// Destructuring with default values
const { phone = "N/A", country = "USA" } = userProfile;
console.log("Phone:", phone);
console.log("Country:", country);


// ============================================================================
// 11. SPREAD OPERATOR WITH OBJECTS
// ============================================================================
console.log("\n--- 11. SPREAD OPERATOR WITH OBJECTS ---");

const baseSettings = {
  theme: "dark",
  language: "English",
  notifications: true
};

const userSettings = {
  theme: "light", // override
  fontSize: 16 // new property
};

// Merge objects
const finalSettings = { ...baseSettings, ...userSettings };
console.log("Merged settings:", finalSettings);

// Clone object
const clone = { ...baseSettings };
console.log("Cloned object:", clone);


// ============================================================================
// 12. ITERATION METHODS
// ============================================================================
console.log("\n--- 12. ITERATION METHODS ---");

const scores = {
  math: 95,
  english: 87,
  science: 92,
  history: 88
};

// Using for...in
console.log("Using for...in:");
for (let subject in scores) {
  console.log(`${subject}: ${scores[subject]}`);
}

// Using Object.entries() with for...of
console.log("\nUsing Object.entries() with for...of:");
for (let [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}

// Using forEach with Object.entries()
console.log("\nUsing forEach:");
Object.entries(scores).forEach(([subject, score]) => {
  console.log(`${subject}: ${score}`);
});


// ============================================================================
// 13. DYNAMIC PROPERTY NAMES
// ============================================================================
console.log("\n--- 13. DYNAMIC PROPERTY NAMES ---");

const field = "email";
const value = "user@example.com";

// Using bracket notation for dynamic keys
const dynamicObj = {
  name: "John",
  [field]: value, // email: "user@example.com"
  [field + "_verified"]: true // email_verified: true
};

console.log("Dynamic object:", dynamicObj);


// ============================================================================
// 14. COMMON PATTERNS
// ============================================================================
console.log("\n--- 14. COMMON PATTERNS ---");

// Pattern 1: Configuration object
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  debug: false
};
console.log("Config:", config);

// Pattern 2: Database record
const user_record = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: "2024-01-26",
  updatedAt: "2024-01-26"
};
console.log("User record:", user_record);

// Pattern 3: Map/Dictionary
const colorCodes = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00"
};
console.log("Get red color code:", colorCodes.red);

// Pattern 4: Counter/State
const appState = {
  count: 0,
  increment() { this.count++; },
  decrement() { this.count--; },
  reset() { this.count = 0; }
};
appState.increment();
appState.increment();
console.log("Counter after increments:", appState.count); // 2


// ============================================================================
// QUICK REFERENCE
// ============================================================================
console.log("\n--- QUICK REFERENCE ---");
console.log(`
OBJECT BASICS:
const obj = {};                    // Create empty object
const obj = { key: value };        // Create with properties
obj.prop = value;                  // Add property (dot notation)
obj["prop"] = value;               // Add property (bracket notation)
delete obj.prop;                   // Delete property
obj.prop;                          // Access property (dot notation)
obj["prop"];                       // Access property (bracket notation)

USEFUL METHODS:
Object.keys(obj)                   // Get all keys
Object.values(obj)                 // Get all values
Object.entries(obj)                // Get [key, value] pairs
Object.assign(target, source)      // Merge objects
Object.freeze(obj)                 // Make immutable
"prop" in obj                       // Check if property exists
obj.hasOwnProperty("prop")         // Check own properties

LOOPS:
for (let key in obj) { }           // Iterate keys
for (let [k, v] of Object.entries(obj)) { }  // Iterate pairs
Object.keys(obj).forEach(k => {})  // Iterate with forEach

DESTRUCTURING:
const { key1, key2 } = obj;        // Extract properties
const { key: newName } = obj;      // Rename property
const { key = default } = obj;     // Default value

SPREAD:
const copy = { ...obj };           // Clone object
const merged = { ...obj1, ...obj2 }; // Merge objects
`);


// ============================================================================
// QUOTED vs UNQUOTED KEYS AND VALUES
// ============================================================================

console.log("\n========== QUOTED vs UNQUOTED KEYS AND VALUES ==========\n");

// ============================================================================
// TYPE 1: BOTH KEYS AND VALUES WITH QUOTES (JSON FORMAT)
// ============================================================================
console.log("--- TYPE 1: Quoted Keys + Quoted Values (JSON) ---");
console.log('Example: { "name": "Shivam Kumar", "course": "BTECH" }');

const student1 = {
  "name": "Shivam Kumar",
  "course": "BTECH",
  "rollNo": "101",
  "semester": "4"
};

console.log("Object:", student1);
console.log("Accessing name:", student1.name); // Shivam Kumar
console.log("Accessing course:", student1["course"]); // BTECH
console.log("Data type of name:", typeof student1.name); // string
console.log("JSON.stringify:", JSON.stringify(student1));
console.log("This is valid JSON format!");


// ============================================================================
// TYPE 2: UNQUOTED KEYS WITH QUOTED VALUES (JavaScript Literal)
// ============================================================================
console.log("\n--- TYPE 2: Unquoted Keys + Quoted Values (JavaScript) ---");
console.log('Example: { name: "Shivam Kumar", course: "BTECH" }');

const student2 = {
  name: "Shivam Kumar",
  course: "BTECH",
  rollNo: "101",
  semester: "4"
};

console.log("Object:", student2);
console.log("Accessing name:", student2.name); // Shivam Kumar
console.log("Accessing course:", student2["course"]); // BTECH
console.log("Data type of name:", typeof student2.name); // string
console.log("This is standard JavaScript object literal!");


// ============================================================================
// TYPE 3: QUOTED KEYS WITH UNQUOTED VALUES (INVALID - STRING)
// ============================================================================
console.log("\n--- TYPE 3: Quoted Keys + Unquoted Values (INVALID) ---");
console.log('Example: { "name": Shivam Kumar, "course": BTECH }');
console.log("❌ THIS WILL CAUSE AN ERROR!\n");

// Uncomment below to see the error:
// const student3 = {
//   "name": Shivam Kumar,  // ERROR: Unexpected identifier
//   "course": BTECH        // ERROR: Shivam Kumar is treated as variable, not string
// };

console.log("Reason: Unquoted values are treated as:");
console.log("  - Variables (if they exist)");
console.log("  - Numbers (if they're numeric)");
console.log("  - Booleans (true/false)");
console.log("  - undefined, null");
console.log("  - Objects/Arrays");
console.log("  - NOT strings!");


// ============================================================================
// PRACTICAL EXAMPLES - SHOWING THE DIFFERENCE
// ============================================================================
console.log("\n--- PRACTICAL DIFFERENCES ---\n");

// Example 1: Quoted values (strings)
console.log("Example 1 - Quoted values are STRINGS:");
const obj1 = {
  "name": "Shivam Kumar",
  "course": "BTECH",
  "age": "20"
};
console.log("obj1.name:", obj1.name);
console.log("Type:", typeof obj1.name); // string
console.log("obj1.age:", obj1.age);
console.log("Type:", typeof obj1.age); // string (not number!)
console.log();

// Example 2: Unquoted numeric values
console.log("Example 2 - Unquoted numbers are NUMBERS:");
const obj2 = {
  name: "Shivam Kumar",
  course: "BTECH",
  age: 20,
  semester: 4
};
console.log("obj2.age:", obj2.age);
console.log("Type:", typeof obj2.age); // number
console.log("obj2.semester:", obj2.semester);
console.log("Type:", typeof obj2.semester); // number
console.log();

// Example 3: Mixed (correct way)
console.log("Example 3 - Mixed keys (correct way):");
const obj3 = {
  name: "Shivam Kumar",        // unquoted key, quoted value (string)
  course: "BTECH",              // unquoted key, quoted value (string)
  age: 20,                       // unquoted key, unquoted value (number)
  semester: 4,                   // unquoted key, unquoted value (number)
  isStudent: true,              // unquoted key, unquoted value (boolean)
  "date of birth": "2004-05-15" // quoted key (has space), quoted value (string)
};
console.log("obj3:", obj3);
console.log();

// Example 4: Arithmetic with mixed types
console.log("Example 4 - Why types matter:");
const withQuotes = {
  price: "100",
  quantity: "5"
};
const withoutQuotes = {
  price: 100,
  quantity: 5
};

console.log("With quotes (strings):");
console.log("  price + quantity =", withQuotes.price + withQuotes.quantity);
// Output: "1005" (string concatenation!)

console.log("Without quotes (numbers):");
console.log("  price + quantity =", withoutQuotes.price + withoutQuotes.quantity);
// Output: 105 (mathematical addition)
console.log();


// ============================================================================
// WHEN KEYS NEED QUOTES
// ============================================================================
console.log("--- WHEN KEYS NEED QUOTES ---");

const obj4 = {
  // Valid without quotes (identifiers)
  name: "John",
  age: 25,
  _private: "secret",
  $price: 100,
  myVar123: "test",
  
  // MUST use quotes (not valid identifiers)
  "first name": "John",           // has space
  "123": "numeric string",         // starts with number
  "my-value": "test",             // has hyphen
  "user@email": "test",           // has special char
  "user.profile": "test",         // has dot
  "user[0]": "test"               // has brackets
};

console.log("obj4:", obj4);
console.log("Access with quotes: obj4['first name'] =", obj4["first name"]);
console.log("Access with dot: obj4.name =", obj4.name);


// ============================================================================
// JSON vs JAVASCRIPT OBJECT
// ============================================================================
console.log("\n--- JSON vs JAVASCRIPT OBJECT ---\n");

// Valid JavaScript object but NOT valid JSON
const jsObj = {
  name: "Shivam",      // unquoted key
  age: 20,
  greet: function() {  // function
    return "Hello";
  },
  undefined: undefined // undefined value
};

console.log("JavaScript Object (not all properties are JSON-compatible):");
console.log("jsObj:", jsObj);
console.log("jsObj.greet:", jsObj.greet); // [Function: greet]

// Valid JSON has:
// 1. Quoted keys
// 2. String values must be quoted
// 3. No functions
// 4. No undefined
const jsonString = '{"name": "Shivam", "age": 20, "course": "BTECH"}';
console.log("\nValid JSON string:");
console.log(jsonString);

// Converting to/from JSON
console.log("\nJSON.parse (string to object):");
const parsed = JSON.parse(jsonString);
console.log(parsed); // { name: 'Shivam', age: 20, course: 'BTECH' }

console.log("\nJSON.stringify (object to string):");
const stringified = JSON.stringify(jsObj);
console.log(stringified); // '{"name":"Shivam","age":20}'
// Note: greet and undefined are excluded


// ============================================================================
// COMPARISON SUMMARY
// ============================================================================
console.log("\n--- COMPARISON SUMMARY ---");
console.log(`
SYNTAX                           | KEYS            | VALUES          | FORMAT
---------------------------------|-----------------|-----------------|------------------
{ "name": "John", "age": "25" }  | Quoted strings  | Quoted strings  | JSON Format
{ name: "John", age: "25" }      | Unquoted (OK)   | Quoted strings  | JS Object Literal
{ name: John, age: 25 }          | Unquoted (OK)   | Unquoted (nums) | JS Object Literal
{ "name": John, "age": 25 }      | Quoted strings  | Unquoted        | ❌ ERROR - Invalid!

KEY RULES:
✓ Keys can be: identifiers, numbers, strings
✓ Unquoted keys must be valid identifiers (start with letter, $, or _)
✓ Keys with spaces, hyphens, etc. MUST be quoted
✓ Quoted keys are always strings

VALUE RULES:
✓ String values must be quoted
✓ Numbers, booleans, null, undefined can be unquoted
✓ Objects and Arrays can be unquoted (nested)
✓ Functions must have no quotes

DATA TYPE MATTERS:
- "20" is a STRING (with quotes)
- 20 is a NUMBER (without quotes)
- "true" is a STRING
- true is a BOOLEAN
`);


// ============================================================================
// LIVE CODE EXAMPLES - SEE THE DIFFERENCE!
// ============================================================================

console.log("\n\n========== LIVE CODE EXAMPLES ==========\n");

// ============================================================================
// EXAMPLE 1: QUOTED KEYS AND QUOTED VALUES
// ============================================================================
console.log("═══ EXAMPLE 1: QUOTED KEYS + QUOTED VALUES ═══");
console.log('Code: const obj1 = { "name": "Shivam Kumar", "course": "BTECH" }\n');

const obj1 = {
  "name": "Shivam Kumar",
  "course": "BTECH"
};

console.log("Output - obj1:", obj1);
console.log("obj1['name']:", obj1["name"]);
console.log("typeof obj1['name']:", typeof obj1["name"]);
console.log("obj1['course']:", obj1["course"]);
console.log("typeof obj1['course']:", typeof obj1["course"]);
console.log("\n✓ Both keys and values are strings");
console.log("✓ This is valid JSON format");
console.log("✓ Can be parsed with JSON.parse()\n");


// ============================================================================
// EXAMPLE 2: UNQUOTED KEYS + QUOTED VALUES
// ============================================================================
console.log("\n═══ EXAMPLE 2: UNQUOTED KEYS + QUOTED VALUES ═══");
console.log('Code: const obj2 = { name: "Shivam Kumar", course: "BTECH" }\n');

const obj2 = {
  name: "Shivam Kumar",
  course: "BTECH"
};

console.log("Output - obj2:", obj2);
console.log("obj2.name:", obj2.name);
console.log("typeof obj2.name:", typeof obj2.name);
console.log("obj2.course:", obj2.course);
console.log("typeof obj2.course:", typeof obj2.course);
console.log("\n✓ Keys are identifiers (no quotes needed)");
console.log("✓ Values are strings (quotes required)");
console.log("✓ Standard JavaScript object literal");
console.log("✓ Both methods work to access: obj2.name or obj2['name']\n");


// ============================================================================
// EXAMPLE 3: COMPARE obj1 vs obj2
// ============================================================================
console.log("\n═══ EXAMPLE 3: ARE obj1 AND obj2 THE SAME? ═══\n");

console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1.name === obj2.name:", obj1.name === obj2.name); // true (same value)
console.log("obj1.course === obj2.course:", obj1.course === obj2.course); // true

console.log("\n✓ The VALUES are identical");
console.log("✓ The SYNTAX is different");
console.log("✓ In JavaScript, unquoted keys are automatically converted to strings\n");


// ============================================================================
// EXAMPLE 4: UNQUOTED VALUES WITH DIFFERENT TYPES
// ============================================================================
console.log("\n═══ EXAMPLE 4: UNQUOTED VALUES (DIFFERENT TYPES) ═══");
console.log('Code: const obj4 = { name: "Shivam", age: 20, semester: 4, isStudent: true }\n');

const obj4 = {
  name: "Shivam",      // STRING - quoted
  age: 20,             // NUMBER - unquoted
  semester: 4,         // NUMBER - unquoted
  isStudent: true,     // BOOLEAN - unquoted
  score: 95.5,         // DECIMAL NUMBER - unquoted
  guardian: null,      // NULL - unquoted
  phone: undefined     // UNDEFINED - unquoted
};

console.log("Output - obj4:", obj4);
console.log("\nDetailed breakdown:");
console.log("  name:", obj4.name, "→ type:", typeof obj4.name);
console.log("  age:", obj4.age, "→ type:", typeof obj4.age);
console.log("  semester:", obj4.semester, "→ type:", typeof obj4.semester);
console.log("  isStudent:", obj4.isStudent, "→ type:", typeof obj4.isStudent);
console.log("  score:", obj4.score, "→ type:", typeof obj4.score);
console.log("  guardian:", obj4.guardian, "→ type:", typeof obj4.guardian);
console.log("  phone:", obj4.phone, "→ type:", typeof obj4.phone);

console.log("\n✓ Unquoted numbers are stored as numbers (not strings)");
console.log("✓ Unquoted booleans are stored as booleans");
console.log("✓ String values MUST be quoted\n");


// ============================================================================
// EXAMPLE 5: WHY TYPE MATTERS - ARITHMETIC DIFFERENCE
// ============================================================================
console.log("\n═══ EXAMPLE 5: WHY TYPE MATTERS - ARITHMETIC ═══");
console.log("Code comparison with price and quantity:\n");

const quotedValues = {
  "price": "100",
  "quantity": "5"
};

const unquotedValues = {
  price: 100,
  quantity: 5
};

console.log("❌ WITH QUOTED VALUES (strings):");
console.log('  const quotedValues = { "price": "100", "quantity": "5" }');
console.log('  price + quantity =', quotedValues.price + quotedValues.quantity);
console.log("  ↳ Result: '1005' (STRING CONCATENATION!)");
console.log("  ↳ Type:", typeof (quotedValues.price + quotedValues.quantity));

console.log("\n✓ WITH UNQUOTED VALUES (numbers):");
console.log('  const unquotedValues = { price: 100, quantity: 5 }');
console.log('  price + quantity =', unquotedValues.price + unquotedValues.quantity);
console.log("  ↳ Result: 105 (MATHEMATICAL ADDITION)");
console.log("  ↳ Type:", typeof (unquotedValues.price + unquotedValues.quantity));

console.log("\n💡 Total cost calculation:");
console.log("  With quoted: '" + quotedValues.price + "' + '" + quotedValues.quantity + "' = '" + (quotedValues.price + quotedValues.quantity) + "' ❌");
console.log("  With unquoted: " + unquotedValues.price + " + " + unquotedValues.quantity + " = " + (unquotedValues.price + unquotedValues.quantity) + " ✓");


// ============================================================================
// EXAMPLE 6: KEYS WITH SPACES (MUST USE QUOTES)
// ============================================================================
console.log("\n\n═══ EXAMPLE 6: KEYS WITH SPACES (MUST USE QUOTES) ═══");
console.log('Code: const obj6 = { "first name": "Shivam", "roll no": 101, "date of birth": "2004-05-15" }\n');

const obj6 = {
  "first name": "Shivam",        // Space in key - MUST quote
  "roll no": 101,                // Space in key - MUST quote
  "date of birth": "2004-05-15", // Space in key - MUST quote
  "college name": "BTECH",       // Space in key - MUST quote
  department: "CSE"              // No space - quotes optional
};

console.log("Output - obj6:", obj6);

console.log("\nAccessing with brackets (required for spaced keys):");
console.log('  obj6["first name"]:', obj6["first name"]);
console.log('  obj6["roll no"]:', obj6["roll no"]);
console.log('  obj6["date of birth"]:', obj6["date of birth"]);
console.log('  obj6.department:', obj6.department);

console.log("\n❌ This will NOT work:");
console.log('  obj6.first name  ← Error! JS reads this as obj6.first then name');
console.log('  obj6.roll no     ← Error! JS reads this as obj6.roll then no');

console.log("\n✓ Must use bracket notation for spaced keys:");
console.log('  obj6["first name"] ← Correct!');
console.log('  obj6["roll no"] ← Correct!\n');


// ============================================================================
// EXAMPLE 7: SPECIAL CHARACTERS IN KEYS (MUST USE QUOTES)
// ============================================================================
console.log("\n═══ EXAMPLE 7: SPECIAL CHARACTERS (MUST USE QUOTES) ═══\n");

const obj7 = {
  "user@email.com": "contact",    // @ and . symbols
  "price-$": 100,                 // hyphen and $
  "item[0]": "first",             // brackets
  "2024-01-26": "date",           // starts with number
  "user_profile": "data",         // underscore (OK without quotes)
  "$price": 50                     // $ at start (OK without quotes)
};

console.log("Code: const obj7 = { ");
console.log('  "user@email.com": "contact",');
console.log('  "price-$": 100,');
console.log('  "item[0]": "first",');
console.log('  "2024-01-26": "date",');
console.log('  "user_profile": "data",');
console.log('  "$price": 50');
console.log("}\n");

console.log("Output - obj7:", obj7);

console.log("\nAccessing special character keys:");
console.log('  obj7["user@email.com"]:', obj7["user@email.com"]);
console.log('  obj7["price-$"]:', obj7["price-$"]);
console.log('  obj7["item[0]"]:', obj7["item[0]"]);
console.log('  obj7["2024-01-26"]:', obj7["2024-01-26"]);
console.log('  obj7["user_profile"]:', obj7["user_profile"]);
console.log('  obj7.$price:', obj7.$price);

console.log("\n✓ Keys starting with numbers MUST be quoted");
console.log("✓ Keys with special characters (-, @, [, ], etc.) MUST be quoted");
console.log("✓ Keys with _ or $ at start can be unquoted\n");


// ============================================================================
// EXAMPLE 8: CONVERTING BETWEEN FORMATS
// ============================================================================
console.log("\n═══ EXAMPLE 8: CONVERTING BETWEEN FORMATS ═══\n");

// JavaScript object
const jsObject = {
  name: "Shivam Kumar",
  course: "BTECH",
  year: 2024
};

console.log("JavaScript Object Literal:");
console.log("  Code: { name: 'Shivam Kumar', course: 'BTECH', year: 2024 }");
console.log("  Output:", jsObject);

// Convert to JSON string
const jsonString = JSON.stringify(jsObject);
console.log("\nAfter JSON.stringify():");
console.log("  Result:", jsonString);
console.log("  Type:", typeof jsonString);
console.log("  Note: Keys are now quoted!");

// Parse back to object
const parsedObject = JSON.parse(jsonString);
console.log("\nAfter JSON.parse():");
console.log("  Result:", parsedObject);
console.log("  Are they equal? jsObject.name === parsedObject.name:", jsObject.name === parsedObject.name);

console.log("\n✓ JSON.stringify() adds quotes to keys");
console.log("✓ JSON.parse() converts back to JavaScript object");
console.log("✓ This is how data is sent over the internet (API calls, etc.)\n");


// ============================================================================
// EXAMPLE 9: REAL WORLD EXAMPLE - USER DATA
// ============================================================================
console.log("\n═══ EXAMPLE 9: REAL WORLD - USER DATA ═══\n");

// Server response (JSON string)
const serverResponse = '{"id":1,"username":"shivam_kumar","email":"shivam@example.com","isActive":true,"createdAt":"2024-01-26"}';
console.log("Server Response (JSON string):");
console.log("  " + serverResponse);

// Parse to JavaScript object
const userData = JSON.parse(serverResponse);
console.log("\nAfter parsing to object:");
console.log("  userData:", userData);

// Work with the data
console.log("\nAccessing properties:");
console.log("  userData.username:", userData.username);
console.log("  userData['email']:", userData["email"]);
console.log("  userData.isActive:", userData.isActive, "(type:", typeof userData.isActive + ")");
console.log("  userData.id:", userData.id, "(type:", typeof userData.id + ")");

// Modify and send back
userData.isActive = false;
userData.updatedAt = "2024-01-26";

console.log("\nModified object:");
console.log("  userData:", userData);

// Convert back to JSON for sending
const updatedJson = JSON.stringify(userData);
console.log("\nAfter JSON.stringify():");
console.log("  " + updatedJson);

console.log("\n✓ This is how API communication works!");
console.log("✓ Receive JSON → Parse to object → Modify → Stringify → Send back\n");