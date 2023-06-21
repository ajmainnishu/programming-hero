// Get part of an array and insert elements using slice, splice



// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// const partial = friends.slice(2, 5);
// console.log(partial);
// console.log(friends);




// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// const partial = friends.splice(2, 3);
// console.log(partial);
// console.log(friends);


// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// const partial = friends.splice(2, 3, 1, 1, 1, 1, 1, 1, 1, 1);
// console.log(partial);
// console.log(friends);


const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 0, 1, 1);
console.log(partial);
console.log(friends);