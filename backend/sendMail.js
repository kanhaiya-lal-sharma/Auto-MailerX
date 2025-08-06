require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendMail(to, subject, html) {
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: process.env.YAHOO_EMAIL,
      pass: process.env.YAHOO_PASS,
    },
  });

  await transporter.sendMail({
   from: `"Kanhaiya Lal Sharma 👨‍💻 | Full Stack Developer" <${process.env.YAHOO_EMAIL}>`,
   to,
    subject,
    html, 
    attachments: [
      {
        filename: "Resume_kanhaiya.pdf",          // 🧾 PDF file attachment
        path: "files/KANHAIYA_CV-3.pdf",      // 🔗 PDF file path
      },
    
    ],
  });
}

module.exports = sendMail;

