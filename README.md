# Task Tracker

A simple Task Tracker web application built using the MERN Stack (MongoDB, Express.js, React, and Node.js). It allows users to create, update, delete, and manage daily tasks through a clean and responsive interface.

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Responsive user interface
* REST API integration
* MongoDB database

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

## Project Structure

```
task-tracker/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/ayushi-baliyan/task-tracker.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Author

**Ayushi Baliyan**

GitHub: https://github.com/ayushi-baliyan
