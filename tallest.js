function lowestNumber (numbers){
    let lowest = numbers[0];
    for(let i=0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > lowest){
           lowest = element;
        }
    }
    return lowest;
}

let myNumbers = [123, 24, 500, 333, 240, 800, 40, 200];
let myLowestNumber = lowestNumber(myNumbers);
console.log(myLowestNumber);
