import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLogin from "./frames/StaffLogin";
import StaffPage from "./frames/StaffPage"; // Import StaffPage component
import AdminLogin from "./frames/AdminLogin";
import AdminPage from "./frames/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login Page comment here 2 */} 
        <Route path="/" element={<StaffLogin />} />

        {/* Route for the Staff Page */}
        <Route path="/staff" element={<StaffPage />} />

        {/* Route for the AdminLogin Page */}
        <Route path="/adminLogin" element={<AdminLogin />} />

        {/* Route for the AdminPage Page */}
        <Route path="/adminPage" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
