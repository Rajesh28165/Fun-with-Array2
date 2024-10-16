function filterNumbers(input){
    // Split the input string into an array of numbers
    let Array=input.split(',').map(Number);

    // Check for edge cases: empty input or invalid numbers
    if (Array.length===0 || Array.some(isNaN)) {
        return "Invalid Input"
    }
    let evenNumber = Array.filter(num=>num%2==0);
    return evenNumber;
}

input = "1,2,3,4,5";
console.log(filterNumbers(input));