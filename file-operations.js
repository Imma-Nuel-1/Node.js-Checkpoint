// file-operations.js
const fs = require("fs");

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created and content written.");

  // Read and log data from "welcome.txt"
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
