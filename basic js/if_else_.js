// if (condition) {
//     code to be executed if condition is true}
// else {
//    code to be executed if condition is false}


let a = 18;
if(a>18){
    console.log("You can drive");
}

else if(a==18){
    console.log("You are eligible to drive");
}

else{
    console.log("You cannot drive");
}


// Ternary Operator (shorthand if...else)
let age = 17;
let canDrive = (age >= 18) ? "Yes, you can drive." : "No, you cannot drive.";
console.log(canDrive); // Output: "Yes, you can drive."


// switch...case statement
let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}   

console.log(dayName);

// switch means to check the value of a variable against multiple cases and execute the corresponding code block when a match is found.1