// let age = 21;

// let result = age >= 18 ? " you can Drive" : "you can't drive";
// console.log(result)

// Question: on a booking website check if the user age is valid for booking : 
// age should be at least 18.
// Write a condition to check and display a message: "ELigible for booking" if the user is 18 or older."Not eligble for booking" otherwise.

let age = 17;
let showEligibilty = age >= 18 ? "Eligible for booking" : "Not eligible for booking"
console.log(showEligibilty)

// Question: On a login page verify the user credentials. check if username is not empty and password is not empty (&& operator). If either is empty display an error message : "Both filds are required".

// let username =  "Akif Ashfaq";
// let password = "akif123";
// let result = (username && password) ? "Login successful" : "Both fields are required";
// console.log(result)

//Qusetion find the largest number from given 3 numbers using ternary operator.

let a = 10;
let b = 20;
let c = 15;
let checklargestNumber = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(checklargestNumber)