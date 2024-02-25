// Write a function in JavaScript that takes a positive integer n as input and returns its factorial.
// The factorial of a number n is the product of all integers from 1 to n.
// const factorialOf5 = calculateFactorial(5); console.log(factorialOf5);
// This should print: 120 (because 5! = 5 * 4 * 3 * 2 * 1 = 120)

let factorielle = Number(prompt("Enter a number : "));

function factorielle(){
    if(factorielle > 0){
            return factorielle= factorielle(factorielle-1);
    }    
}
