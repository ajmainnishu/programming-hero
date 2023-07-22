// Loop through an object using for in, for of, object entries



// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// const keys = Object.keys(bottle);
// for (const key of keys) {
//     console.log(key, bottle[key]);
// }


// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// for (const key in bottle) {
//     console.log(key, bottle[key]);
// }


const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const pair = Object.entries(bottle);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}