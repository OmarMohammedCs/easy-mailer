
# @omarcs/easy-node-mailer

📧 A simple Node.js wrapper around `nodemailer` for sending email notifications easily.

## 📦 Installation

```bash
npm install @omarcs/easy-node-mailer
```

## 🚀 Setup

Before sending emails, you need to configure the transporter:

```js
const { setup, sendMail } = require('@omarcs/easy-node-mailer');

// Setup with your email credentials
setup({
  service: 'gmail',
  user: 'your_email@gmail.com',
  pass: 'your_email_password',
});
```

> ⚠️ **Note:** For Gmail, make sure "Less secure apps" access is enabled or use an App Password if 2FA is on.

## ✉️ Send Email

```js
sendMail(
  'your_email@gmail.com', // From
  'receiver@example.com', // To
  'Hello from easy mailer!', // Subject
  'This is a test email sent using easy-node-mailer.' // Text
);
```

## 🔧 License

ISC
