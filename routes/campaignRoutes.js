const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

// Routes
router.get('/create', campaignController.showCreateForm);
router.post('/campaigns', campaignController.createCampaign);
router.get('/campaigns', campaignController.getAllCampaigns);

module.exports = router;
