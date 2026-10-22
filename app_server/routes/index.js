const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlAuth = require('../controllers/auth');
const ctrlDashboard = require('../controllers/dashboard');

/* Main page */
router.get('/', ctrlMain.landing);

/* Auth pages */
router.get('/login', ctrlAuth.login);
router.post('/login', ctrlAuth.loginPost);
router.get('/register', ctrlAuth.register);
router.post('/register', ctrlAuth.registerPost);

/* Dashboard */
router.get('/dashboard', ctrlDashboard.index);

module.exports = router;
