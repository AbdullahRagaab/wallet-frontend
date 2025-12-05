# 💳 Digital Wallet Project (React + Node.js + MongoDB)

**A full-stack digital wallet application with secure authentication, transaction management, and modern responsive UI.  
Built with React, Node.js, Express, and MongoDB.**

---

## 🖥️ Frontend (Client)

**Technologies Used:**
- React 18 + TypeScript
- React Router DOM v6
- Zustand (State Management)
- Axios (HTTP Requests)
- JWT Authentication (`jwt-decode`)
- Tailwind CSS + PostCSS + Autoprefixer (Styling)
- Vite (Build Tool)
- ESLint + eslint-plugin-react (Linting)
- clsx (Utility class management)


---


## ⚙️ Backend (Server)

**Technologies Used:**
- Node.js + Express
- MongoDB with Mongoose
- bcryptjs (Password Hashing)
- jsonwebtoken (JWT Auth)
- Helmet (Security Headers)
- CORS (Cross-Origin Requests)
- express-rate-limit (Rate Limiting)
- validator.js (Validation)
- Morgan (Logging)
- dotenv (Environment Variables)
- Nodemon + ESLint (Dev Tools)

---

## 🔐 Authentication & Authorization

- JWT-based authentication (Access + Refresh tokens)
- Role-based access: `user` vs `admin`
- Protected routes for sensitive pages
- Users can only access/edit their own data
- Admins can manage all users & transactions

---

## 💳 Wallet & Transactions

- Users can add, view, update, and delete wallet transactions
- **Transaction attributes:**
  - `amount`
  - `type` (`income` / `expense`)
  - `category`
  - `date`
  - `description`
- Balance automatically calculated
- CRUD operations via backend API

---

## 📊 Dashboard & Analytics

- Transaction history table
- Total income vs total expenses
- Charts for visual insights (optional: Recharts or Chart.js)
- Filter transactions by date, category, or type

---

## 👥 Users & Profiles

- User profile management (`full_name`, `email`, `username`, `profile_picture`)
- Password hashing with bcryptjs
- JWT authentication for secure sessions
- Admin panel to manage all users

---

## 🖌️ UI / UX

- Modern, responsive design (mobile & desktop)
- Tailwind CSS for fast styling
- Interactive components: modals, forms, select dropdowns
- Clear navigation with React Router v6
- Status indicators and interactive elements for better workflow


---


<img width="1326" height="621" alt="Image" src="https://github.com/user-attachments/assets/983de170-7bc0-488b-913d-0e15ba8f64f6" />

<img width="1325" height="614" alt="Image" src="https://github.com/user-attachments/assets/b8dfee66-4b0a-4b4e-97e5-f1d3b89614db" />

<img width="1337" height="628" alt="Image" src="https://github.com/user-attachments/assets/24b6bb22-aa49-401a-92f5-2a6d958c4830" />

<img width="1339" height="626" alt="Image" src="https://github.com/user-attachments/assets/9360f39b-8c20-42fa-97cd-5c75c523ec3b" />

<img width="1341" height="626" alt="Image" src="https://github.com/user-attachments/assets/d720dbcf-77b8-4a75-acfb-ebee1ff70222" />

<img width="1340" height="626" alt="Image" src="https://github.com/user-attachments/assets/faecea34-f9a5-4c93-8f00-184a02c5a97c" />

<img width="1339" height="628" alt="Image" src="https://github.com/user-attachments/assets/6b7bf933-eda8-4cbc-8d6f-1f03f0b39341" />

<img width="1341" height="629" alt="Image" src="https://github.com/user-attachments/assets/539bda11-e9c7-4b6e-aeec-caf7ff00eec6" />
