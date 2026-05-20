require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/mongodb');
const authRoutes = require('./auth/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true}));

// API ENDPOINTS
app.use('/api/auth', authRoutes);
app.use('/api/user', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
})
