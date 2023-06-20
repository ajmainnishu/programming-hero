// How to split, slice, substr, substring, concat, join



// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomai bolte pari ni. kala kala sada sada';
// const parts = lyrics.split(' ');
// console.log(parts);




// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// const sentences = lyrics.split('.');
// console.log(sentences);




// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// const chars = lyrics.split('');
// console.log(chars);




// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// const partial = lyrics.slice(5, 8);
// console.log(partial);


// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
// const partial = lyrics.substring(5, 8);
// console.log(partial);




const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'kala kala sada sada'
  ];
const newSong = lines.join(':');
console.log(newSong);