// ==========================================
// 1. String Concatenation Methods
// ==========================================
let firstName = "Rana";
let middleName = "Akif";
let lastName = "Ashfaq";

// Method 1: Traditional '+' Operator
// let fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName); // Output: "Rana Akif Ashfaq"

// Method 2: Modern ES6 Template Literals (Recommended)
// let fullName2 = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName2); // Output: "Rana Akif Ashfaq"

// Method 3: Using Built-in concat() Method
// let fullName3 = firstName.concat(middleName, lastName);
// console.log(fullName3); // Output: "RanaAkifAshfaq"


// ==========================================
// 2. String Replacement Methods
// ==========================================
// let str = 'I am a boy and i am a boy';

// replace(): Replaces only the FIRST matching word
// console.log(str.replace('boy', 'girl')); // Output: "I am a girl and i am a boy"

// replaceAll(): Replaces ALL matching words in the string
// console.log(str.replaceAll('boy', 'girl')); // Output: "I am a girl and i am a girl"


// ==========================================
// 3. Substring Extraction & Splitting
// ==========================================
// let userName = "@ranaakifashfaq";
// slice(start, end): Extracts characters from index 5 up to 8 (index 9 is excluded)
// console.log(userName.slice(5, 9)); // Output: "kifa"

// let str = 'alpha beta gamma';
// split(): Converts a string into an array separated by spaces
// console.log(str.split(" ")); // Output: ['alpha', 'beta', 'gamma']


// ==========================================
// 4. Project: Username Generator
// ==========================================
// Formats name: removes extra spaces, adds '@' prefix and '_[length]' suffix
// let fullName = prompt("enter your fullname");
// let userName = `@${fullName.trim().replaceAll(" ", "")}_${fullName.length}`;
// console.log(userName);


// ==========================================
// 5. Project: Character Occurrence Counter
// ==========================================
// Counts how many times a character appears in a string (case-insensitive)
// let str = prompt("Enter any string");
// let ch = prompt("Enter any character");
// let count = 0;

// for (let index in str) {
//     if (str[index].toLowerCase() === ch.toLowerCase()) {
//         count++;
//         console.log("Occurrence position => ", index);
//     }
// }
// console.log("Count => ", count);


// ==========================================
// 6. Utility: Total Word Counter
// ==========================================
// Splits string by space into an array and measures its length
// let str = 'hello i am a boy';
// console.log(str.split(" ").length); // Output: 5


// ==========================================
// 7. Logic: Palindrome Checker
// ==========================================
// Checks if a string reads the same backwards (e.g., 'ollo', 'madam')
// let str = 'ollo';
// let revStr = str.split("").reverse().join("");

// if (str === revStr) {
//     console.log("it's palindrome string");
// } else {
//     console.log("it's not a palindrome string");
// }


// ==========================================
// 8. Logic: Capitalize First Letter of Every Word
// ==========================================
let str = "hello how are you";

// 1. split(" ") breaks string into array of words
// 2. map() iterates through each word
// 3. charAt(0).toUpperCase() capitalizes first letter
// 4. slice(1) attaches the rest of the word
let firstLetterCapital = str.split(" ").map((ele) => {
    return ele.charAt(0).toUpperCase() + ele.slice(1);
});

// 5. join(" ") converts the modified array back into a single sentence
let finalString = firstLetterCapital.join(" ");
console.log(finalString); // Output: "Hello How Are You"
