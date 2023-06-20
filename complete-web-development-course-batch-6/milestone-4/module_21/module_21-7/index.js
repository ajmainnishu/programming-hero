// Who is the tallest? Find the max number in an array



// function maxInArray (numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);




function minInArray (numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const heights = [167, 190, 120, 165, 137];
const smallest = minInArray(heights);
console.log('smallest person is: ', smallest);