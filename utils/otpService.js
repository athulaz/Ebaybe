// utils/otpService.js
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOTP = async (to, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    console.log(`OTP sent to ${to}`);
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
};

module.exports = { sendOTP, generateOTP };
