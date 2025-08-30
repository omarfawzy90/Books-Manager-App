# 📚 Books Manager App
A full-stack web application built with React (Vite) on the frontend and Node.js + Express on the backend.
This project allows users to manage a list of books (create, read, update, delete) with a simple and responsive UI.

## 🚀 Features
📖 View all books
➕ Add a new book
✏️ Edit existing books
❌ Delete books
🎨 Modern UI with optional animated Silk background


## 🛠️ Tech Stack
Frontend (React + Vite)
React with functional components & hooks
Axios for API requests
TailwindCSS for styling (optional)
Backend (Node.js + Express)
RESTful API endpoints (/books)
Middleware for JSON parsing
Modular route structure


## 📂 Project Structure

-**`project-root/`**
├── **`backend/`**
│   ├── server.js        # Express server entry point
│   ├── routes/books.js  # CRUD routes for books
│   └── models/Book.js   # Book schema/model (if using DB later)
│
├── **`frontend/`**
│   ├── **`src/`**
│   │   ├── components/  # Reusable components (Spinner, BookList, etc.)
│   │   ├── pages/       # Page-level components (Home, EditBook, etc.)
│   │   └── App.jsx      # Main React app
│   └── vite.config.js   # Vite config
│
└── **`README.md`**


## ⚙️ Installation & Setup

1. Clone the repo
git clone https://github.com/your-username/books-manager.git
cd books-manager

2. Setup backend
cd backend
npm install
npm start
Server will run at:
👉 http://localhost:3000

3. Setup frontend
cd ../frontend
npm install
npm run dev
Frontend will run at:
👉 http://localhost:5173


## 🔗 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/books`     | Get all books  |
| POST   | `/books`     | Add a new book |
| PUT    | `/books/:id` | Update a book  |
| DELETE | `/books/:id` | Delete a book  |


 ## 🎨 Customization
Background → Edit App.jsx to add/remove the lighrays component for an animated background.
Colors → Change Tailwind classes or lightsrays props (color, scale, speed) to fit your theme.

## License
This project is open-source under the MIT License.