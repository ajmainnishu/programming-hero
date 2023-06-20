// Reverse a string and Reverse words in a sentence



// function reverseString (text) {
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         console.log(element);
//     }
// }
// const myString = 'I am a good boy';
// const reversed = reverseString(myString);




// function reverseString (text) {
//     for (let i = text.length - 1; i >= 0; i--) {
//         const element = text[i];
//         console.log(element);
//     }
// }
// const myString = 'I am a good boy';
// const reversed = reverseString(myString);


// function reverseString (text) {
//     let reversed = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         const element = text[i];
//         reversed = reversed + element;
//     }
//     return reversed;
// }
// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversed output: ', reversed);




// function reverseWords (str) {
//     const words = str.split(' ');
//     const result = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         const element = words[i]
//         result.push(element);
//     }
//     return result;
// }
// const myString = 'I am a good boy';
// console.log(reverseWords(myString));




function reverseWords (str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i]
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'I am a good boy';
console.log(reverseWords(myString));