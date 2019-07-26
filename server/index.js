const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('./config.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-mail', (req, res) => {
  const { transportStr, sendTo } = config;

  const transporter = nodemailer.createTransport(transportStr);
  const htmlBody = `
  <strong>Sender:</strong> ${req.body.fullName}<br>
  <strong>Email:</strong> ${req.body.email}
  <p>${req.body.message}</p>
`;


  const mailOptions = {
    to: sendTo,
    subject: req.body.subject,
    text: req.body.message,
    html: htmlBody,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.end();
});

app.listen(4040, function() {
  console.log("Email server started on port 4040");
});
