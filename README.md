# 🚀 My Portfolio

A full-stack developer portfolio with authentication system where users can sign up, log in, and explore projects with live demos and screenshots.

---

## ✨ Features

- 🔐 **Authentication** — Secure Signup & Login with JWT
- 📊 **Dashboard** — Personal dashboard after login
- 🗂️ **Projects Section** — All projects listed in one place
- 🌐 **Live Demo** — Click any project to view live demo in Dashboard project section
- 📸 **Screenshots** — Preview screenshots for each project in Dashboard project Section
- 📱 **Responsive Design** — Works on mobile, tablet & desktop

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router DOM

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JWT (JSON Web Token)

---

## 📁 Folder Structure

```
My-Portfolio/
├── client/                   # Frontend (React)
│   ├── components/           # Reusable components
│   │   ├── Auth/             # Login & Signup components
│   │   ├── gallary/          # Gallery components
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HomeContact.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectGallary.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/                # All pages
│   ├── public/               # Static assets
│   ├── redux/                # Redux store & slices (planned)
│   ├── services/             # API calls
│   ├── src/
│   │   ├── assets/           # Images & icons
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.cjs
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                   # Backend (Node.js)
│   ├── config/               # DB & env config
│   ├── controllers/          # Route logic
│   ├── mailtemplates/        # Email templates
│   ├── middleware/           # Auth middleware
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── utils/                # Helper functions
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔮 Planned Features

- 🔄 **Redux State Management** — Global state handling with Redux Toolkit & slices *(Coming Soon)*

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/aksinghdev/My-Portfolio.git
cd My-Portfolio
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `.env` file in `server/` folder:
```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd client
npm install
npm run dev
```

---

## 🌐 Live Demo

> Coming Soon — Will be deployed on Vercel

---

## 📬 Contact

- GitHub: [@aksinghdev](https://github.com/aksinghdev)
- Email: krabhi1452@gmail.com
- Phone: +91 9162638828

---

⭐ **If you like this project, give it a star!**