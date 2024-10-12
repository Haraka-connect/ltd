const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// Routes for services
router.get('/', servicesController.getAllServices);
router.post('/', servicesController.createService);

module.exports = router;