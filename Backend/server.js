const express = require("express");
const cors = require("cors"); 
const bcrypt = require("bcrypt");
const db = require("./db"); // MySQL Database Connection
const { verifyStaffCredentials, verifyAdminCredentials } = require("./queries");

const app = express();
app.use(cors()); // Enable CORS for frontend connection
app.use(express.json()); // Parse JSON requests

// =============================
// 🔹 Staff Login API
// =============================
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
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
          console.error("❌ Error comparing passwords:", error);
          return res.status(500).json({ success: false, message: "Error validating credentials" });
        }

        if (isMatch) {
          console.log("✅ Login successful!");
          res.json({ success: true, message: "Login successful" });
        } else {
          console.log("❌ Invalid password");
          res.status(401).json({ success: false, message: "Invalid username or password" });
        }
      });
    } else {
      console.log("❌ User not found");
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
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
  }

  verifyAdminCredentials(username, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      const user = results[0];

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
});
