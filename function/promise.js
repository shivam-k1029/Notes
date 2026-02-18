// resolve(value) - success, reject(error) - failure
// let newpromise = new Promise((resolve, reject) => {

//     let a = 5
//     let b = 8

//     if(a===b){
//         resolve("Promise are fulfilled"); // This will be the output if a and b are equal
//     }
//     else{        
//         reject("Promise are rejected"); // This will be the output if a and b are not equal
//     }
    
// })

 // console.log(newpromise)

 // .then(successCallback, errorCallback) - handles resolved/rejected promise, .catch(errorCallback) - handles errors only, .finally(callback) - runs regardless of success/failure

// newpromise
//           .then((data)=>{ // This will be executed if the promise is resolved successfully
//             console.log(data); 
//           })
//           .catch((error)=>{ // This will be executed if the promise is rejected
//             console.log(error);
//           })
//           .finally(()=>{ // This will be executed regardless of the promise being resolved or rejected
//             console.log("This will always run");

//           })

// let promise1 = new Promise((resolve, reject) => {
//     let s = Math.random()
//     if(s > 0.5) {
//         resolve("Promise 1 resolved");
//     }
//     else {
//         reject("Promise 1 rejected");
//     }
// })

// promise1
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Promise 1 completed");
//     })


