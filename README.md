# 📧 Email Campaign Scheduler

This is a Node.js-based Email Campaign Scheduler with scheduling and delivery tracking.

## 💻 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Express Handlebars
- Nodemailer
- node-cron
- vanilla-css


## 🚀 Features

- Schedule emails to multiple recipients.
- View all campaigns with status (pending, sent, failed).
- Delivery status logged for each recipient.

## 📂 MongoDB Schema

**Campaign Model**
```js
{
 title: String,
  message: String,
  recipients: [recipientSchema],
  scheduledTime: Date,
  status: { type: String, default: 'pending' }
}
