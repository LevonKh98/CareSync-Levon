const express = require("express");
const cors = require("cors"); 
const bcrypt = require("bcrypt");
<<<<<<< HEAD
const { verifyStaffCredentials, verifyAdminCredentials } = require("./queries");
const db = require("./db"); // MySQL Database Connection
const app = express();
app.use(cors()); // Enable CORS for frontend connection
app.use(express.json()); // Parse JSON requests
const nodemailer = require("nodemailer");
require("dotenv").config(); 
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

=======
const db = require("./db"); // MySQL Database Connection
const { verifyStaffCredentials, verifyAdminCredentials } = require("./queries");

const app = express();
app.use(cors()); // Enable CORS for frontend connection
app.use(express.json()); // Parse JSON requests

// =============================
// 🔹 Staff Login API
// =============================
>>>>>>> origin/Edita's-Branch
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  verifyStaffCredentials(username, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      const user = results[0];

      bcrypt.compare(password, user.password, (error, isMatch) => {
        console.log("🔍 Password comparison result:", isMatch);

        if (error) {
<<<<<<< HEAD
          console.error("Error comparing passwords:", error);
=======
          console.error("❌ Error comparing passwords:", error);
>>>>>>> origin/Edita's-Branch
          return res.status(500).json({ success: false, message: "Error validating credentials" });
        }

        if (isMatch) {
<<<<<<< HEAD
          res.json({ success: true, message: "Login successful" });
        } else {
=======
          console.log("✅ Login successful!");
          res.json({ success: true, message: "Login successful" });
        } else {
          console.log("❌ Invalid password");
>>>>>>> origin/Edita's-Branch
          res.status(401).json({ success: false, message: "Invalid username or password" });
        }
      });
    } else {
<<<<<<< HEAD
=======
      console.log("❌ User not found");
>>>>>>> origin/Edita's-Branch
      res.status(401).json({ success: false, message: "Invalid username or password" });
    }
  });
}); // 

// =============================
// 🔹 Admin Login API
// =============================
app.post("/api/loginAdmin", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required" });
  }

  verifyAdminCredentials(username, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      const user = results[0];
<<<<<<< HEAD
=======

>>>>>>> origin/Edita's-Branch
      bcrypt.compare(password, user.password, (error, isMatch) => {
        if (error) {
          console.error("Error comparing passwords:", error);
          return res.status(500).json({ success: false, message: "Error validating credentials" });
        }

        if (isMatch) {
          res.json({ success: true, message: "Login successful" });
        } else {
          res.status(401).json({ success: false, message: "Invalid username or password" });
        }
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid username or password" });
    }
  });
});

// =============================
// 🔹 API: Fetch Today's Appointments
// =============================
app.get("/api/todays-appointments", (req, res) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const query = "SELECT * FROM appointments WHERE date = ?";
  db.query(query, [today], (err, results) => {
    if (err) {
      console.error("Error fetching appointments:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.json({ success: true, data: results });
  });
});

<<<<<<< HEAD
// -----------------------------------------------------------------------------------
// Email functionality
app.post("/api/send-email", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // Nodemailer Transporter Setup
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Use 465 for SSL or 587 for TLS
    secure: true, // Use `true` for 465, `false` for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: email, // Sender's email
    to: process.env.RECEIVER_EMAIL, // Your email
    subject: `New Help Request from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// -----------------------------------------------------------------------------------

const PORT = 5000; // Ensure this is the correct port for your backend
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
=======
// =============================
// 🔹 Look Up Patient API
// =============================
app.get("/api/patients", (req, res) => {
  const { query } = req.query; // Get search input from frontend

  if (!query) {
    return res.status(400).json({ success: false, message: "Search query required" });
  }

  // Search patients by name or ID
  const sql = "SELECT * FROM patients WHERE name LIKE ? OR CAST(patient_id AS CHAR) = ?";
db.query(sql, [`%${query}%`, query.toString()], (err, results) => {
    if (err) {
      console.error("❌ Error fetching patients:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length === 0) {
      return res.json({ success: false, message: "No patients found" });
    }

    res.json({ success: true, data: results });
  });
});

// =============================
// 🔹 Start the Server
// =============================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
>>>>>>> origin/Edita's-Branch
});
