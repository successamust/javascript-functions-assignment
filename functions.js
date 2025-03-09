//1. Rectangle Area Calculator:
// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width; // Return the product of length and width
  }
  
  // Example usage
  let length = 10; // Define the length of the rectangle
  let width = 25; // Define the width of the rectangle
  let areaOfRectangle = calculateArea(length, width); // Call the function to calculate the area
  console.log(areaOfRectangle); // Output: 250 (the calculated area)

//2. String Reverser:
// Function to reverse a string
function reverseString(inputString) {
    return inputString.split("").reverse().join(""); 
    // Split the string into an array of characters, reverse the array, and join it back into a string
  }
  
  // Example usage
  let inputString = "birthday"; // Define the input string
  console.log(reverseString("birthday")); // Output: yadhtrib (the reversed string)

//3. Even Number Checker:
// Function to check if a number is even
function isEven(inputNum) {
    if (inputNum % 2 === 0) { // Check if the number is divisible by 2
      return true; // Return true if it's even
    } else {
      return false; // Return false if it's odd
    }
  }
  
  // Example usage
  let inputNum = 22; // Define the input number
  let sampleNum = isEven(inputNum); // Call the function to check if the number is even
  console.log(sampleNum); // Output: true (since 22 is even)

//4. Score Categorizer:
// Function to categorize a score based on predefined ranges
function scoreCategory(score) {
    if (score >= 90) { // Check if the score is 90 or above
      return score + " (Excellent)"; // Return "Excellent" for scores >= 90
    } else if (score >= 80) { // Check if the score is between 80 and 89
      return score + " (Very Good)"; // Return "Very Good" for scores >= 80
    } else if (score >= 70) { // Check if the score is between 70 and 79
      return score + " (Pass)"; // Return "Pass" for scores >= 70
    } else { // For scores below 70
      return score + " (Fail)"; // Return "Fail" for scores < 70
    }
  }
  
  // Example usage
  let score = 87; // Define the input score
  let stdScore = scoreCategory(score); // Call the function to categorize the score
  console.log(stdScore); // Output: 87 (Very Good) (the categorized score)

