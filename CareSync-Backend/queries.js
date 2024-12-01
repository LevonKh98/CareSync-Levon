const db = require("./db"); // Import your database connection

// Function to verify user credentials
const verifyStaffCredentials = (username, password, callback) => {
  const query = "SELECT * FROM users WHERE username = ? AND password = ? AND role NOT IN ('Admin', 'admin')";
  db.query(query, [username, password], callback); // Execute query
};

// Function to verify user credentials
const verifyAdminCredentials = (username, password, callback) => {
  const query = "SELECT * FROM users WHERE username = ? AND password = ? AND role IN ('Admin', 'admin')";
  db.query(query, [username, password], callback); // Execute query
};

module.exports = {
  verifyStaffCredentials,
  verifyAdminCredentials
};
