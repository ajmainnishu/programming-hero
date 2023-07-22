// (advanced) Compare objects, referential integrity



// const first = {a: 5, b: 2};
// const second = {a: 5, b: 2};
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// if (firstString === secondString) {
//     console.log('same');
// }
// else {
//     console.log('different');
// }




// function compareObject (first, second) {
//     const firstKeys = Object.keys(first);
//     const secondKeys = Object.keys(second);
//     if (firstKeys.length === secondKeys.length) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const first = {a: 5, b: 2};
// const second = {a: 5, b: 2};
// const isSame = compareObject(first, second)
// console.log(isSame);




// function compareObject (first, second) {
//     const firstKeys = Object.keys(first);
//     const secondKeys = Object.keys(second);
//     if (firstKeys.length === secondKeys.length) {
//         for (const key of firstKeys) {
//             if (first[key] !== second[key]) {
//                 return false
//             }
//         }
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const first = {a: 5, b: 2, d: 5};
// const second = {a: 5, c: 5, b: 2};
// const isSame = compareObject(first, second)
// console.log(isSame);


function compareObject (first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false
            }
        }
        return true;
    }
    else {
        return false;
    }
}
const first = {a: 5, b: 2, d: 5};
const second = {a: 5, d: 5, b: 2};
const isSame = compareObject(first, second)
console.log(isSame);