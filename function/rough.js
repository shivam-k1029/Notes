let numbers = [1, 2, 3, 4, 5];

// function myFilter(arr , callback){
//   let numArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       numArr.push(arr[i]);
//     }
//   }
//   return numArr;
// }

// function divByTwo(num){
//   return num % 2 === 0;
// }



// myFilter(numbers, divByTwo);

// let finalArr2 = myFilter(numbers, divByTwo);
// console.log(finalArr2);


// // divisible by 3

// function divByThree(num){
//   return num % 3 === 0;
// }

// myFilter (numbers, divByThree);

// let finalArr3 = myFilter(numbers, divByThree);
// console.log(finalArr3);


// // divisible by 5

// let finalArr5 = myFilter(numbers, (num) => num % 5 === 0);

// console.log(finalArr5);


function multiplier(num1){
  return function(num2){
    return num1 * num2;
  }
}

// multiplier(5); // returns a function
let finalVal = multiplier(5); // first call returns a function, second call invokes that function


console.log(finalVal(4)); // 20