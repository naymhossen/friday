const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase())
console.log(userInput.toLocaleUpperCase());

if(userName.toLowerCase() === userInput.toLowerCase() ){
    console.log('valid user');
}
else{
    console.log('Invalid User');
}


let firstFriend = 'humauN';
let secondFriend = 'huMaUn'

console.log(firstFriend.toLowerCase(), secondFriend.toLowerCase());

if(firstFriend.toLowerCase() === secondFriend.toLowerCase()){
    console.log('Is valid name');
}
else{
    console.log('Is invalide name');
}