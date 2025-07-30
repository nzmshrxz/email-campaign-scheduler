const Campaign = require('../models/Campaign');

// Show create campaign form
exports.showCreateForm = (req, res) => {
  res.render('create');
};

// Create a new campaign
exports.createCampaign = async (req, res) => {
  try {
    const { title, message, recipients, scheduledTime } = req.body;

    const newCampaign = new Campaign({
      title,
      message,
      recipients: recipients.split(',').map(email => ({ email: email.trim(), status: 'pending' })),
      scheduledTime,
      status: 'pending'
    });

    await newCampaign.save();
    res.redirect('/campaigns');
  } catch (err) {
    console.error(err);
    res.send('Failed to save campaign');
  }
};

// View all campaigns
exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().lean();
    res.render('list', { campaigns });
  } catch (err) {
    res.send('Error fetching campaigns');
  }
};
