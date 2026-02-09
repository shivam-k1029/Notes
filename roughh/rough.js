// how to iterate over object properties

let obj = {
    name: "Shivam",
    age: 19,
    college: 'NST'
}

for(let key of Object.keys(obj)){
    console.log(`${key}: ${obj[key]}`);
}

// Create a function countValues that takes multiple objects as arguments and returns an object where keys represent the unique values from all objects and values represent their occurrences.
// Input
// A single line containing multiple objects separated by a space.
// Output
// An object where each key represents a unique value, and its corresponding value is the count of occurrences.
// Example
// Input:
// { "a": 1, "b": 2 } { "x": 1, "y": 3 }

// Output:
// { '1': 2, '2': 1, '3': 1 }

function countValues(...objs) {     
    const valueCount = {};

    for (const obj of objs) {
        for (const key in obj) {
            const value = obj[key];
            if (valueCount[value]) {
                valueCount[value]++;
            } else {
                valueCount[value] = 1;
            }
        }
    }

    return valueCount;
}

