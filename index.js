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
    console.log(rangeVal)   
    passwordAEl.textContent=""
    passwordBEl.textContent=""

    getRandomPw(rangeVal, passwordAEl);
    getRandomPw(rangeVal, passwordBEl);  
    
}

function getRandomPw(pwLength, pwText) {
    for(let i=0; i < pwLength; i++) {
        let randomNumber = Math.floor(Math.random() * 91);
        pwText.textContent += characters[randomNumber];
    }
}


// /* Adapted from https://css-tricks.com/value-bubbles-for-range-inputs/
// Had to read and take snippet of code on how to create range slider with bubbles showing the current value */

const range = document.querySelector(".range")
const inputText = document.querySelector(".range-text")
let rangeVal;

// function getFinalval(val) {
//     // const rangeVal = Number(val)
//     // generatePw(rangeVal)
    

// }

range.addEventListener("input", () => {
    updateInputText()
    });

// function getRangeNum() {
//     // let convertToNum = parseInt(val);

//     range.addEventListener("input", () => {
//         updateInputText()
//     });

//   }

  function updateInputText() {
    // console.log(val)
    rangeVal = range.value;
    
    // const val = range.value;
    inputText.value = rangeVal = range.value;
    console.log(rangeVal)

    // console.log(range)

    // console.log(inputText)
  }
  


// 27/09/2023
// Line 15-16 is there a way to make those more DRY ? Is there a way to write this in one line ? 
// Same thing for Line 17 - 18. 

// 10/02/2023
// Task - After working on the range slider CSS, need to:
//  A) Have the value always show as the slider is moving - done
//  B) Use the value of where the slider stops to use that as the value for the password length - done 