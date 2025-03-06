import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLogin from "./frames/StaffLogin";
import StaffPage from "./frames/StaffPage";
import AdminLogin from "./frames/AdminLogin";
import AdminPage from "./frames/AdminPage";
import Help from "./frames/Help";
import FAQ from "./frames/FAQ";
import Appointments from "./frames/Appointments";
import ForgotPage from "./frames/ForgotPage";
import ResetPasswordPage from "./frames/ResetPass";
import AddUser from "./frames/AddUser";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login Page comment here 2 */}
        {/* Route for the Login Page comment here 2 */}
        <Route path="/" element={<StaffLogin />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
