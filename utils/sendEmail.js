const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `"Campaign Mailer" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Send email failed:', error);
    return { success: false, error };
  }
};

module.exports = sendEmail;
