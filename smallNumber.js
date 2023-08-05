function smallNumber (numbers){
    let small = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < small){
            small = element;
        }
    }
    return small;
}

let myNumbers = [10, 23, 34, 400, 50, 40, 3000, 4];
let smallest = smallNumber(myNumbers);

console.log(smallest);