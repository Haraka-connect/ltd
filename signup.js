const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, password, confirm_password, service } = req.body;

        if (password !== confirm_password) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        user = new User({
            firstname,
            lastname,
            email,
            phone,
            password,
            service
        });

        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};