const adminModel = require('../auth/admin');

class AdminController {
    static async getUserData(req, res) {
        try {
            const { adminId } = req;
            const admin = await adminModel.findById(adminId);

            if (!admin) {
                return res.status(400).json({ success: false, message: `Admin non trovato` });
            }

            res.json({ 
                success: true,
                adminData: {
                    name: admin.name,
                    isAccountVerified: admin.isAccountVerified
                } 
            });

        } catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = AdminController;