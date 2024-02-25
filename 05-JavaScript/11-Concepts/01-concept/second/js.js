// Write a program that accepts a month number (between 1 and 12), then indicate the number of days in that month.
// Leap years are excluded. Incorrect entries must be taken into account.

// Entrance
// Enter month number: 4
// Planned release
// Number of days: 30

const month = Number(prompt("Enter a number : "))

// while(month )
if(1< month < 12){
    if((month / 2)=! 0){
        console.log(`Enter month number : ${month}`);
        console.log(`Enter of days : 31`);
    }
    if((month / 2) == 0){
        console.log(`Enter month number : ${month}`);
        console.log(`Enter of days : 30`);
    }
}
else{
    console.log("Enter a number in this interuele 1 - 12");
};

// Second solution

let heur = Number(prompt("Enter heur !: "));
let minute = Number(prompt("Enter heur !: "));
let secound = Number(prompt("Enter heur !: "));

secound++;

if(secound=59){
    secound =0;
    minute++;
    if(minute = 59){
        minute= 0;
        heur++;
        if(heur=24){
            heur=0;
            minute=0;
            secound=0;
        }
    }
}

