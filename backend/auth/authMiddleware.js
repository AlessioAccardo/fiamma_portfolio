const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: `Non sei autorizzato. Fai il login nuovamente.`});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (!tokenDecode.id) {
            return res.status(401).json({ success: false, message: `Non sei autorizzato. Fai il login nuovamente.`});
        }
        
        req.adminId = tokenDecode.id;

        next();
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message});
    }
}

module.exports = adminAuth;