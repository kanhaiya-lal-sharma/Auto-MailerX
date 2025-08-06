const express = require("express");
const sendMail = require("./sendMail");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://auto-mailerx.vercel.app", 
}));

app.post("/send-mail", async (req, res) => {
  const { to,Name} = req.body;

 const htmlContent = `
  <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6;">
    <p>Hi ${Name},</p>

    <p>
      I’m <strong>Kanhaiya Lal Sharma</strong>, a <strong>Full Stack Developer</strong> with <strong>1 years</strong> of experience in building scalable web applications using <strong>Node.js, Express, MongoDB, and React.js</strong>.
    </p>

    <p>
      I’ve developed secure CRM platforms with <strong>JWT authentication</strong>, <strong>role-based access</strong>, and clean REST APIs, along with responsive UIs using <strong>React Hooks</strong> and modular components.
    </p>

    <p>
      I hold an <strong>MCA from KIIT Bhubaneswar</strong> and am currently open to new opportunities where I can contribute and grow.
    </p>

    <p>
      I've attached my resume — would love to connect if there's a suitable role.
    </p>

    <br />
    <p>
      Best regards,<br>
      <strong>Kanhaiya Lal Sharma</strong><br>
      📞 +91-8851658991<br>
      ✉ imkanhaiya@yahoo.com<br>
      📍 Ghaziabad, India
    </p>
  </div>
`;


  try {
    await sendMail(to, "Full Stack Developer | 1+ YOE | Node.js & React.js", htmlContent);
    res.send("✅ Email sent successfully");
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).send("Failed to send email");
  }
});

app.listen(4001, () => {
  console.log("🚀 Server running on port 4001");
});



