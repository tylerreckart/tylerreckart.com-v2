const aws = require('aws-sdk');
const ses = new aws.SES();
const myEmail = process.env.EMAIL;
const toEmail = process.env.TO_EMAIL;
const domain = process.env.DOMAIN;

function success(code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': domain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  };
}

function error(code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': domain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(payload.message)
  };
}

function generateParams(body) {
  const {
    fullName,
    email,
    messageSubject,
    message
  } = JSON.parse(body);

  const dataStr = `
  Sent by ${fullName}\n
  From Email: ${email}\n
  ${message}
`;

  return {
    Source: myEmail,
    Destination: { ToAddresses: [toEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${dataStr}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `${messageSubject}`
      }
    }
  };
}

module.exports.send = async (event) => {
  try {
    const params = generateParams(event.body);
    const data = await ses.sendEmail(params).promise();

    return success(200, data);
  } catch (err) {
    return error(500, err);
  }
};
