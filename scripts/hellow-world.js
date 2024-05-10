"use strict";

function showGreeting() {
   // Find the messageDiv element
   let messageDiv = document.getElementById("messageDiv");

   // Set its contents to "Hello World!"
   messageDiv.innerHTML = "Hello World!";
}       

// call the showGreeting() function when the .js
// file loads and this line is encountered
showGreeting();

// We want this code to run when the user clicks the Show button

let nameField = document.getElementById("nameField");
let ageField = document.getElementById("ageField");

// Get values in the name and age fields
let name1 = nameField.value;
let age =  ageField.value;   	// age is a string here

let message = 
  "Hi " + name1 + "! I hear you are " + age + " years old!";

const messagePara = document.getElementById("messagePara");
messagePara.innerHTML = message;

