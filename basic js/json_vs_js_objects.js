// ============================================================================
// JSON FORMAT vs JAVASCRIPT OBJECTS - COMPLETE COMPARISON
// ============================================================================

console.log("╔════════════════════════════════════════════════════════════════╗");
console.log("║         JSON FORMAT vs JAVASCRIPT OBJECTS                      ║");
console.log("╚════════════════════════════════════════════════════════════════╝\n");


// ============================================================================
// 1. SYNTAX DIFFERENCES
// ============================================================================
console.log("═══ 1. SYNTAX DIFFERENCES ═══\n");

// JSON Format (Text/String)
const jsonText = '{"name": "Shivam Kumar", "age": 20, "course": "BTECH"}';
console.log("JSON Format (string):");
console.log("  Code:", jsonText);
console.log("  Type:", typeof jsonText);
console.log("  Display:", jsonText);

// JavaScript Object
const jsObject = {name: "Shivam Kumar", age: 20, course: "BTECH"};
console.log("\nJavaScript Object:");
console.log("  Code:", "{ name: 'Shivam Kumar', age: 20, course: 'BTECH' }");
console.log("  Type:", typeof jsObject);
console.log("  Display:", jsObject);

console.log("\n✓ JSON is always a STRING");
console.log("✓ JavaScript Object is an OBJECT type");


// ============================================================================
// 2. KEY SYNTAX DIFFERENCES
// ============================================================================
console.log("\n\n═══ 2. KEY SYNTAX DIFFERENCES ═══\n");

console.log("JSON Keys:");
console.log('  ✓ MUST always be quoted strings');
console.log('  ✓ Example: { "name": "value" }');
console.log('  ✓ Can only use double quotes ("")');

console.log("\nJavaScript Object Keys:");
console.log('  ✓ Can be unquoted (if valid identifier)');
console.log('  ✓ Example: { name: "value" }');
console.log('  ✓ Can use single or double quotes');
console.log('  ✓ Can use backticks for template literals');

const jsonExample = '{"firstName": "John", "lastName": "Doe"}';
const jsExample = {firstName: "John", lastName: "Doe"};

console.log("\nComparison:");
console.log("  JSON:           " + jsonExample);
console.log("  JavaScript:    ", jsExample);


// ============================================================================
// 3. VALUE TYPE DIFFERENCES
// ============================================================================
console.log("\n\n═══ 3. VALUE TYPES ALLOWED ═══\n");

console.log("┌─ JSON Allowed Values ─────────────────────┐");
console.log("│  ✓ Strings (must be quoted)              │");
console.log("│  ✓ Numbers (no quotes)                   │");
console.log("│  ✓ Booleans: true, false (no quotes)    │");
console.log("│  ✓ null (no quotes)                      │");
console.log("│  ✓ Arrays [ ]                            │");
console.log("│  ✓ Objects { }                           │");
console.log("│  ✗ undefined (NOT allowed!)              │");
console.log("│  ✗ Functions (NOT allowed!)              │");
console.log("│  ✗ Dates (NOT allowed!)                  │");
console.log("│  ✗ undefined, NaN, Infinity              │");
console.log("└───────────────────────────────────────────┘");

console.log("\n┌─ JavaScript Object Allowed Values ────────┐");
console.log("│  ✓ Strings (quoted or template literal)  │");
console.log("│  ✓ Numbers (no quotes)                   │");
console.log("│  ✓ Booleans: true, false                 │");
console.log("│  ✓ null                                  │");
console.log("│  ✓ undefined                             │");
console.log("│  ✓ Arrays [ ]                            │");
console.log("│  ✓ Objects { }                           │");
console.log("│  ✓ Functions                             │");
console.log("│  ✓ Dates                                 │");
console.log("│  ✓ NaN, Infinity                         │");
console.log("└───────────────────────────────────────────┘");

// Examples
const validJson = '{"name": "John", "age": 30, "active": true, "skills": ["JS", "HTML"], "address": {"city": "NYC"}}';
console.log("\nValid JSON Example:");
console.log("  " + validJson);

const jsObjectWithMore = {
  name: "John",
  age: 30,
  active: true,
  skills: ["JS", "HTML"],
  address: {city: "NYC"},
  greet: function() { return "Hello"; },  // Function
  createdAt: new Date(),                   // Date object
  metadata: undefined,                     // undefined
  score: NaN                               // NaN
};
console.log("\nJavaScript Object Example (with extras):");
console.log("  ", jsObjectWithMore);


// ============================================================================
// 4. DETAILED COMPARISON TABLE
// ============================================================================
console.log("\n\n═══ 4. DETAILED COMPARISON ═══\n");

const comparisonData = [
  ["Feature", "JSON", "JavaScript Object"],
  ["─────────────────────", "─────────────────", "─────────────────"],
  ["Data Type", "String", "Object"],
  ["Keys Quoted", "MUST be quoted", "Optional (if valid ID)"],
  ["Quote Type", 'Double only ("")', 'Single, double, or backticks'],
  ["Strings Quoted", "MUST be quoted", "MUST be quoted"],
  ["Numbers", "✓ (no quotes)", "✓ (no quotes)"],
  ["Booleans", "true, false", "true, false"],
  ["null", "✓", "✓"],
  ["undefined", "✗ Not allowed", "✓ Allowed"],
  ["Functions", "✗ Not allowed", "✓ Allowed"],
  ["Dates", "✗ Not allowed", "✓ Allowed"],
  ["Comments", "✗ Not allowed", "✓ Allowed"],
  ["NaN/Infinity", "✗ Not allowed", "✓ Allowed"],
  ["File Extension", ".json", ".js"],
  ["Usage", "Data transfer", "Programming"],
  ["Parse Method", "JSON.parse()", "Just use it directly"],
  ["Convert to String", "Already string", "JSON.stringify()"]
];

comparisonData.forEach(row => {
  console.log(row.join(" | "));
});


// ============================================================================
// 5. PRACTICAL EXAMPLES - SIDE BY SIDE
// ============================================================================
console.log("\n\n═══ 5. PRACTICAL EXAMPLES - SIDE BY SIDE ═══\n");

// Example 1: Simple User Data
console.log("┌─ EXAMPLE 1: Simple User Data ─────────────────────────┐\n");

const userJson = '{"username": "shivam_kumar", "email": "shivam@example.com", "age": 20}';
const userJs = {username: "shivam_kumar", email: "shivam@example.com", age: 20};

console.log("JSON Format:");
console.log("  const userJson = ");
console.log("  '" + userJson + "';");
console.log("  Type: " + typeof userJson);

console.log("\nJavaScript Object:");
console.log("  const userJs = {");
console.log('    username: "shivam_kumar",');
console.log('    email: "shivam@example.com",');
console.log("    age: 20");
console.log("  };");
console.log("  Type: " + typeof userJs);

console.log("\nUsage:");
console.log("  JSON: Need to parse first");
console.log("    const obj = JSON.parse(userJson);");
console.log("    console.log(obj.username); // Shivam Kumar");
console.log("  JavaScript: Can use directly");
console.log("    console.log(userJs.username); // Shivam Kumar");

console.log("\n└────────────────────────────────────────────────────┘\n");


// Example 2: Nested Data with Arrays
console.log("┌─ EXAMPLE 2: Nested Data with Arrays ────────────────┐\n");

const studentJson = '{"name":"Shivam","courses":["JS","HTML","CSS"],"gpa":3.8}';
const studentJs = {name: "Shivam", courses: ["JS", "HTML", "CSS"], gpa: 3.8};

console.log("JSON Format:");
console.log("  " + studentJson);

console.log("\nJavaScript Object:");
console.log("  ", studentJs);

console.log("\nAccessing nested data:");
console.log("  JSON approach:");
console.log("    const parsed = JSON.parse(studentJson);");
console.log("    parsed.courses[0] → " + JSON.parse(studentJson).courses[0]);
console.log("  JavaScript approach:");
console.log("    studentJs.courses[0] → " + studentJs.courses[0]);

console.log("\n└────────────────────────────────────────────────────┘\n");


// Example 3: Data Validation
console.log("┌─ EXAMPLE 3: Data Validation ───────────────────────────┐\n");

const invalidJson1 = '{name: "John", age: 30}';  // Unquoted keys
const invalidJson2 = '{"name": "John", "greet": function() {}}';  // Function
const invalidJson3 = '{"name": "John", "createdAt": undefined}';  // undefined

console.log("Invalid JSON Examples:\n");

console.log("❌ Unquoted keys:");
console.log("  Code: " + invalidJson1);
console.log("  Try: JSON.parse(invalidJson1);");
console.log("  Error: SyntaxError: Unexpected token n in JSON at position 1");

console.log("\n❌ Function in value:");
console.log('  Code: {"name": "John", "greet": function() {}}');
console.log("  Error: Functions not allowed in JSON");

console.log("\n❌ undefined in value:");
console.log('  Code: {"name": "John", "createdAt": undefined}');
console.log("  Error: undefined not allowed in JSON");

console.log("\n✓ Valid JSON Example:");
const validJsonExample = '{"name": "John", "age": 30, "active": true}';
console.log("  Code: " + validJsonExample);
console.log("  Result: Valid! Can parse successfully");

console.log("\n✓ Valid JavaScript Examples:");
console.log('  {name: "John", greet: function() {}, date: new Date()}');
console.log("  Result: Valid! All features supported");

console.log("\n└──────────────────────────────────────────────────┘\n");


// ============================================================================
// 6. CONVERSION EXAMPLES
// ============================================================================
console.log("\n═══ 6. CONVERSION EXAMPLES ═══\n");

// JavaScript Object to JSON
console.log("A) JAVASCRIPT OBJECT → JSON STRING\n");

const person = {
  firstName: "Shivam",
  lastName: "Kumar",
  age: 20,
  course: "BTECH",
  courses: ["JavaScript", "HTML", "CSS"],
  isStudent: true,
  grades: {
    math: 95,
    science: 90
  }
};

console.log("Starting JavaScript Object:");
console.log("  ", person);

const personJson = JSON.stringify(person);
console.log("\nAfter JSON.stringify(person):");
console.log("  " + personJson);

console.log("\nNotice the changes:");
console.log("  ✓ Keys are now quoted");
console.log("  ✓ All strings are quoted");
console.log("  ✓ Data is now a STRING");

console.log("\n" + "─".repeat(60) + "\n");

// JSON to JavaScript Object
console.log("B) JSON STRING → JAVASCRIPT OBJECT\n");

const apiResponse = '{"id": 1, "username": "shivam_kumar", "email": "shivam@example.com", "followers": 150, "verified": true}';

console.log("Starting JSON String (from API):");
console.log("  " + apiResponse);

const parsedUser = JSON.parse(apiResponse);
console.log("\nAfter JSON.parse(apiResponse):");
console.log("  ", parsedUser);

console.log("\nNotice the changes:");
console.log("  ✓ Converted from STRING to OBJECT");
console.log("  ✓ Can access properties directly");
console.log("  ✓ Type of result:", typeof parsedUser);

console.log("\nNow we can use it:");
console.log("  parsedUser.username → " + parsedUser.username);
console.log("  parsedUser.followers → " + parsedUser.followers);
console.log("  parsedUser.verified → " + parsedUser.verified);

console.log("\n" + "─".repeat(60) + "\n");

// Formatting JSON with indentation
console.log("C) PRETTY PRINT JSON\n");

const user2 = {name: "Alice", age: 25, skills: ["React", "Node.js"]};

console.log("Compact JSON:");
console.log("  " + JSON.stringify(user2));

console.log("\nFormatted JSON (with indentation):");
console.log(JSON.stringify(user2, null, 2));

console.log("\nFormatted with 4 spaces:");
console.log(JSON.stringify(user2, null, 4));


// ============================================================================
// 7. REAL WORLD USE CASES
// ============================================================================
console.log("\n\n═══ 7. REAL WORLD USE CASES ═══\n");

console.log("┌─ USE CASE 1: API Request/Response ──────────────────┐\n");
console.log("📤 SENDING DATA TO SERVER (Object → JSON):");

const formData = {
  username: "shivam",
  email: "shivam@example.com",
  password: "secure123",
  agreeToTerms: true
};

console.log("  JavaScript Object:", formData);
const jsonToSend = JSON.stringify(formData);
console.log("  JSON String sent:", jsonToSend);

console.log("\n📥 RECEIVING DATA FROM SERVER (JSON → Object):");
const serverResponse = '{"success": true, "userId": 123, "token": "abc123xyz", "message": "Login successful"}';
console.log("  JSON String received:", serverResponse);

const response = JSON.parse(serverResponse);
console.log("  JavaScript Object:", response);
console.log("  Access: response.userId →", response.userId);

console.log("\n└─────────────────────────────────────────────────┘\n");


console.log("┌─ USE CASE 2: Local Storage ──────────────────────────┐\n");
console.log("💾 STORING IN LOCAL STORAGE (must be string):");

const userData = {name: "Shivam", preferences: {theme: "dark", notifications: true}};
console.log("  JavaScript Object:", userData);

const jsonForStorage = JSON.stringify(userData);
console.log("  Convert to JSON:", jsonForStorage);
console.log("  localStorage.setItem('user', jsonForStorage);");

console.log("\n🔍 RETRIEVING FROM LOCAL STORAGE (string → object):");
console.log("  const stored = localStorage.getItem('user');");
console.log("  Result (string):", jsonForStorage);

const retrieved = JSON.parse(jsonForStorage);
console.log("  Parse back:", retrieved);
console.log("  Access: retrieved.preferences.theme →", retrieved.preferences.theme);

console.log("\n└─────────────────────────────────────────────────┘\n");


console.log("┌─ USE CASE 3: Configuration Files ──────────────────┐\n");
console.log("⚙️ package.json (JSON format):");
const packageJson = `{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A JavaScript application",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
}`;
console.log(packageJson);

console.log("\n✓ Why JSON? All programming languages can read it!");
console.log("✓ Standardized format for configuration");
console.log("✓ Easy to parse and modify");

console.log("\n└─────────────────────────────────────────────────┘\n");


// ============================================================================
// 8. COMMON MISTAKES
// ============================================================================
console.log("\n═══ 8. COMMON MISTAKES ═══\n");

console.log("❌ MISTAKE 1: Trying to access JSON directly");
console.log("  const json = '{\"name\": \"John\", \"age\": 30}';");
console.log("  console.log(json.name); // undefined (it's a string!)");
const json1 = '{"name": "John", "age": 30}';
console.log("  Actual result:", json1.name);

console.log("\n  ✓ CORRECT: Parse first");
console.log("  const obj = JSON.parse(json);");
console.log("  console.log(obj.name); // John");
const obj1 = JSON.parse(json1);
console.log("  Actual result:", obj1.name);

console.log("\n" + "─".repeat(60));

console.log("\n❌ MISTAKE 2: Invalid JSON with unquoted keys");
console.log("  const json = '{name: \"John\", age: 30}';");
console.log("  JSON.parse(json); // Error!");

console.log("\n  ✓ CORRECT: All keys must be quoted");
console.log("  const json = '{\"name\": \"John\", \"age\": 30}';");
console.log("  JSON.parse(json); // Works!");
const obj2 = JSON.parse('{"name": "John", "age": 30}');
console.log("  Result:", obj2);

console.log("\n" + "─".repeat(60));

console.log("\n❌ MISTAKE 3: Single quotes in JSON");
console.log("  const json = \"{'name': 'John'}\";");
console.log("  JSON.parse(json); // Error! JSON requires double quotes");

console.log("\n  ✓ CORRECT: Use double quotes");
console.log("  const json = '{\"name\": \"John\"}';");
console.log("  JSON.parse(json); // Works!");
const obj3 = JSON.parse('{"name": "John"}');
console.log("  Result:", obj3);


// ============================================================================
// 9. QUICK REFERENCE
// ============================================================================
console.log("\n\n═══ 9. QUICK REFERENCE ═══\n");

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    QUICK COMPARISON                           ║
╚════════════════════════════════════════════════════════════════╝

JSON (JavaScript Object Notation)           JavaScript Object
─────────────────────────────────          ──────────────────
📝 A TEXT format for data exchange          📦 Programming data type

For example:                                For example:
'{"name":"John","age":30}'                  {name: "John", age: 30}

✓ What it IS:                               ✓ What it IS:
  • String type (text)                        • Object type
  • Language independent                      • JavaScript specific
  • Standardized format                       • Flexible syntax
  • Used for: APIs, storage, config           • Used for: programming

✓ Rules:                                    ✓ Rules:
  • Keys MUST be quoted                       • Keys CAN be unquoted
  • Strings MUST be quoted                    • Strings MUST be quoted
  • Use double quotes only                    • Can use any quotes
  • No functions allowed                      • Functions allowed
  • No undefined allowed                      • undefined allowed
  • No comments allowed                       • Comments allowed

✓ When to USE:                              ✓ When to USE:
  • Transmitting data over network            • In JavaScript code
  • Storing config files                      • Processing data
  • Saving to database                        • Creating structures
  • Any data interchange                      • Local calculations

✓ CONVERSION:
  JavaScript Object → JSON:    JSON.stringify(obj)
  JSON → JavaScript Object:    JSON.parse(jsonString)

╔════════════════════════════════════════════════════════════════╗
║  Remember: JSON is just a STRING representation of data!      ║
║  It needs to be parsed to become a JavaScript Object.         ║
╚════════════════════════════════════════════════════════════════╝
`);

console.log("\n✅ Now you understand JSON vs JavaScript Objects!");


// ============================================================================
// 10. LOOPS WITH JSON vs JAVASCRIPT OBJECTS
// ============================================================================

console.log("\n\n╔════════════════════════════════════════════════════════════════╗");
console.log("║              LOOPS WITH JSON vs OBJECTS                       ║");
console.log("╚════════════════════════════════════════════════════════════════╝\n");


// ============================================================================
// PART A: LOOPING THROUGH JAVASCRIPT OBJECTS
// ============================================================================
console.log("═══ PART A: LOOPING THROUGH JAVASCRIPT OBJECTS ═══\n");

const student = {
  name: "Shivam Kumar",
  rollNo: 101,
  course: "BTECH",
  semester: 4,
  gpa: 3.8
};

console.log("Object to loop:", student);

// Method 1: for...in loop
console.log("\n┌─ METHOD 1: for...in Loop ─────────────────────┐");
console.log('Code: for (let key in student) { console.log(key, student[key]); }');
console.log("\nOutput:");
for (let key in student) {
  console.log(`  ${key}: ${student[key]}`);
}
console.log("└───────────────────────────────────────────────┘");

// Method 2: Object.keys() with forEach
console.log("\n┌─ METHOD 2: Object.keys() with forEach ────────┐");
console.log('Code: Object.keys(student).forEach(key => { console.log(key, student[key]); });');
console.log("\nOutput:");
Object.keys(student).forEach(key => {
  console.log(`  ${key}: ${student[key]}`);
});
console.log("└───────────────────────────────────────────────┘");

// Method 3: Object.entries() with for...of
console.log("\n┌─ METHOD 3: Object.entries() with for...of ────┐");
console.log('Code: for (let [key, value] of Object.entries(student)) { console.log(key, value); }');
console.log("\nOutput:");
for (let [key, value] of Object.entries(student)) {
  console.log(`  ${key}: ${value}`);
}
console.log("└───────────────────────────────────────────────┘");

// Method 4: Object.values()
console.log("\n┌─ METHOD 4: Object.values() - Get only values ─┐");
console.log('Code: Object.values(student).forEach(value => { console.log(value); });');
console.log("\nOutput:");
Object.values(student).forEach(value => {
  console.log(`  ${value}`);
});
console.log("└───────────────────────────────────────────────┘");

// Method 5: while loop with Object.entries()
console.log("\n┌─ METHOD 5: while loop ─────────────────────────┐");
console.log('Code: const entries = Object.entries(student);');
console.log("      let i = 0;");
console.log("      while (i < entries.length) { ... }");
console.log("\nOutput:");
const entries = Object.entries(student);
let i = 0;
while (i < entries.length) {
  console.log(`  ${entries[i][0]}: ${entries[i][1]}`);
  i++;
}
console.log("└───────────────────────────────────────────────┘");


// ============================================================================
// PART B: LOOPING THROUGH JSON (After Parsing)
// ============================================================================
console.log("\n\n═══ PART B: LOOPING THROUGH JSON (After Parsing) ═══\n");

const studentJson = '{"name":"Shivam Kumar","rollNo":101,"course":"BTECH","semester":4,"gpa":3.8}';

console.log("JSON String:", studentJson);
console.log("\n💡 You CANNOT loop through JSON directly!");
console.log("   You MUST parse it first to become an object.\n");

// Parse first
const parsedStudent = JSON.parse(studentJson);
console.log("After JSON.parse():", parsedStudent);

// Now loop through it (same as looping through objects)
console.log("\n┌─ METHOD 1: Parse then for...in loop ──────────┐");
console.log('Code: const obj = JSON.parse(studentJson);');
console.log('      for (let key in obj) { console.log(key, obj[key]); }');
console.log("\nOutput:");
for (let key in parsedStudent) {
  console.log(`  ${key}: ${parsedStudent[key]}`);
}
console.log("└───────────────────────────────────────────────┘");

// Parse and use Object.entries()
console.log("\n┌─ METHOD 2: Parse then Object.entries() ───────┐");
console.log('Code: const obj = JSON.parse(studentJson);');
console.log('      for (let [k, v] of Object.entries(obj)) { console.log(k, v); }');
console.log("\nOutput:");
for (let [k, v] of Object.entries(parsedStudent)) {
  console.log(`  ${k}: ${v}`);
}
console.log("└───────────────────────────────────────────────┘");


// ============================================================================
// PART C: LOOPING THROUGH ARRAYS IN OBJECTS
// ============================================================================
console.log("\n\n═══ PART C: LOOPING THROUGH ARRAYS IN OBJECTS ═══\n");

const student2 = {
  name: "Alice",
  courses: ["JavaScript", "HTML", "CSS", "React"],
  grades: [95, 88, 92, 90]
};

console.log("Object with arrays:", student2);

// Loop through array property
console.log("\n┌─ METHOD 1: for...of loop on array property ────┐");
console.log('Code: for (let course of student2.courses) { console.log(course); }');
console.log("\nOutput:");
for (let course of student2.courses) {
  console.log(`  - ${course}`);
}
console.log("└───────────────────────────────────────────────┘");

// forEach on array property
console.log("\n┌─ METHOD 2: forEach on array property ──────────┐");
console.log('Code: student2.courses.forEach(course => { console.log(course); });');
console.log("\nOutput:");
student2.courses.forEach((course, index) => {
  console.log(`  [${index}] ${course}`);
});
console.log("└───────────────────────────────────────────────┘");

// Loop through object first, then arrays
console.log("\n┌─ METHOD 3: Loop object, then check for arrays ─┐");
console.log('Code: for (let key in student2) { ');
console.log('        if (Array.isArray(student2[key])) {');
console.log('          student2[key].forEach(item => console.log(item));');
console.log('        }');
console.log('      }');
console.log("\nOutput:");
for (let key in student2) {
  if (Array.isArray(student2[key])) {
    console.log(`  ${key}:`);
    student2[key].forEach(item => {
      console.log(`    - ${item}`);
    });
  }
}
console.log("└───────────────────────────────────────────────┘");


// ============================================================================
// PART D: LOOPING THROUGH NESTED OBJECTS
// ============================================================================
console.log("\n\n═══ PART D: LOOPING THROUGH NESTED OBJECTS ═══\n");

const user = {
  name: "Shivam",
  contact: {
    email: "shivam@example.com",
    phone: "9876543210",
    address: {
      city: "Indore",
      state: "MP",
      zip: "452001"
    }
  },
  skills: ["JavaScript", "HTML", "CSS"]
};

console.log("Nested object:", JSON.stringify(user, null, 2));

// Shallow loop (only first level)
console.log("\n┌─ METHOD 1: Shallow loop (first level only) ────┐");
console.log('Code: for (let key in user) { console.log(key, user[key]); }');
console.log("\nOutput:");
for (let key in user) {
  console.log(`  ${key}: ${typeof user[key] === 'object' ? '[Object]' : user[key]}`);
}
console.log("└───────────────────────────────────────────────┘");

// Deep/Recursive loop
console.log("\n┌─ METHOD 2: Deep recursive loop ────────────────┐");
console.log('Code: function loopObject(obj, indent = 0) {');
console.log('        for (let key in obj) {');
console.log('          const value = obj[key];');
console.log('          console.log(" ".repeat(indent) + key + ": " + value);');
console.log('          if (typeof value === "object" && value !== null) {');
console.log('            loopObject(value, indent + 2);');
console.log('          }');
console.log('        }');
console.log('      }');
console.log("\nOutput:");

function loopObject(obj, indent = 0) {
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null) {
      console.log(' '.repeat(indent) + '📁 ' + key + ':');
      loopObject(value, indent + 2);
    } else if (Array.isArray(value)) {
      console.log(' '.repeat(indent) + '📋 ' + key + ': [' + value.join(', ') + ']');
    } else {
      console.log(' '.repeat(indent) + '▪ ' + key + ': ' + value);
    }
  }
}

loopObject(user);
console.log("└───────────────────────────────────────────────┘");


// ============================================================================
// PART E: JSON ARRAY LOOPING
// ============================================================================
console.log("\n\n═══ PART E: JSON ARRAY LOOPING ═══\n");

const studentsJson = '[{"name":"Alice","age":20},{"name":"Bob","age":21},{"name":"Charlie","age":19}]';

console.log("JSON Array String:");
console.log("  " + studentsJson);

// Parse to array
const studentsArray = JSON.parse(studentsJson);
console.log("\nAfter JSON.parse():");
console.log("  ", studentsArray);

// Loop through array of objects
console.log("\n┌─ METHOD 1: forEach loop ───────────────────────┐");
console.log('Code: const arr = JSON.parse(studentsJson);');
console.log('      arr.forEach(student => {');
console.log('        console.log(student.name, student.age);');
console.log('      });');
console.log("\nOutput:");
studentsArray.forEach((student, index) => {
  console.log(`  Student ${index + 1}: ${student.name}, Age: ${student.age}`);
});
console.log("└───────────────────────────────────────────────┘");

// for...of loop
console.log("\n┌─ METHOD 2: for...of loop ──────────────────────┐");
console.log('Code: for (let student of studentsArray) {');
console.log('        console.log(student.name, student.age);');
console.log('      }');
console.log("\nOutput:");
for (let student of studentsArray) {
  console.log(`  ${student.name} - Age: ${student.age}`);
}
console.log("└───────────────────────────────────────────────┘");

// for loop with index
console.log("\n┌─ METHOD 3: for loop with index ───────────────┐");
console.log('Code: for (let i = 0; i < studentsArray.length; i++) {');
console.log('        const student = studentsArray[i];');
console.log('        console.log(i, student.name, student.age);');
console.log('      }');
console.log("\nOutput:");
for (let i = 0; i < studentsArray.length; i++) {
  const student = studentsArray[i];
  console.log(`  [${i}] ${student.name} - Age: ${student.age}`);
}
console.log("└───────────────────────────────────────────────┘");


// ============================================================================
// PART F: FILTERING AND TRANSFORMING WHILE LOOPING
// ============================================================================
console.log("\n\n═══ PART F: FILTERING AND TRANSFORMING ═══\n");

const students3 = [
  {name: "Shivam", gpa: 3.8},
  {name: "Alice", gpa: 3.5},
  {name: "Bob", gpa: 2.9},
  {name: "Charlie", gpa: 3.9}
];

// Filter while looping
console.log("┌─ FILTER: Students with GPA > 3.5 ────────────┐");
console.log('Code: students.filter(s => s.gpa > 3.5).forEach(s => {');
console.log('        console.log(s.name, s.gpa);');
console.log('      });');
console.log("\nOutput:");
students3.filter(s => s.gpa > 3.5).forEach(s => {
  console.log(`  ✓ ${s.name}: ${s.gpa}`);
});
console.log("└───────────────────────────────────────────────┘");

// Map/Transform while looping
console.log("\n┌─ TRANSFORM: Extract names ────────────────────┐");
console.log('Code: students.map(s => s.name).forEach(name => {');
console.log('        console.log(name);');
console.log('      });');
console.log("\nOutput:");
students3.map(s => s.name).forEach((name, index) => {
  console.log(`  ${index + 1}. ${name}`);
});
console.log("└───────────────────────────────────────────────┘");

// Calculate while looping
console.log("\n┌─ CALCULATE: Sum of all GPAs ──────────────────┐");
console.log('Code: let total = 0;');
console.log('      students.forEach(s => { total += s.gpa; });');
console.log('      console.log("Average GPA:", total / students.length);');
console.log("\nOutput:");
let totalGpa = 0;
students3.forEach(s => { totalGpa += s.gpa; });
console.log(`  Average GPA: ${(totalGpa / students3.length).toFixed(2)}`);
console.log("└───────────────────────────────────────────────┘");


// ============================================================================
// SUMMARY TABLE: WHICH LOOP TO USE?
// ============================================================================
console.log("\n\n═══ SUMMARY: WHICH LOOP TO USE? ═══\n");

console.log(`
┌──────────────────┬───────────────────────┬──────────────────────┐
│ Data Type        │ Loop Method           │ Best For             │
├──────────────────┼───────────────────────┼──────────────────────┤
│ Object           │ for...in              │ Getting keys         │
│ Object           │ Object.keys()         │ Getting keys         │
│ Object           │ Object.values()       │ Getting values only  │
│ Object           │ Object.entries()      │ Getting key+value    │
│                  │                       │                      │
│ JSON String      │ JSON.parse() first    │ Always parse first!  │
│                  │ then use above        │                      │
│                  │                       │                      │
│ Array            │ forEach()             │ Simple iteration     │
│ Array            │ for...of              │ Simple iteration     │
│ Array            │ for loop              │ Need index access    │
│ Array            │ map()                 │ Transform elements   │
│ Array            │ filter()              │ Select elements      │
│                  │                       │                      │
│ Nested Object    │ Recursive function    │ Deep exploration     │
│ Array of Objects │ forEach() + for...in  │ Iterate + access     │
└──────────────────┴───────────────────────┴──────────────────────┘

KEY REMINDERS:
✓ JSON must be parsed BEFORE looping
✓ Objects use for...in or Object.entries()
✓ Arrays use for...of or forEach()
✓ Use filter(), map(), reduce() for transformations
✓ For nested data, use recursion
`);
