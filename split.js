let lyrics = "Tumi bondhu kala. pakhi Ami jeno ki Bosonto. kaale tomay bolty parini."


/* split style */
const word = lyrics .split(' ');
const sentence = lyrics .split('.');
const charec = lyrics .split('');

// console.log(word, sentence, charec);

/* slige style */

let slige = lyrics.slice(5, 11);
let slige1= lyrics.substring(5, 11);
console.log(slige, slige1);


const lines = [
    'Tumi bondhu kala',
    ' pakhi Ami jeno ki Bosonto',
    ' kaale tomay bolty parini',
    ''
  ]
  const newSong =lines.join('.')
  console.log(newSong);