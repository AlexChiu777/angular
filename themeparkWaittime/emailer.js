"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
function main(subject, text) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alex.kl.chiu@gmail.com", // generated ethereal user
      pass: "azkiezavwmdcezkw" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "alex.kl.chiu@gmail.com", // list of receivers
    subject: subject, // Subject line
    // text: "Hello world?", // plain text body
    html: text // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}


module.exports = {
    sendMail : main
};

