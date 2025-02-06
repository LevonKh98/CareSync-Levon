import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLogin from "./frames/StaffLogin";
import StaffPage from "./frames/StaffPage";
import AdminLogin from "./frames/AdminLogin";
import AdminPage from "./frames/AdminPage";
import Help from "./frames/Help";
import FAQ from "./frames/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaffLogin />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
