# 📧 Email Campaign Scheduler

A Node.js + Express web application to create, schedule, and send email campaigns using MongoDB and Handlebars.

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
```
## 🚀 How to Use

git clone https://github.com/nzmshrxz/email-campaign-scheduler.git
cd email-campaign-scheduler

## Install dependencies
npm install

## Set up .env file

Create a .env file in the root based on .env.example. It should include:

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
MONGO_URI=your_mongo_connection_string

## Run the app
npm start
Visit http://localhost:3000/create to create a campaign.

## 📬 Scheduling Emails
This app uses node-cron to automatically send emails at the scheduled time.
Once a campaign is created with a future scheduled time, the job scheduler checks every minute and dispatches emails accordingly.

✅ No manual action is needed after scheduling — emails are sent automatically based on the scheduled time.
