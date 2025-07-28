# CareSync – Healthcare Appointment System

## Overview
CareSync is a **full-stack healthcare appointment and records management system** designed to streamline patient scheduling, record management, and administrative workflows. The platform uses **role-based access control (RBAC)** to differentiate features for staff, doctors, and administrators, ensuring data security and proper access management.

This project was built as part of a **team university project**. It was developed locally and later uploaded to GitHub, which is why the **contribution graph does not reflect the full development timeline**.

---

## Key Features
- **Role-Based Access Control (RBAC):** Different dashboards for Admins, Doctors, and Staff.
- **User Authentication:** JWT-based authentication with secure session handling.
- **Email Notifications:** Password reset and account-related email notifications.
- **Appointment Scheduling:** 
  - Conflict detection (no overlapping appointments).
  - Validation for weekdays, working hours, and minimum time gaps.
- **Patient Record Management:** Secure patient lookup, record creation, and updates.
- **Real-Time Updates:** Data refresh without page reloads using efficient API calls.
- **User-Friendly Interface:** Built with **Chakra UI** for a clean and responsive UI.
- **Cloud Database Integration:** Uses **AWS RDS (MySQL)** for scalable data storage.

---

## Tech Stack
- **Frontend:** React, TypeScript, Chakra UI.
- **Backend:** Node.js, Express.js.
- **Database:** MySQL (hosted on AWS RDS).
- **Authentication & Security:** JWT (JSON Web Tokens), bcrypt for password hashing.
- **Tools & Practices:** Git, GitHub, REST APIs, Agile (Scrum).

---

## My Contributions
As part of the development team, I worked on:
- Designing and implementing **backend REST APIs** for appointments and patient data.
- **Database design and integration** with AWS RDS (MySQL).
- Developing **appointment scheduling logic**, including validations for time conflicts and business rules.
- Building **frontend components** for appointment forms and patient lookup.
- Collaborating on **UI improvements** and implementing form validation for better user experience.

---

## Future Improvements
- Implement **analytics dashboard** for administrators (e.g., appointment trends).
- Expand the system to include **billing and insurance modules**.
- Add **real-time chat** between patients and doctors.

---



