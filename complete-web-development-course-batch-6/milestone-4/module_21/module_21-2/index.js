// Apply Search includes, indexOf, startswith, endswith



// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// const searchString = 'Pakhi'
// const doesExist = lyrics.includes(searchString);
// console.log(doesExist); 


// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// const searchString = 'pakhi';
// const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
// console.log(doesExist); 


// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// const searchString = 'pAkhi';
// const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString.toLowerCase());
// console.log(doesExist);


// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// const searchString = 'PAKHI';
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);




// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// console.log(lyrics.indexOf('kala'));




// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// if (lyrics.indexOf('sada') !== -1) {
//     console.log('exists inside the string');
// }
// else {
//     console.log('cannot find it');
// }




// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// console.log(lyrics.startsWith('Tumi'));




const fileName = 'mybiodata.pdf'
console.log(fileName.endsWith('pdf'));