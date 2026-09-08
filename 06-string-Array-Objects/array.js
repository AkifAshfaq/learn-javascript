// ==========================================
// 1. Array Basics & Declaration Types
// ==========================================
// Literal initialization: standard arrays, mixed types, multi-dimensional (nested)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = ["rana", "akif", "ashfaq"];
let arr3 = [1, 2, 3, "rana", "akif", "ashfaq", true, false, null, undefined];
let arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // 2D Array

console.log("Literal Array:", arr);
console.log("String Array:", arr2);
console.log("Mixed Data-type Array:", arr3);
console.log("2D Array:", arr4);

// Constructor initialization
let constructorArr = new Array(10, 20, 30, 'rana akif');
constructorArr[3] = 'rana akif ashfaq'; // Modifying element by index
console.log("Constructor Array:", constructorArr);

// Array element assignment & sparse arrays (creating empty slots)
let sparseArr = [1, 3, 5, 8, 9, 44];
sparseArr[6] = 100;
sparseArr[10] = 200; // Leaves indices 7, 8, 9 as empty slots (undefined)
console.log("Sparse Array with missing indices:", sparseArr);


// ==========================================
// 2. Iteration / Looping through Arrays
// ==========================================

let loopArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Standard For Loop (Useful when working directly with index counters)
for (let i = 0; i < loopArr.length; i++) {
    console.log("Traditional loop output:", loopArr[i] * 2);
}

// For...of Loop (Iterates over actual VALUES directly)
for (let value of loopArr) {
    console.log("For..of value:", value);
}

// For...in Loop (Iterates over array INDICES/KEYS as strings)
for (let index in loopArr) {
    console.log("For..in index:", index);
}


// ==========================================
// 3. Mutating Methods: Push, Pop, Unshift, Shift
// ==========================================

let mutationArr = [5, 4, 3, 'RAA', 8];
console.log("Original array:", mutationArr, "Length:", mutationArr.length);

// push(): Adds element to END, returns new array length
let newLengthPush = mutationArr.push(10);
console.log("After push(10):", mutationArr, "| Returned length:", newLengthPush);

// pop(): Removes LAST element, returns removed element
let poppedVal = mutationArr.pop();
console.log("After pop():", mutationArr, "| Removed element:", poppedVal);

// unshift(): Adds element to START, returns new array length
let newLengthUnshift = mutationArr.unshift(100);
console.log("After unshift(100):", mutationArr, "| Returned length:", newLengthUnshift);

// shift(): Removes FIRST element, returns removed element
let shiftedVal = mutationArr.shift();
console.log("After shift():", mutationArr, "| Removed element:", shiftedVal);


// ==========================================
// 4. Subsets and In-place Modifications: Slice & Splice
// ==========================================

let sliceSpliceBase = [5, 4, 3, 'RAA', 8];

// slice(startIndex, endIndex): Non-destructive (doesn't change original array)
// Extracts elements from startIndex up to (but NOT including) endIndex
let slicedArr = sliceSpliceBase.slice(1, 4);
console.log("Sliced Array (Index 1 to 3):", slicedArr);

// splice(startIndex, deleteCount, ...itemsToAdd): Destructive (modifies original array)
// Removes items and optionally inserts new elements in their place
let splicedArr = [5, 4, 3, 'RAA', 8];
let removedItems = splicedArr.splice(1, 3, 'rana', 'akif', 'ashfaq');
console.log("Splice removed elements:", removedItems);
console.log("Splice modified original array:", splicedArr);


// ==========================================
// 5. Combining Arrays: Concat & Spread Operator
// ==========================================

let arr1 = [1, 2, 3];
let arr2_val = [4, 5, 6];
let arr3_val = [7, 8, 9];

// concat(): Combines arrays without modifying originals
let combinedArr = arr1.concat(arr2_val);
console.log("Concat output:", combinedArr);

// ES6 Spread Operator (...): Modern way to merge/clone arrays
let spreadArr = [...arr1, ...arr2_val, ...arr3_val];
console.log("Spread Operator combined output:", spreadArr);


// ==========================================
// 6. Utility Methods: Join, ToString, Reverse, Flat, Find
// ==========================================

let fruits = ['mango', 'apple', 'banana'];

// join(separator): Converts array elements into string with custom separator
let joinedArr = fruits.join(" | ");
console.log("Joined String:", joinedArr, "| Type:", typeof joinedArr);

// toString(): Converts array elements into comma-separated string
let arrInToString = fruits.toString();
console.log("ToString Output:", arrInToString);

// reverse(): Reverses array elements IN-PLACE
console.log("Reversed Array:", fruits.reverse());

// flat(depth): Flattens nested sub-arrays up to specified depth
let heroes = ["spiderman", ["hulk", "hockey", ["RAA"], "thor"]];
console.log("Flattened Array (depth 2):", heroes.flat(2));

// find(callback): Returns FIRST element that satisfies testing condition
let foundFruit = fruits.find((fruit) => fruit === 'mango');
console.log("Found Result:", foundFruit);


// ==========================================
// 7. Sorting Arrays
// ==========================================

let numArrForSort = [5, 4, 3, 2, 1, 10, 9, 8, 7, 6];
let strArr = ['hawkeye', 'wanda', 'ironman', 'spiderman', 'hulk', 'thor'];

// Alphabetic sort (Default behavior)
strArr.sort();
console.log("Alphabetically Sorted Strings:", strArr);

// Numerical sort using compare function (a - b for Ascending order)
numArrForSort.sort((a, b) => a - b);
console.log("Numerically Sorted Numbers:", numArrForSort);


// ==========================================
// 8. Functional Array Methods: Map, Filter, Reduce, ForEach
// ==========================================

let numbersToDouble = [2, 4, 6, 8, 10];

// map(): Returns a NEW array by applying function to every element
let newNumArr = numbersToDouble.map((num) => num * 2);
console.log("Original Numbers:", numbersToDouble);
console.log("Mapped Double Numbers:", newNumArr);

let mixedNumbers = [11, 1, 1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 28];

// forEach(): Iterates over array items (does NOT return a new array)
// Useful for mutating existing array elements directly
// mixedNumbers.forEach((num, index) => { mixedNumbers[index] = num * 2; });

// filter(): Returns NEW array with elements that pass test condition
let evenNumFiltered = mixedNumbers.filter((ele) => ele % 2 === 0);
console.log("Filtered Even Numbers:", evenNumFiltered);

let reduceNumbers = [1, 3, 5, 7, 9];

// reduce(): Executes reducer function to consolidate array to SINGLE value
let totalSum = reduceNumbers.reduce((prevVal, currentVal) => prevVal + currentVal);
console.log("Reduced Total Sum:", totalSum);

// Practical Average Calculation Example using reduce()
let studentMarks = [35, 54, 65, 73, 85, 94];
let sum = studentMarks.reduce((prevVal, curVal) => prevVal + curVal);
let averagedMarks = sum / studentMarks.length;

console.log(`Sum of Marks => ${sum}`);
console.log(`Total Students => ${studentMarks.length}`);
console.log(`Average Marks => ${averagedMarks.toFixed(2)}`);


// ==========================================
// 9. Array Initialization Techniques
// ==========================================

// Creating array of size N filled with initial values using fill()
let nSize = 18;
let zeroFilledArr = new Array(nSize).fill(0);
console.log("Zero-filled Array:", zeroFilledArr);

// Creating sequence array from 1 to N
let sequenceArr = new Array(25).fill(0);
sequenceArr.forEach((_, index) => {
    sequenceArr[index] = index + 1;
});
console.log("1-to-25 Sequence Array:", sequenceArr);


// ==========================================
// 10. Mini Practical Tasks & Algorithmic Problems
// ==========================================

// Task A: Hero Array Operations
let avengers = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"];
avengers.push("spiderman");                    // Add to end
avengers.unshift("thor");                       // Add to start
avengers.splice(3, 1, "hawkeye");              // Remove 1 element at index 3 & insert 'hawkeye'

console.log("Contains 'captain'?:", avengers.includes("captain"));
console.log("Final Avengers List:", avengers);

// Task B: Palindrome String Checker using Array Methods
let testStr = 'ollo';
// Step 1: split("") converts string to array of characters
// Step 2: reverse() reverses array elements
// Step 3: join("") reconstructs reversed array back into string
let revStr = testStr.split("").reverse().join("");

if (testStr === revStr) {
    console.log(`'${testStr}' is a valid palindrome string.`);
} else {
    console.log(`'${testStr}' is NOT a palindrome string.`);
}

// Task C: Title Case Converter (Capitalizing First Letter of Every Word)
let sentence = "hello how are you";

// Split string by spaces into array of words
let capitalizedWords = sentence.split(" ").map((word) => {
    // Extract 1st char, convert to UpperCase + slice remaining string from index 1
    return word.charAt(0).toUpperCase() + word.slice(1);
});

// Re-join capitalized words array with spaces
let finalTitleCaseSentence = capitalizedWords.join(" ");
console.log("Title-Cased Result:", finalTitleCaseSentence);