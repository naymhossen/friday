let lyrics = "Tumi bondhu kala pakhi Ami jeno ki Bosonto kaale tomay bolty parini"

let searchString = "amI"
let searchOneline = lyrics.toLowerCase().includes(searchString.toLowerCase())

console.log(searchOneline);

/* index of */

console.log(lyrics.indexOf('jeno'));

/*  */
console.log(lyrics.startsWith('Tumi'));

/*  */
console.log(lyrics.endsWith('parini'));