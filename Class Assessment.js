// Extracting Substrings
let javaScript = "JavaScript is fun!";
console.log(javaScript.substring(4, 10)); // Output: "Script" (characters from index 4 to 9)

// Changing Case
let string = "hello WORLD";
let hello = string.substring(0, 5); // Extract "hello"
let world = string.substring(6, 11); // Extract "WORLD"
hello = hello.toUpperCase(); // Convert "hello" to "HELLO"
world = world.toLowerCase(); // Convert "WORLD" to "world"
console.log(hello + ' ' + world); // Output: "HELLO world"

// Finding Characters
let text = "Programming";
let index = text.indexOf("r"); // Find the index of "r"
console.log(index); // Output: 1 (index of the first "r")

// Checking for Inclusion
let phrase = "Web Development";
let web = phrase.includes("Web"); // Check if "Web" exists
console.log(web); // Output: true

// String Length
let codingIsCool = "Coding is cool";
console.log(codingIsCool.length); // Output: 14 (number of characters in the string)

//  Replacing Substring
let fruitsILike = "I like apples and apples";
fruitsILike = fruitsILike.replaceAll("apples", "oranges"); // Replace "apples" with "oranges"
console.log(fruitsILike); // Output: "I like oranges and oranges"

// Splitting Strings
let fruitString = "apple, banana, orange";
let fruitsArray = fruitString.split(", "); // Split the string by ", " into an array
console.log(fruitsArray); // Output: ["apple", "banana", "orange"]

// Trimming Whitespaces
let extraSpaces = " Extra spaces ";
let trimmedSpaces = extraSpaces.trim(); // Remove spaces at the start and end
console.log(trimmedSpaces); // Output: "Extra spaces"

// Concatenation
let front = "Front";
let end = "end";
console.log(front + end); // Output: "Frontend" (combine the two strings)

// Repeating Strings
let ahString = "ha";
let repeatedString = ahString.repeat(3); // Repeat "ha" three times
console.log(repeatedString); // Output: "hahaha"