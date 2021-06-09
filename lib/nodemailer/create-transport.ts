import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transporter;
