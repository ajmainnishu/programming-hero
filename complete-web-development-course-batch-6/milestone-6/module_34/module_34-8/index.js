// Common API related mistakes and asynchronous Javascript



console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3);
setTimeout(() => {
    console.log(4);
}, 1);