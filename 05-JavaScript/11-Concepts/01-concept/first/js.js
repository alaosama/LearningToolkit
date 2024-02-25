// Write a program that accepts two numbers, then compares their values and prints an appropriate message in all cases.

// Entrance
// Enter first number: 5
// Enter second number: 3
// Expected output
// 5 is greater than 3

let first_nuber = 5;
let second_number = 3;

function solution (first_number, second_number){
    if(first_number == second_number){
        console.log("Equalité");
    }
    else if(first_number > second_number){
        console.log(`${first_number} supérieure ${second_number}`);
    }
    else if(first_number < second_number){
        console.log(`${first_number} inférieure ${second_number}`);
    }
    else if(first_number < 0){
        console.log(`${first_number} est un numbre négatifs`);
    }
}

solution(12344, 78);
