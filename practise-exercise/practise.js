// ==========================================
// PROGRAM 1: Basic Arithmetic Calculator (Start)
// ==========================================
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// console.log("Addition (+):", num1 + num2);
// console.log("Subtraction (-):", num1 - num2);
// console.log("Multiplication (*):", num1 * num2);
// console.log("Division (/):", num1 / num2);
// console.log("Modulo / Remainder (%):", num1 % num2);
// console.log("Exponent / Power (**):", num1 ** num2);
// ==========================================
// PROGRAM 1: Basic Arithmetic Calculator (End)
// ==========================================


// ==========================================
// PROGRAM 2: Age & Discount Eligibility (Start)
// ==========================================
// let age = 18;
// let isVip = true;
// let hascopuon = false;
// let basePrice = 1000;

// let check = age >= 18 ? "eligible" : "noteligible";
// let isDiscountEligible = isVip || hascopuon;

// let finalPrice = isDiscountEligible ? basePrice - 200 : basePrice;
// console.log(finalPrice);
// ==========================================
// PROGRAM 2: Age & Discount Eligibility (End)
// ==========================================


// ==========================================
// PROGRAM 3: Bank Withdrawal Verification (Start)
// ==========================================
// let pinCorrect = true;
// let accountActive = true;
// let balance = 10000;
// let withdrawAmount = 2000;
// let remainingAttempts = 3;

// let canWithDraw = pinCorrect && accountActive;
// let newBalance = canWithDraw && balance >= withdrawAmount ? balance - withdrawAmount : balance;
// console.log(newBalance);
// ==========================================
// PROGRAM 3: Bank Withdrawal Verification (End)
// ==========================================


// ==========================================
// PROGRAM 4: Multiple Variable Assignment (Start)
// ==========================================
// let a = b = c = 50;
// console.log(a);
// ==========================================
// PROGRAM 4: Multiple Variable Assignment (End)
// ==========================================


// ==========================================
// PROGRAM 5: Even or Odd Checker (Start)
// ==========================================
// let getNumber = Number(prompt("Enter a number "));

// let checkEvenOrOdd = getNumber % 2 === 0 ? "It's Even!" : "It's Odd";
// console.log(checkEvenOrOdd);
// ==========================================
// PROGRAM 5: Even or Odd Checker (End)
// ==========================================


// ==========================================
// PROGRAM 6: Compound Assignment Operators (Start)
// ==========================================
// let x = 5;
// console.log(x += 3);  // 8
// console.log(x -= 2); // 6
// console.log(x *= 4); // 24
// console.log(x /= 6); // 4
// console.log(x %= 3) ; // 1
// ==========================================
// PROGRAM 6: Compound Assignment Operators (End)
// ==========================================


// ==========================================
// PROGRAM 7: Range Verification (10-20) (Start)
// ==========================================
// let number = 13;
// let result = number >= 10 && number <= 20 ? "Number is between 10 and 20" : "Number is not between 10 and 20";
// console.log(result);
// ==========================================
// PROGRAM 7: Range Verification (10-20) (End)
// ==========================================


// ==========================================
// PROGRAM 8: Find Largest of Three Numbers (Start)
// ==========================================
// let a = 110;
// let b = 230;
// let c = 320;

// let largest = a > b && a > c ? a : b > c ? b : c;
// console.log("The largest number is:", largest);
// ==========================================
// PROGRAM 8: Find Largest of Three Numbers (End)
// ==========================================


// ==========================================
// PROGRAM 9: User Authentication System (Start)
// ==========================================
// let userName = "admin";
// let password = "admin123";

// let dataBaseUserName = "admin";
// let dataBasePassword = "admin123";
// let result = userName && password && userName === dataBaseUserName && password === dataBasePassword ? "Login Successful" : "Login Failed";
// console.log(result);
// ==========================================
// PROGRAM 9: User Authentication System (End)
// ==========================================


// ==========================================
// PROGRAM 10: Increment/Decrement Precedence (Start)
// ==========================================
// let a = 5;
// let b = 3;
// let c = 3;

// let result = a++ + --b * c-- - ++a + b-- / --c; // 5 + 2 * 3 - 7 + 2 / 1
// console.log(result);
// ==========================================
// PROGRAM 10: Increment/Decrement Precedence (End)
// ==========================================


// ==========================================
// PROGRAM 11: Type Coercion & Equality Test (Start)
// ==========================================
// let x = 10;
// let y = 5;
// let z = "10";

// x += y * 2;
// let isEqual = x == z;
// console.log(isEqual);

// let isStrictEqual = x === z;
// let logicTest = (isEqual || isStrictEqual) && !(y > 10);
// let result = logicTest ? ++x : --y;

// console.log("x: ", x);
// console.log("y: ", y);
// console.log("z: ", z);
// console.log("isEqual: ", isEqual);
// console.log("isStrictEqual: ", isStrictEqual);
// console.log("logicTest: ", logicTest);
// console.log("Type of z: ", typeof z);
// ==========================================
// PROGRAM 11: Type Coercion & Equality Test (End)
// ==========================================


// ==========================================
// PROGRAM 12: Cart Discount Calculation (Start)
// ==========================================
// let cartValue = 102;
// let finalCartValue;

// if (cartValue < 50) {
//   finalCartValue = cartValue;
//   console.log("No discount applied");
// } else if (cartValue >= 50 && cartValue <= 100) {
//   finalCartValue = cartValue - cartValue * 0.1;
//   console.log("A 10% discount applied");
// } else {
//   finalCartValue = cartValue - cartValue * 0.2;
//   console.log("A 20% discount applied");
// }

// console.log(`The final cart total is ${finalCartValue}`);
// ==========================================
// PROGRAM 12: Cart Discount Calculation (End)
// ==========================================


// ==========================================
// PROGRAM 13: Subscription Access Control (Start)
// ==========================================
// let hasSubcription = true;
// let subcriptionType = "premium";

// if (hasSubcription) {
//   if (subcriptionType === "premium") {
//     console.log("Access to all content");
//   } else if (subcriptionType === "standard") {
//     console.log("Access to limited content");
//   } else {
//     console.log("UnKnown subcription type");
//   }
// } else {
//     console.log("Please suscribe to access content");
// }
// ==========================================
// PROGRAM 13: Subscription Access Control (End)
// ==========================================


// ==========================================
// PROGRAM 14: Traffic Light Signal System (Start)
// ==========================================
// let signalColor = 'red';

// if (signalColor === "red") {
//     console.log("stop!");
// } else if (signalColor === "yellow") {
//     console.log("Get Ready!");
// } else if (signalColor === "green") {
//     console.log("Go");
// } else {
//     console.log("Invalid signal color");
// }
// ==========================================
// PROGRAM 14: Traffic Light Signal System (End)
// ==========================================


// ==========================================
// PROGRAM 15: Day of Week Switch Case (Start)
// ==========================================
// let dayNumber = 3;

// switch (dayNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Invalid number week have seven days");
//     break;
// }
// ==========================================
// PROGRAM 15: Day of Week Switch Case (End)
// ==========================================


// ==========================================
// PROGRAM 16: Theme Selection Handler (Start)
// ==========================================
// let color = "white";
// let theme = prompt("chose your theme color(light,dark,pink,green) : ");

// if (theme === "light") {
//   color = "white";
// } else if (theme === "dark") {
//   color = "black";
// } else if (theme === "pink") {
//   color = "pink";
// } else if (theme === "green") {
//   color = "green";
// } else {
//   console.log("invalid color");
// }

// if (theme !== "light" && theme !== "dark" && theme !== "pink" && theme !== 'green') {
//   console.log("Invalid theme selection");
// } else {
//   console.log(`Your selected theme is ${theme} and color is ${color} respectively`);
// }
// ==========================================
// PROGRAM 16: Theme Selection Handler (End)
// ==========================================


// ==========================================
// PROGRAM 17: Smallest Number Identifier (Start)
// ==========================================
// let num1 = Number(prompt("Enter your number 1 : "));
// let num2 = Number(prompt("Enter your number 2 : "));
// let num3 = Number(prompt("Enter your number 3 : "));
// console.log(num1, num2, num3);

// if (num1 < num2 && num1 < num3) {
//   console.log(`${num1} is smallest`);
// } else if (num2 < num3) {
//   console.log(`${num2} is smallest`);
// } else {
//   console.log(`${num3} is smallest`);
// }
// ==========================================
// PROGRAM 17: Smallest Number Identifier (End)
// ==========================================


// ==========================================
// PROGRAM 18: User Role Access Control (Start)
// ==========================================
// let userRole = "editor";

// if (userRole === 'admin') {
//   console.log("full acess");
// } else if (userRole === 'editor') {
//   console.log('edit acess');
// } else if (userRole === 'viewer') {
//   console.log('read-only');
// } else {
//   console.log("invalid role");
// }

// switch (userRole) {
//   case "admin":
//     console.log("full acess");
//     break;
//   case "editor":
//     console.log("edit acess");
//     break;
//   case "viewer":
//     console.log("read-only");
//     break;
//   default:
//     console.log("invalid role");
//     break;
// }
// ==========================================
// PROGRAM 18: User Role Access Control (End)
// ==========================================


// ==========================================
// PROGRAM 19: FizzBuzz Problem (Start)
// ==========================================
// let getNumber = 30;

// if (getNumber % 3 === 0 && getNumber % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (getNumber % 5 === 0) {
//   console.log("Buzz");
// } else if (getNumber % 3 === 0) {
//   console.log("Fizz");
// } else {
//   console.log("Not divisible by 3 and 5");
// } 
// ==========================================
// PROGRAM 19: FizzBuzz Problem (End)
// ==========================================


// ==========================================
// PROGRAM 20: Switch Case Calculator (Start)
// ==========================================
// let num1 = 20;
// let num2 = 25;
// let operator = '/';

// switch (operator) {
//   case "+":
//     console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//     break;
//   case "/":
//     console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
//     break;
//   case "*":
//     console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }
// ==========================================
// PROGRAM 20: Switch Case Calculator (End)
// ==========================================


// ==========================================
// PROGRAM 21: Interactive ATM Menu System (Start)
// ==========================================
// let balance = 1000;
// let userChoice = Number(prompt("Enter your choice [1. Check Balance 2.Deposit 3. WithDraw 4. Exit]"));

// if (userChoice === 1) {
//   console.log(`your balance is ${balance}`);
// } else if (userChoice === 2) {
//   let DepositAmount = Number(prompt("Enter your deposit amount"));
//   if (DepositAmount < 1) {
//     console.log(`your deposit amount is less than 1`);
//   } else {
//     balance += DepositAmount;
//     console.log(`Deposit successful! Your new balance is: ${balance}`);
//   }
// } else if (userChoice === 3) {
//   let withDrawAmount = Number(prompt("Enter your with draw amount"));
//   if (withDrawAmount < 1 || withDrawAmount > balance) {
//     console.log("Invalid amount or insufficient balance!");
//   } else {
//     balance -= withDrawAmount;
//     console.log(`Withdraw successful! Your new balance is: ${balance}`);
//   }
// } else if (userChoice === 4) {
//   console.log("Exiting the program. Thank you for using our ATM!");
// } else {
//   console.log("Invalid choice! Please select between 1 and 4.");
// }
// ==========================================
// PROGRAM 21: Interactive ATM Menu System (End)
// ==========================================


// ==========================================
// PROGRAM 22: Membership Discount System (Start)
// ==========================================
// let totalAmount = Number(prompt("Enter your total amount"));
// let membershipStatus = Number(prompt("Enter your membership status : Vip for 1 Regular for 2"));
// let discount = 0;

// console.log(`Your totalAmount is ${totalAmount}`);
// if (membershipStatus === 1) {
//   if (totalAmount >= 5000) {
//       discount = (totalAmount * 20) / 100;
//   } else if (totalAmount < 5000) {
//       discount = (totalAmount * 10) / 100;
//   } 
// } else if (membershipStatus === 2) {
//    if (totalAmount >= 5000) {
//       discount = (totalAmount * 10) / 100;
//   } else if (totalAmount < 5000) {
//       discount = (totalAmount * 0) / 100;
//   } 
// } else {
//   console.log("Invalid membership choice!");
// }

// let finalBill = totalAmount - discount;
// console.log(`Discount: ${discount} Rs`);
// console.log(`Final Bill: ${finalBill} Rs`);
// ==========================================
// PROGRAM 22: Membership Discount System (End)
// ==========================================