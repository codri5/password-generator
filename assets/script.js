'use strict';

let passLength, passLower, passUpper, passNumeric, passSpecial, passOptions, passChar, newPassword;

// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {

  passLength = parseInt(prompt('Please choose a password length between 10 and 64 characters: '));

  while(passLength < 10 || passLength > 64) {
    alert('Your number is out of range !');
    passLength = prompt('Please choose a new number between 10 and 64: ');
  }
  
  passLower = confirm('Would you like to include lowercase characters?');
  passUpper = confirm('Would you like to include uppercase characters?');
  passNumeric = confirm('Would you like to include numeric characters?');
  passSpecial = confirm('Would you like to include special characters?');
 
  passOptions = {
    length: passLength,
    lower: passLower,
    upper: passUpper,
    numeric: passNumeric,
    special: passSpecial
  };
  return passOptions;
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  
  passChar = '';

  while(passOptions.length >= 10 && passOptions.length <= 64) {
    for (let i = 0; i < passOptions.length; i++) {
      if (passLower) { passChar += getRandom(lowerCasedCharacters); }
      if (passUpper) { passChar += getRandom(upperCasedCharacters); }
      if (passNumeric) { passChar += getRandom(numericCharacters); }
      if (passSpecial) { passChar += getRandom(specialCharacters); }
    }

      newPassword = '';

      for (let i = 0; i < passOptions.length; i++) {
        newPassword += getRandom(passChar);
      }
      return document.getElementById("password").innerHTML = newPassword;
  }
}
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
