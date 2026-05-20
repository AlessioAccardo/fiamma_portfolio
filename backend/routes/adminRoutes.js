const express = require('express');
const AdminController = require('../controllers/adminController');
const adminAuth = require('../auth/authMiddleware');
const router = express.Router();

router.get('/data', adminAuth, AdminController.getUserData);

module.exports = router;