// // 
// for(i=0; i<10; i++){
//     console.log(i)
        // if(i==5){
        //     break; // terminates the loop when i is 5
        // }
// }


// // while loop

// let k = 0 

// while(k<4){
//     console.log(k) // condition
//     k++;
// }


// // do...while Loop

// let num = 0

// do{
//     console.log(num) // at least one time will be executed
//     num++;
// }while(num<5) // condition

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for (key in obj){
    console.log(key + ": " + obj[key])
}   