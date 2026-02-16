// console.log(3) // thread of execution starts here

// setTimeout(function(){
//     console.log("partyyyy");
// },0) // This will log "partyyyy" after 10 seconds

// //setimeout funtion is browser's feature
// //so it handover it to browser
// //browser starts tracking time

// console.log(4) //

// //explaination

// console.log(3) 

// setTimeout(function(){
//     console.log("partyyyy over");
//     setTimeout(function(){
//         console.log("partyyyy over again");
//     },9000)
// },0)

console.log('A');

setTimeout(()=> {
    console.log('B');

    setTimeout(() => {
        console.log('C');
    }, 0)

    console.log('D');
},0)

setTimeout(() => {
    console.log('E');
}, 0)

console.log('F');

//output will be A F B D E C