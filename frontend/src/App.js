import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
 const [Name,setName]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://auto-mailerx.onrender.com/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to: email,Name:Name}),
      });

      const text = await res.text();
      setResponseMsg(text);
      setEmail(""); // clear input
    } catch (err) {
      setResponseMsg("❌ Error sending email");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>📬 Send Email</h2>
      <form onSubmit={handleSubmit}>
        <label>Receiver Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter receiver's email"
        />
        <br></br>
        <br></br>
        <label>Receiver name:</label><br />
        <input
          type="string"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter receiver's name"
        />
        <br /><br />
        <button type="submit">Send Email</button>
      </form>

      <p style={{ marginTop: "20px", color: "green" }}>{responseMsg}</p>
    </div>
  );
}

export default App;
