const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminModel = require('./admin');
const transporter = require('../config/nodemailer');


class AuthController {
    static async register(req, res) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: `Missing details` })
        }

        try {
            const existingAdmin = await adminModel.findOne({ email });
            if (existingAdmin) {
                return res.json({ success: false, message: `Admin gia' esistente` });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const admin = new adminModel({ name, email, password: hashedPassword });
            await admin.save();

            const token = jwt.sign(
                { id: admin._id },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 2 * 60 * 60 * 1000
            });

            // Sending welcome email
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: "Benvenuto negli Admin di FiammaPasta",
                text: `Il tuo account è stato creato correttamente con email: ${email}`
            }

            await transporter.sendMail(mailOptions);

            return res.status(201).json({ success: true });

        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    }


    static async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: `Email e password sono obbligatori` });
        }

        try {
            const admin = await adminModel.findOne({ email });
            if (!admin) {
                return res.json({ success: false, message: `Admin non esistente` });
            }

            const isMatch = await bcrypt.compare(password, admin.password)
            if (!isMatch) {
                return res.json({ success: false, message: `Password non valida` });
            }

            const token = jwt.sign(
                { id: admin.id },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            );

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                maxAge: 2 * 60 * 60 * 1000
            });

            return res.status(200).json({ success: true });

        } catch (error) {
            return res.status(401).json({ success: false, message: error.message });
        }
    }


    static async logout(req, res) {
        try {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            });

            return res.status(200).json({ success: true, message: `Logged Out` });
        } catch (error) {
            return res.json({ success: false, message: error.message });
        }
    }


    // Send Verification OTP to Admin's Email
    static async sendVerifyOtp(req, res) {
        try {
            const { adminId } = req;
            const admin = await adminModel.findById(adminId);
            if (admin.isAccountVerified) {
                return res.json({ success: false, message: `L'account e' gia' stato verificato`});
            }

            // creo random OTP 
            const otp = String(Math.floor(100000 + Math.random() * 900000));

            // salvo nel db
            admin.verifyOtp = otp;
            
            // imposto la scadenza di 10 minuti
            admin.verifyOtpExpiresAt = Date.now() + 1000 * 60 * 10;

            await admin.save();

            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: admin.email,
                subject: "Codice Verifica Account",
                text: `Usa questo codice per verificare il tuo account. Il tuo codice di verifica OTP è: ${otp}.`
            }

            await transporter.sendMail(mailOptions);

            return res.status(201).json({ success: true, message: `Codice OTP mandato correttamente all'email`});
            
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    // Verify Email using OTP 
    static async verifyEmail(req, res) {
        const { adminId } = req;
        const { otp } = req.body;

        if (!adminId || !otp) {
            return res.json({ success: false, message: `Credenziali mancanti`});

        }

        try {
            const admin = await adminModel.findById(adminId);
            if (!admin) {
                return res.json({ success: false, message: `Admin non trovato`});
            }

            if (admin.verifyOtp === "" || admin.verifyOtp !== otp) {
                return res.json({ success: false, message: `Otp non valido`});
            }

            if (admin.verifyOtpExpiresAt < Date.now()) {
                return res.json({ success: false, message: `Otp scaduto`});
            }

            admin.isAccountVerified = true;
            admin.verifyOtp = "";
            admin.verifyOtpExpiresAt = 0;

            await admin.save();

            return res.json({ success: true, message: `Email verificata con successo`});


        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    // check if admin is authenticated
    static async isAuthenticated(req, res) {
        try {
            return res.json({ success: true });
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    static async sendResetOtp(req, res) {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: `Email richiesta` });
        }

        try {
            const admin = await adminModel.findOne({ email });
            if (!admin) {
                return res.status(400).json({ success: false, message: `Admin non trovato` });
            }

            // creo random OTP 
            const otp = String(Math.floor(100000 + Math.random() * 900000));

            // salvo nel db
            admin.resetOtp = otp;
            
            // imposto la scadenza di 10 minuti
            admin.resetOtpExpiresAt = Date.now() + 1000 * 60 * 10;

            await admin.save();

            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: admin.email,
                subject: "Codice Reset Password",
                text: `Usa questo codice per effettuare il reset della tua password. Il tuo codice di verifica OTP è: ${otp}.`
            }

            await transporter.sendMail(mailOptions);

            return res.status(201).json({ success: true, message: `Codice OTP mandato correttamente all'email`});

        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }

    // Reset admin password
    static async resetPassword(req, res) {
        const { email, otp, newPassword } = req.body;

        if(!email || !otp || !newPassword) {
            return res.status(400).json({ success: false, message: `Email, otp e nuova password sono richiesti` });
        }

        try {
            const admin = await adminModel.findOne({ email });
            if (!admin) {
                return res.status(400).json({ success: false, message: `Admin non trovato` });
            }

            if (admin.resetOtp === "" || admin.resetOtp !== otp) {
                return res.status(400).json({ success: false, message: `Invalid OTP` });
            }

            if (admin.resetOtpExpiresAt < Date.now()) {
                return res.status(400).json({ success: false, message: `OTP scaduto` });
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            admin.password = hashedPassword;
            admin.resetOtp = "";
            admin.resetOtpExpiresAt = 0;

            await admin.save();

            return res.json({ success: true, message: `Password aggiornata con successo`});
            
        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = AuthController;
