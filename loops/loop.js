// ==========================================
// PROGRAM 1: Multiplication Table Generator (Start)
// ==========================================
// let num = 23;
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }
// ==========================================
// PROGRAM 1: Multiplication Table Generator (End)
// ==========================================


// ==========================================
// PROGRAM 2: ATM PIN Verification System (Start)
// ==========================================
// let correctPin = 1234;
// let enteredPin = Number(prompt("enter an atm pin"));
// let count = 1;

// while (enteredPin !== correctPin) {
//     if (count >= 3) {
//         break; // Check if max attempts reached
//     }
//     enteredPin = Number(prompt("Wrong PIN! Try again:"));
//     count ++;
// }

// if (enteredPin === correctPin) {
//     console.log("Access Granted! Welcome to your Account. 🎉");
// } else {
//     console.log("Card Blocked! Too many wrong attempts. 🚫");
// }
// ==========================================
// PROGRAM 2: ATM PIN Verification System (End)
// ==========================================


// ==========================================
// PROGRAM 3: Shopping Cart Bill Accumulator (Start)
// ==========================================
// let totalBill = 0;
// let itemPrice = Number(prompt("Enter item price (or enter 0 to finish shopping):"))
// while (itemPrice !== 0) {
//     totalBill += itemPrice;
//     console.log(totalBill)
//     itemPrice = Number(prompt("Enter next item price (or enter 0 to stop ):"))
// }
// console.log(`Your Final Total: Rs. ${totalBill}`)
// ==========================================
// PROGRAM 3: Shopping Cart Bill Accumulator (End)
// ==========================================


// ==========================================
// PROGRAM 4: Countdown Receipt Timer (Start)
// ==========================================
// for (let i = 3; i >= 1; i--) {
//   console.log(`Generating Receipt in ${i}...`);
// }
// console.log("Receipt Printed! Thank you for shopping! 🛍️");
// ==========================================
// PROGRAM 4: Countdown Receipt Timer (End)
// ==========================================


// ==========================================
// PROGRAM 5: Dynamic Table with Threshold Check (Start)
// ==========================================
// let getNumber = Number(prompt("Enter your number"));
// for(let i = 1; i <= 10; i++){
//     let result = getNumber * i
//     if (result > 20) {
//         console.log(`${getNumber} x ${i} = ${result} (Big Number!)`)
//     }
//     else{
//         console.log(`${getNumber} x ${i} = ${result}`)
//     }
// }
// ==========================================
// PROGRAM 5: Dynamic Table with Threshold Check (End)
// ==========================================


// ==========================================
// PROGRAM 6: Even Numbers Print (0 to 100) (Start)
// ==========================================
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// ==========================================
// PROGRAM 6: Even Numbers Print (0 to 100) (End)
// ==========================================


// ==========================================
// PROGRAM 7: Vowel and Consonant Counter (Start)
// ==========================================
// let string = "hello World";
// let vowelCount = 0;
// let consonantCount = 0;

// for(let letter of string) {
//   if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U" ) {
//     vowelCount ++
//   } else if (letter === " ") {
//     console.log("space not counted")
//   }
//   else{
//     consonantCount ++;
//   }
// }
// console.log(`Vowels : ${vowelCount}`)
// console.log(`Consonant : ${consonantCount}`)
// ==========================================
// PROGRAM 7: Vowel and Consonant Counter (End)
// ==========================================


// ==========================================
// PROGRAM 8: Sum of Numbers from 0 to N (Start)
// ==========================================
// let n = Number(prompt("Enter a number"));
// let sum = 0;
// for(let i = 0; i <= n; i++){
//     sum += i;
//     console.log(sum)
// }
// ==========================================
// PROGRAM 8: Sum of Numbers from 0 to N (End)
// ==========================================


// ==========================================
// PROGRAM 9: Sum of Range (M to N) (Start)
// ==========================================
// let m = Number(prompt("Enter starting number"))
// let n = Number(prompt("Enter ending number"))
// let sum = 0;

// for (let i = m; i <= n; i++) {
//     sum += i
//     console.log(sum)
// }
// ==========================================
// PROGRAM 9: Sum of Range (M to N) (End)
// ==========================================


// ==========================================
// PROGRAM 10: Print Odd Numbers up to N (Start)
// ==========================================
// let n = Number(prompt("Enter a number"))

// for (let i = 0; i <= n; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
// ==========================================
// PROGRAM 10: Print Odd Numbers up to N (End)
// ==========================================


// ==========================================
// PROGRAM 11: Number Guessing Game (Start)
// ==========================================
// let computerNumber = 6;
// let guessNumber = null;

// while (computerNumber !== guessNumber) {
//   guessNumber = Number(prompt("Enter correct number"))

//   if (isNaN(guessNumber)) {
//     alert("Number is invalid, please try again!")
//   } else if (guessNumber < computerNumber) {
//     alert("Number is low, please try again!")
//   } else if (guessNumber > computerNumber) {
//       alert("Number is high, please try again!")
//   } else{
//     alert("congratulation ... your guess is correct")
//   }
// }
// ==========================================
// PROGRAM 11: Number Guessing Game (End)
// ==========================================


// ==========================================
// PROGRAM 12: Password Authentication System (Start)
// ==========================================
// let password = "alpha";
// let userPassword = null;
// let noOfAttempt = 0;

// while(password !== userPassword && noOfAttempt < 3){
//     userPassword = prompt("Enter password: ")
//     noOfAttempt ++;
//     if (userPassword === password) {
//         alert("congratulations your password matched!")
//     } else if (noOfAttempt >= 3) {
//         alert("Your attempt is over! sorry")
//     } else {
//         alert("Your password is incorrect, please try again!")
//     }
// }
// ==========================================
// PROGRAM 12: Password Authentication System (End)
// ==========================================


// ==========================================
// PROGRAM 13: Factorial Calculation (Start)
// ==========================================
// let n = 5;
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact *= i
// }
// console.log(fact)
// ==========================================
// PROGRAM 13: Factorial Calculation (End)
// ==========================================


// ==========================================
// PROGRAM 14: Half Pyramid Number Pattern (Start)
// ==========================================
// let n = 5;

// for(let i = 1; i <= n; i++){
//     let str = "";
//     for(let j = 1; j <= i; j++){
//         str = str + j;
//     }
//     console.log(str)
// }
// ==========================================
// PROGRAM 14: Half Pyramid Number Pattern (End)
// ==========================================


// ==========================================
// PROGRAM 15: Interactive Forest Adventure Game (Start)
// ==========================================
alert("you wake up in the dark forest");

let userChoice = prompt("Do you want to go left or right");
let playAgain = "yes";

while (playAgain === "yes") {
    if (userChoice === 'left') {
        alert("You see something shiny into the mud");
        userChoice = prompt("Do you want to pickup ? (yes or no)");
        if (userChoice === 'yes') {
            alert("It's a magic stone! You are teleported to saftey, You win");
        } else {
            alert("You sink slowy into the mud, Game over.");
        } 
    } else if (userChoice === 'right') {
        alert("You fina a cave...");
        userChoice = prompt("Do you enter the cave? (yes or no)");
        if (userChoice === 'yes') {
            alert("A dragon wakes up and chases you away. you barely escape!");
        } else {
            alert("You set up camp outside the cave. A peace nigth under the stars. You win!");
        }
        
        userChoice = prompt("Do you want to play again (yes or no)");
        if (userChoice === 'no') {
            playAgain = 'no';
        }
    }   
}
// ==========================================
// PROGRAM 15: Interactive Forest Adventure Game (End)
// ==========================================