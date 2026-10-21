const express = require('express');
const router = express.Router();
const ctrlApplications = require('../controllers/applications');

router
    .route('/applications')
    .get(ctrlApplications.applicationsList)

router
    .route('/applications/:applicationid')
    .get(ctrlApplications.applicationsReadOne)

module.exports = router;
