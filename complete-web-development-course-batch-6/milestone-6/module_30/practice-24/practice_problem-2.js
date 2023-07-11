// Write an arrow function where it will do the following: a) It will take an array where the array elements will be the name of your friends. b) Check if the length of each element is even, push elements with even length to a new array and return the result. Print the result.



const names = ['Niloy', 'Sujon', 'Smrity', 'Mary'];
const friendsName = names => {
    let evenNames = [];
    for (const name of names) {
        if ((name.length % 2) === 0) {
            evenNames.push(name);
        }
    }
    return evenNames;
};

console.log(friendsName(names));