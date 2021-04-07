const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = "";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rehmat@iplex.co",
    subject: "Thanks For Joining in!!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rehmat@iplex.co",
    subject: "Sorry to see you go",
    text: `hello ${name} we are sorry that you didn't find our service the best kindly give your valueable feedback so we can improve our service.Thank you`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
