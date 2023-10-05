const characters = ["A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordAEl = document.querySelector("#pw-a")
let passwordBEl = document.querySelector("#pw-b")
console.log(passwordAEl)


// *** Generate Random Password  ***//
function generatePw() {
    console.log(rangeVal)   
    passwordAEl.textContent=""
    passwordBEl.textContent=""

    getRandomPw(rangeVal, passwordAEl);
    getRandomPw(rangeVal, passwordBEl);  
    
}

function getRandomPw(pwLength, pwText) {
  // if toggle is true 
  // use an updated array to randomly select the remaining items in it
    for(let i=0; i < pwLength; i++) {
        let randomNumber = Math.floor(Math.random() * 91);
        pwText.textContent += characters[randomNumber];
    }
}


//***  Adapted from https://css-tricks.com/value-bubbles-for-range-inputs ***//
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
  


// *** Copy on click *** //
passwordAEl.addEventListener('click', () =>{
  navigator.clipboard.writeText(passwordAEl.textContent)
  console.log(passwordAEl.textContent)
})

passwordBEl.addEventListener('click', () =>{
  navigator.clipboard.writeText(passwordBEl.textContent)
  console.log(passwordBEl.textContent)
})

// *** Generate password based on which toggle is on *** //
let isNumToggled = false;
let isSymbolToggled = false; 
const symbolChkBoxEl = document.querySelector("#symbol-chkbox");
const numChkboxEl = document.querySelector("#num-chkbox");
function excludeNumChar() {
  if(isNumToggled === true) {
    isNumToggled = false;
    console.log(isNumToggled)
  } else {
    isNumToggled = true;
    console.log(isNumToggled)
  }

}

function excludeSymbolChar() {
  if(isSymbolToggled === true) {
    isSymbolToggled = false;
    console.log(isSymbolToggled)
  } else {
    isSymbolToggled = true;
    console.log(isSymbolToggled)
  }

}






// 27/09/2023
// Line 15-16 is there a way to make those more DRY ? Is there a way to write this in one line ? 
// Same thing for Line 17 - 18. 

// 10/02/2023
// Task - After working on the range slider CSS, need to:
//  A) Have the value always show as the slider is moving - done
//  B) Use the value of where the slider stops to use that as the value for the password length - done 

// 10/03/2023
// Task - Apply copy on click feature when the use clicks on the password generated text - done
// Issue: A) When user clicks either of the password text. The user has to click twice for the copy to take effect. 
//        Not sure why that is happening. 

//        B) If the user copies either text back and forth an error is shown : Uncaught (in promise) DOMException: Clipboard write is not allowed.
//        It still works but not sure what the work around is for this. 

//        C) When the user runs the page at first then goes clicks the generate password first without moving the slider. 
//           Not sure if this is a problem since the user hasn't provided input as to what password length they desire 

// 10/03/2023
// Task - Toggle symbols and numbers on and off 
// Issue: 