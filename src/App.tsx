import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLogin from "./frames/StaffLogin";
import StaffPage from "./frames/StaffPage";
import AdminLogin from "./frames/AdminLogin";
import AdminPage from "./frames/AdminPage";
import Help from "./frames/Help";
import FAQ from "./frames/FAQ";
import ForgotPage from "./frames/ForgotPage";
import ResetPasswordPage from "./frames/ResetPass";
import AddUser from "./frames/AddUser";
import RemoveUser from "./frames/RemoveUser.tsx";
import EditUser from "./frames/EditUser.tsx";
import EditUserList from "./frames/EditUserList.tsx";
import ManageAppointments from "./components/ManageAppointments";

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
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/remove-user" element={<RemoveUser />} />
        <Route path="/edit-user-list" element={<EditUserList />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/manage-appointments" element={<ManageAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;
