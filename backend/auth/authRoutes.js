const express = require('express');
const AuthController = require('./authController');
const adminAuth = require('./authMiddleware');

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/send-verify-otp', adminAuth, AuthController.sendVerifyOtp);
router.post('/verify-account', adminAuth, AuthController.verifyEmail);
router.post('/is-auth', adminAuth, AuthController.isAuthenticated);
router.post('/send-reset-otp', AuthController.sendResetOtp);
router.post('/reset-password', AuthController.resetPassword);

module.exports = router;