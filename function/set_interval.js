let count = 0;

const id= setInterval(function() {
    console.log("Hello, World!");
    count++;
    if(count === 5) {
        clearInterval(id); // This will stop the interval after it has run 5 times
        console.log("Interval stopped after 5 executions.");
    }   
}, 1000); // This will log "Hello, World!" every 1 second (1000 milliseconds)

// To stop the interval, use clearInterval(id) when needed
// clearInterval(id);

// setTimeout(function() {
//     clearInterval(id); // This will stop the interval after 5 seconds
//     console.log("Interval stopped.");
// }, 5000);


