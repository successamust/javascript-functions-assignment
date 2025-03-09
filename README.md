## javascript-functions-assignment
# Description 
This assignment demonstrates the implementation of four JavaScript functions:

Rectangle Area Calculator: Calculates the area of a rectangle.

String Reverser: Reverses a given string.

Even Number Checker: Checks if a number is even.

Score Categorizer: Categorizes a score based on predefined ranges.

---

# Instructions to Run the Code**

**Prerequisites:**

Ensure you have Node.js installed on your machine.

A code editor like Visual Studio Code is recommended.

**Steps:**

Clone or download the repository containing the JavaScript file.

Open the terminal or command prompt.

Navigate to the directory where the JavaScript file is located.

Run the file using Node.js:

---

# Examples of how to use functions

1. Rectangle Area Calculator

let length = 10;
let width = 25;
let areaOfRectangle = calculateArea(length, width);
console.log(areaOfRectangle); // Output: 250

2. String Reverser

let inputString = "birthday";
console.log(reverseString("birthday")); // Output: yadhtrib

3. Even Number Checker

let inputNum = 22;
let sampleNum = isEven(inputNum);
console.log(sampleNum); // Output: true

4. Score Categorizer

let score = 87;
let stdScore = scoreCategory(score);
console.log(stdScore); // Output: 87 (Very Good)

---

## Section that shows the results of running different test cases.

| Function Name             | Input                   | Expected Result      | Result               |
|---------------------------|-------------------------|----------------------|----------------------|
| Rectangle Area Calculator | length = 10, width = 25 | 250                  | 250                  |
|                           |          30,         5  | 150                  | 150                  |
|                           |          15,         10 | 150                  | 150                  |
|---------------------------|-------------------------|----------------------|----------------------|
| String Reverser           | "birthday"              | "yadhtrib"           | "yadhtrib"           |
|                           | "ceremony"              | "ynomerec"           | "ynomerec"           |
|                           | "football"              | "llabtoof"           | "llabtoof"           |
|---------------------------|-------------------------|----------------------|----------------------|
| Even Number Checker       | 22                      | true                 | true                 |
|                           | 115                     | false                | false                |
|                           | 240                     | true                 | true                 |
|---------------------------|-------------------------|----------------------|----------------------|
| Score Categorizer         | 87                      | 87 (Very Good)       | 87 (Very Good)       |
|                           | 95                      | 95 (Excellent)       | 95 (Excellent)       |
|                           | 69                      | 69 (Fail)            | 69 (Fail)            |