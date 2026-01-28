# Todo Management System - Frontend

## Overview
The **Todo Management Frontend** is a modern Single Page Application (SPA) built with **React** and **Vite**. It provides a user-friendly interface for managing tasks, featuring a responsive design using **Bootstrap** and secure routing for authenticated users.

## 🛠 Tech Stack
* **Framework:** React 19
* **Build Tool:** Vite
* **Styling:** Bootstrap 5
* **Routing:** React Router DOM 7
* **HTTP Client:** Axios
* **State Management:** React Hooks (useState, useEffect)

## ✨ Features
* **Responsive UI:** Clean and responsive layout using Bootstrap.
* **Secure Authentication:** Login and registration forms that integrate with the backend JWT auth.
* **Protected Routes:** Prevents unauthorized access to todo management pages.
* **Dynamic Role Handling:** UI elements (like "Add", "Delete", "Update") conditionally render based on the logged-in user's role (Admin vs User).
* **Task Management:**
    * View list of all todos with status badges.
    * Mark tasks as completed or pending.
    * Add and edit todo forms (Admin only).

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm (Node Package Manager)

### 1. Installation
Navigate to the frontend directory and install dependencies:
```bash
npm install
```

### 2. Configuration
Ensure the backend API URL is correctly set in the service files:
* **Auth Service:** `src/services/AuthService.js` → `http://localhost:8080/api/auth`
* **Todo Service:** `src/services/TodoService.js` → `http://localhost:8080/api/todos`

### 3. Run the Development Server
Start the Vite development server:
```bash
npm run dev
```

The application will typically run on `http://localhost:5173` (check the terminal output for the exact port).

## 📂 Project Structure
```
src/
├── components/       # Reusable UI components (Header, Footer, Todo Form, List)
├── pages/           # Page layouts (Homepage)
├── services/        # API calls (AuthService, TodoService)
├── App.jsx          # Main application component with routing
└── main.jsx         # Entry point
```

## 🔑 Usage
1. **Register:** Create a new account via the "Register" link in the navbar.
2. **Login:** Log in with your credentials.
3. **Manage Todos:**
   * Users can view the list and toggle completion status.
   * Admins (users with `ROLE_ADMIN`) have additional buttons to add, update, and delete tasks.
