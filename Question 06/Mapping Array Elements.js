function doubleNumbers(input){
    // Split the input string into an array of numbers
    let Array=input.split(' ').map(Number);

    // Check for edge cases: empty input or invalid numbers
    if (Array.length===0 || Array.some(isNaN)) {
        return "Invalid Input"
    }
    let doubled = Array.map(num=>num*2);
    return doubled;
}

Input = "1 2 3 4";
console.log(doubleNumbers(Input));