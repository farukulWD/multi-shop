
# 🌐 Multi Shop - Frontend (React + Vite )

A modern Vite + React frontend for the Multi Shop Auth System with support for secure subdomain-based shop dashboards.

---

## ✨ Features

- **Signup Page**
  - Username
  - Password (with validation)
  - Minimum 3 unique shop names
- **Signin Page**
  - “Remember Me” support
  - Validation for wrong credentials
- **Dashboard**
  - Profile icon shows shop list
  - Logout with confirmation
- **Shop Dashboards**
  - Access via `http://<shopname>.localhost:5173`
  - Auth persistence across subdomains
  - Loading spinner while verifying token

---

## 📦 Folder Structure

```
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   ├── utils/
│   └── App.tsx
├── .env.example
├── index.html
└── vite.config.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/farukulwd/multi-shop.git
cd multi-shop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

### 4. Run the Client
```bash
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🧪 Notes for Subdomain Setup (Local)

YOu need run the project locally because vercel not support subdomain

---

## ✅ Tech Stack

- React (Vite)
- React Router
- Context API
- JWT Token Handling
- Axios
- Tailwind CSS (optional)

---

## 🧠 Key Concepts

- Cross-subdomain cookie-based auth
- Dynamic routing for shop dashboards
- Spinner-based session verification
- Persistent auth using secure cookies
- Clean, modular folder structure
