const express = require('express');

const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverViews);
router.get('/tour/:slug', viewsController.getTour);

module.exports = router;
