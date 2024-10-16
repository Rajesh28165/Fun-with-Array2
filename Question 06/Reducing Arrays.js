function sumOfNumbers(input){
    // Split the input string into an array of numbers
    let Array=input.split(';').map(Number);

    // Check for edge cases: empty input or invalid numbers
    if (Array.length===0 || Array.some(isNaN)) {
        return "Invalid Input"
    }
    let total = Array.reduce((x,y)=>x+y,0);
    return total;
}

input = "5;10;15";
console.log(sumOfNumbers(input));