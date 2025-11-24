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



