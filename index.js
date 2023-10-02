const characters = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordAEl = document.querySelector("#pw-a")
let passwordBEl = document.querySelector("#pw-b")
console.log(passwordAEl)



function generatePw() {
    passwordAEl.textContent=""
    passwordBEl.textContent=""
    getRandomPw(passwordAEl);
    getRandomPw(passwordBEl);    
    
}

function getRandomPw(pw) {
    for(let i=0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * 91);
       pw.textContent += characters[randomNumber];
    }
}


// /* Adapted from https://css-tricks.com/value-bubbles-for-range-inputs/
// Had to read and take snippet of code on how to create range slider with bubbles showing the current value */




// 27/09/2023
// Line 15-16 is there a way to make those more DRY ? Is there a way to write this in one line ? 
// Same thing for Line 17 - 18. 

// 10/02/2023
// Task - After working on the range slider CSS, need to take the value of the slider and use that as the value for password length