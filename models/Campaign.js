const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  email: String,
  status: { type: String, default: 'pending' }
});

const campaignSchema = new mongoose.Schema({
  title: String,
  message: String,
  recipients: [recipientSchema],
  scheduledTime: Date,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Campaign', campaignSchema);
