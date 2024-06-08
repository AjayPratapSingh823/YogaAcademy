const UserSchema = require('../models/User');
const nodemailer = require('nodemailer');
const express = require('express');
const crypto = require('crypto');
require('dotenv').config();

const ForgetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await UserSchema.findOne({ email });
    if (!user) {
        return res.status(400).send('User not found');
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOption = {
        to: user.email,
        from: 'singhajaysingh545@gmail.com',
        subject: 'Password Reset',
        text: `Please click on the following link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`,
    };

    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.error('There was an error: ', err);
            return res.status(500).send('An error occurred while sending the email.');
        } else {
            return res.status(200).send('Recovery email sent');
        }
    });
};

module.exports = { ForgetPassword };
