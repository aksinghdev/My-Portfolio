
# 🚀 My Portfolio

A full-stack developer portfolio with authentication system where users can sign up, log in, and explore projects with live demos and screenshots.

---

## ✨ Features

- 🔐 **Authentication** — Secure Signup & Login with JWT
- 📊 **Dashboard** — Personal dashboard after login
- 🗂️ **Projects Section** — All projects listed in one place
- 🌐 **Live Demo** — Click any project to view live demo
- 📸 **Screenshots** — Preview screenshots for each project
- 📱 **Responsive Design** — Works on mobile, tablet & desktop

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Redux
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
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # All pages
│   │   ├── redux/          # State management
│   │   ├── services/       # API calls
│   │   └── assets/         # Images & icons
│   └── package.json
│
├── server/                 # Backend (Node.js)
│   ├── config/             # DB & env config
│   ├── controllers/        # Route logic
│   ├── middleware/         # Auth middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── utils/              # Helper functions
│   └── server.js
│
└── README.md
```

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

---

⭐ **If you like this project, give it a star!**