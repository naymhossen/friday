function reversedString (text){
    let reveresd = '';
    for (let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reveresd= reveresd+element;
        console.log(element, reveresd);
    }
     return reveresd;
}

const myString = 'The marvel of creations';
let reveresd = reversedString(myString);
console.log(reveresd);
