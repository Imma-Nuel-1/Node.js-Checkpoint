// password-generator.js
const generatePassword = require("generate-password");

// Generate a random password
const password = generatePassword.generate({
  length: 10,
  numbers: true,
});

console.log(`Generated Password: ${password}`);
