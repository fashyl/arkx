//
//  Middleware for the User model to to send a welcome email to newly registered users.
//
const nodemailer = require("nodemailer");
const { config } = require("../config/config");
const { codes } = require("../config/http");
// Create a transporter using Google's SMTP server
let transporter = nodemailer.createTransport({
  service: "gmail", // Nodemailer internally knows the host, port, and secure settings for Gmail's SMTP server,
  // so you don't need to specify them explicitly.
  // host: 'smtp.gmail.com',
  // port: 465,
  // secure: true, // true for 465, false for other ports
  auth: {
    user: config.mailAddress, // Your Gmail email address
    pass: config.mailAppPass, // Your app password
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

module.exports = async function sendMail(req, res) {
  // Message configuration
  let message = {
    from: {
      name: "Faraji, Souhail",
      address: config.mailAddress,
    },
    to: req.user.email,
    subject: "نهار غليض هذا.",
    text: "مْرحْبَا.",
    html: "<p>مْرحْبَا.</p>",
  };

  // Sending mail
  // sendreturns info if resolved, throws error if rejected.
  // sendMail(mailOptions: Mail.Options, callback: (err: Error | null, info: T) => void): void;
  // sendMail(mailOptions: Mail.Options): Promise<T>;
  try {
    const info = await transporter.sendMail(message);
    console.log('Mail sent successfully:', info);
    res.status(codes.CREATED).send("User registered successfully.");
  } catch (error) {
    console.log('Error sending mail:', error);
    res.status(codes.INTERNAL_SERVER_ERROR).send("Failed to send mail.")
  }
}