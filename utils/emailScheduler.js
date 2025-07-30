const cron = require('node-cron');
const Campaign = require('../models/Campaign');
const sendEmail = require('./sendEmail');

// Runs every minute
cron.schedule('* * * * *', async () => {
  try {
    const now = new Date();
    const campaigns = await Campaign.find({
      scheduledTime: { $lte: now },
      status: 'pending'
    });

    for (const campaign of campaigns) {
      for (const recipient of campaign.recipients) {
        if (recipient.status === 'pending') {
          const result = await sendEmail({
            to: recipient.email,
            subject: campaign.title,
            html: campaign.message
          });

          // Update recipient status if sent
          if (result.success) {
            recipient.status = 'sent';
          } else {
            recipient.status = 'failed';
          }
        }
      }

      // Update overall campaign status
      campaign.status = 'sent';
      await campaign.save();
      console.log(`Campaign "${campaign.title}" emails sent.`);
    }
  } catch (error) {
    console.error('Error in cron job:', error);
  }
});
