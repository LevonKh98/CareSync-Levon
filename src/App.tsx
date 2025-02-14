import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLogin from "./frames/StaffLogin";
import StaffPage from "./frames/StaffPage";
import AdminLogin from "./frames/AdminLogin";
import AdminPage from "./frames/AdminPage";
import Help from "./frames/Help";
<<<<<<< HEAD
import FAQ from "./frames/FAQ";
=======
import ForgotPassword from "./components/ForgotPassword";
>>>>>>> origin/Edita's-Branch

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login Page comment here 2 */}
        {/* Route for the Login Page comment here 2 */}
        <Route path="/" element={<StaffLogin />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
<<<<<<< HEAD
        <Route path="/adminPage" element={<AdminPage />} />

        <Route path="/help" element={<Help />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQ />} />
=======

        {/* Route for the AdminPage Page ff */}
        <Route path="/adminPage" element={<AdminPage />} />

        <Route path="/help" element={<Help />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
>>>>>>> origin/Edita's-Branch
      </Routes>
    </Router>
  );
}

export default App;
