// Keys, values, entries, delete, seal, freeze



// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// const keys = Object.keys(bottle);
// console.log(keys);




// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// const values = Object.values(bottle);
// console.log(values);




// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// const pair = Object.entries(bottle);
// console.log(pair);




// const twoDimenstionArray = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ] ];




// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// delete bottle.isCleaned;
// console.log(bottle);




// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// Object.seal(bottle);
// delete bottle.isCleaned;
// console.log(bottle);


// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// Object.seal(bottle);
// delete bottle.isCleaned;
// bottle.price = 100;
// console.log(bottle);


// const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// Object.seal(bottle);
// delete bottle.isCleaned;
// bottle.height = 12;
// console.log(bottle);




const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 100
bottle.height = 12;
console.log(bottle);