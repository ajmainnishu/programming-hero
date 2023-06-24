// Write a function. The name of this function will be bestFriend then the function will take an array as input parameter. That array will contain the names of all your friends. Now your task is to return the name of the friend whose name is the largest. In this case you should return the name ie the friend's name (string).



function bestFriend (names) {
    let name = names[0];
    for (let i of names) {
        if (i.length > name.length) {
            name = i;
        }
    }
    return name;
}

const namesArr = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];
const largestName = bestFriend(namesArr);
console.log(largestName);