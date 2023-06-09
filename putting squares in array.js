const array = [1,2];
function sqaureOfNumbers(array){
    let squaredNumbers = [];
    for(let number of array){
        squaredNumbers.push(number**2)
    }
    return squaredNumbers;
}
console.log(sqaureOfNumbers(array));