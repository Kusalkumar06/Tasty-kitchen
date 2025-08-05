# 🍽️ Tasty Kitchen

A responsive food ordering web application built with React, Redux, and Tailwind CSS.  
Users can browse restaurants, view food items, manage their cart, and place orders.

---

## 🚀 Features

### ✅ Authentication
- Login using username and password
- Secure JWT token-based session handling

### 🏠 Home Route
- Navbar with logo, Home, Cart, and Logout
- Responsive carousel with offers
- Popular Restaurants listing
- Sort by Rating (Highest ↔ Lowest)
- Pagination support for restaurant list
- Responsive across desktop, tablet, and mobile
- Highlighted current route in navbar

### 🍴 Restaurant Details
- On clicking a restaurant, view its full menu
- Individual food items with quantity controls
- Seamless loading indicators while fetching data

### 🛒 Cart
- View selected food items with quantity & price
- Update item quantities dynamically
- Auto-calculation of total order cost
- Persistent cart using `localStorage` even after refresh
- Responsive design for all screen sizes

### 🔐 Logout
- Secure logout functionality with session removal
- Redirects to login page on logout

### 🚫 Page Not Found
- User-friendly 404 route for invalid URLs

---

## 🧪 Tech Stack

- **Frontend:** React.js, Redux Toolkit
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Persistence:** localStorage
- **Authentication:** JWT Token (stored via `js-cookie`)

---

## 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Kusalkumar06/tasty-kitchen.git
   cd tasty-kitchen

🔐 Login Credentials
Note: Make sure the backend API supports login validation.

For testing, you can use:

username: rahul
password: rahul@2021

username: advaika
password: world@5

username: deepak
password: lightstar@1


