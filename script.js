// Comments to complete task
// * Generate a password when the button is clicked
// * Present a series of prompts for password criteria
// * Length of password & restrict to At least 10 characters but no more than 64.
// * Character types
// * Confrim - Lowercase
// * Confrim - Uppercase
// * Confrim - Numeric
// * Confrim - Special characters ($@%&*, etc)
// * Code should validate for each input and at least one character type should be selected
// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page



// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// container object for password selections

let passwordLength = 0;
let passwordLowercse = false;
let passwordUppercse = false;
let passwordNumeric = false;
let passwordSpecial = false;
let selectedCharacters = [];
let numberOfOptionsSelected = 0;
let NameOfOptionsSelected = [];

function getPasswordLength() {
  // * Length of password & restrict to At least 10 characters but no more than 64.
  for (let i = 0; i < 1; i++) {
    let UserType = parseInt(prompt("Enter password length between 10 and 64 in numbers", "10"), 10);
    // Password length too short
    if (UserType < 10) {
      alert("The entry is too low. A reminder Password must be between 10 and 64 (written in numbers) Please Click the button again");
      break;
    }
    // Password length too long
    else if (UserType > 64) {
      alert("The entry is too high. A reminder Password must be between 10 and 64 (written in numbers) Please Click the button again");
      break;
    }
    // Password is not a Number
    else if (Number.isNaN(UserType)) {
      alert("You Have typed a non number character. A reminder Password must be between 10 and 64 (written in numbers) Please Click the button again");
      break;
    }
    else {
      return passwordLength = UserType;
    }
  }
}
// Selecting Character options Function
function getPasswordOptions() {
  for (let i = 0; i < 1; i++) {
    // * Confrim - Lowercase
    let passwordLowercse = confirm("Want to include LowerCase");
    if (passwordLowercse === true) {
      selectedCharacters.push(...lowerCasedCharacters);
      numberOfOptionsSelected++;
      NameOfOptionsSelected.push("Lowercase");
    };
    // * Confrim - Uppercase
    let passwordUppercse = confirm("Want to include UpperCase");
    if (passwordUppercse === true) {
      selectedCharacters.push(...upperCasedCharacters);
      numberOfOptionsSelected++;
      NameOfOptionsSelected.push("Uppercase");
    };
    // * Confrim - Numeric
    let passwordNumeric = confirm("Want to include Numeric");
    if (passwordNumeric === true) {
      selectedCharacters.push(...numericCharacters);
      numberOfOptionsSelected++;
      NameOfOptionsSelected.push("Numeric");

    };
    // * Confrim - Special characters ($@%&*, etc)
    let passwordSpecial = confirm("Want to include Special characters ($@%&*, etc)");
    if (passwordSpecial === true) {
      selectedCharacters.push(...specialCharacters);
      numberOfOptionsSelected++;
      NameOfOptionsSelected.push("Special characters");
    };
    // * Not Selected Any character Types
    if (numberOfOptionsSelected < 1) {
      alert("You have Selected No character types. Please Click the button again");
      break;

    }
    // a;erting choices made
    let summaryText =
      "You have Selected Password parameters of\n" +
      "Password length: " + passwordLength + "\n" +
      "Containing: \n" + NameOfOptionsSelected.join('\n');

    alert(summaryText)
    return selectedCharacters;
  }

}

// Function for getting a random element from an array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < 1; i++) {
    // Resetting Values for next each click of the button
    passwordLength = 0;
    passwordLowercse = false;
    passwordUppercse = false;
    passwordNumeric = false;
    passwordSpecial = false;
    selectedCharacters = [];
    numberOfOptionsSelected = 0;
    NameOfOptionsSelected = [];
    // Start running prompts for user input

    getPasswordLength();
    if (passwordLength === 0) break;
    // break incase of failed entry in password length

    getPasswordOptions();
    let finalPassword = [];
    // randomise to password Length and return as string
    for (let i = 0; i < passwordLength; i++) {
      finalPassword.push(getRandom(selectedCharacters));
    }
    return finalPassword.join("");
  }

}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
