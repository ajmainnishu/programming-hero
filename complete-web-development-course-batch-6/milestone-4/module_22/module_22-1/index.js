// Module Introduction and isArray, includes, concat



// const country = 'Bangladesh';
// const age = 52;
// const isIndependent = true;
// const student = {id: 121, class: 11, name: 'Agun'};
// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// function add (num1 , num2) {
//     return num1 + num2;
// }
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);
// console.log(typeof friends);
// console.log(typeof add);




// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// console.log(Array.isArray(friends));




// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// console.log(friends.includes(21));
// console.log(friends.includes(19));


// const friends = [13, 14, 11, 17, 21, 16, 15, 20];
// console.log(friends.indexOf(21));
// console.log(friends.indexOf(19));




const friends = [13, 14, 11, 17, 21, 16, 15, 20];
const newFriends = [12, 13, 11, 13];
const allFriends = friends.concat(newFriends);
console.log(allFriends);