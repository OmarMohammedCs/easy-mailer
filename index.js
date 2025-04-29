// Import the nodemailer package to handle sending emails
const nodemailer = require('nodemailer');

// Define a variable to store the transporter (email sender instance)
let transporter;

/**
 * Sets up the transporter with the email service and authentication.
 * This must be called before sending any emails.
 * 
 * @param {Object} config - Configuration object
 * @param {string} config.service - Email service (e.g., 'gmail')
 * @param {string} config.user - Email address used to send emails
 * @param {string} config.pass - Password or app-specific password
 */
function setup(config) {
    transporter = nodemailer.createTransport({
        service: config.service || 'gmail', // Default to Gmail if no service provided
        auth: {
            user: config.user, // Email address for authentication
            pass: config.pass, // Password or App password
        },
    });
}

/**
 * Sends an email using the configured transporter
 * 
 * @param {string} from - Sender email address
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject line
 * @param {string} text - Plain text body of the email
 */
async function sendMail(from, to, subject, text) {
    // Check if setup() was called before sending email
    if (!transporter) {
        throw new Error('Transporter not initialized. Call setup() first.');
    }

    // Define the email content
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
    };

    // Try to send the email and catch any errors
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Export the setup and sendMail functions so they can be used in other files
module.exports = {
    setup,
    sendMail,
};
