# 💳 Digital Wallet Project (React + MockAPI)

**A secure, responsive digital wallet application built with React, Tailwind CSS, and MockAPI.  
Supports user authentication, account management, transaction history, and balance tracking.**

---

## 1. 🔐 Authentication & Authorization

* **JWT-based Authentication (Mocked)**
  * Issue **Access** & **Refresh Tokens** via MockAPI.
  * Refresh tokens enable silent re-login using React Query.
* **Protected Routes**
  * Only authenticated users can access Wallet Dashboard, Transactions, and Profile pages.
* **Role & Permissions**
  * Standard users: access only their wallet & transactions.
  * Admins: full system access (if implemented).
* **Frontend Handling**
  * Zustand for global auth state.
  * Redirect to login if user is unauthenticated.

---

## 2. 💰 Wallet Features

* **Account Management**
  * View current balance, deposit, and withdraw funds.
* **Transaction History**
  * Record all transactions: deposit, withdrawal, transfer.
  * Filter by date, type, and amount.
* **Fund Transfers**
  * Transfer money to other users (mocked via MockAPI).
* **Notifications**
  * Visual feedback on success/failure of transactions.

---

## 3. 🖥️ Frontend UX/UI

* **Modern Responsive Design**
  * React + Tailwind CSS  
  * Mobile-first & desktop-ready
* **Interactive Components**
  * Modals for deposit/withdraw  
  * Filters & selects for transaction types
* **Optimized Workflow**
  * Clear wallet overview  
  * Quick transaction actions

---

## 4. ⚙️ Technical Stack

* **Frontend**: React + TypeScript  
  * **State Management**: Zustand  
  * **API Handling**: React Query  
  * **Forms & Validation**: React Hook Form + Zod  
* **Mock Backend**: MockAPI.io  
  * Resources: `/users`, `/wallets`, `/transactions`  
  * CRUD & pagination supported  
* **Styling**: Tailwind CSS  
* **Charts**: Recharts for transaction analytics

---

## 5. 📊 Analytics & Reporting

* **Balance Overview**
  * Display total balance and recent transactions.
* **Transaction Stats**
  * Filterable by type and date range.
  * Visual charts (Pie/Bar) for deposits vs withdrawals.

---

## 6. 🏁 Quick Start

---
# Install dependencies
npm install

# Run app
npm run dev

---


<img width="1326" height="621" alt="Image" src="https://github.com/user-attachments/assets/983de170-7bc0-488b-913d-0e15ba8f64f6" />

<img width="1325" height="614" alt="Image" src="https://github.com/user-attachments/assets/b8dfee66-4b0a-4b4e-97e5-f1d3b89614db" />

<img width="1337" height="628" alt="Image" src="https://github.com/user-attachments/assets/24b6bb22-aa49-401a-92f5-2a6d958c4830" />

<img width="1339" height="626" alt="Image" src="https://github.com/user-attachments/assets/9360f39b-8c20-42fa-97cd-5c75c523ec3b" />

<img width="1341" height="626" alt="Image" src="https://github.com/user-attachments/assets/d720dbcf-77b8-4a75-acfb-ebee1ff70222" />

<img width="1340" height="626" alt="Image" src="https://github.com/user-attachments/assets/faecea34-f9a5-4c93-8f00-184a02c5a97c" />

<img width="1339" height="628" alt="Image" src="https://github.com/user-attachments/assets/6b7bf933-eda8-4cbc-8d6f-1f03f0b39341" />

<img width="1341" height="629" alt="Image" src="https://github.com/user-attachments/assets/539bda11-e9c7-4b6e-aeec-caf7ff00eec6" />
