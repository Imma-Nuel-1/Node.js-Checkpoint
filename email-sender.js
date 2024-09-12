const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // or another email service provider
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Setup email data
const mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com",
  subject: "Hello from Node.js",
  text: "Hello Node!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
