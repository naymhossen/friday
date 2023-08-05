function reveresdWord (string){
    let words = string.split(' ');
    let result = [];
    
    for(let i = words.length -1; i>=1, i--){
        let element = words[i];
        result .push(element);
    }
    console.log(result);
    // let reveresd = result.join(' ');
    // return reveresd;
}


let myString = 'i am a bad boy'
reveresdWord(myString);