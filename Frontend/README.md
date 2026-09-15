Kanban Board
A flexible full-stack workflow management application built around the Kanban methodology. It can be used to manage software projects, daily work, job applications, study plans, and personal goals through customizable boards, columns, and cards.
----------------------------------------*---------------------------------------
📌 Problem Statement

Managing different types of work often requires tracking multiple items through different stages. A software task may move from To Do → Development → Testing → Done, while a job application may move through Applied → Assessment → Interview → Offer.

This project provides a customizable workflow system where users define their own boards and stages based on what they need to manage.

  Example Use Cases
  Software Development
  Backlog → To Do → Development → Testing → Done
---------------------------------------------*--------------------------
✨ Features
📋 Boards
  Create, switch & delete boards
  Customize boards for different workflows
🗂️ Columns
  Create, rename & delete columns
  Define custom workflow stages
📝 Cards
  Create, edit & delete cards
  Add title, description & priority
  Set priority: Low / Medium / High
🔄 Drag & Drop
  Move cards between columns
  Track task progress visually
👤 Authentication
  User signup & login
  Password hashing
  JWT-based authentication
-----------------------------------------*--------------------------------------
  🛠️ Tech Stack
  Layer	---------------------------------------------Technologies
  Frontend	----------------------------------React, JavaScript, Vite, React Router, CSS
  Backend	------------------------------------Node.js, Express.js, MongoDB, Mongoose, REST APIs
  Authentication	----------------------------JWT, bcrypt
  Tools	--------------------------------------Git, GitHub, VS Code, Postman
  Database	----------------------------------MongoDB Atlas
----------------------------------------------------*-------------------------------------
🏗️ Architecture
  The project follows a client-server architecture:
  System Architecture
                    ┌──────────────────────┐
                    │        USER          │
                    │  Create / Edit /     │
                    │  Move Tasks          │
                    └──────────┬───────────┘
                               │
                               ▼
                ┌────────────────────────────┐
                │        FRONTEND            │
                │          React             │
                │                            │
                │  Pages • Components • UI   │
                │       State Management     │
                └────────────┬───────────────┘
                             │
                      HTTP / REST API
                             │
                             ▼
              ┌────────────────────────────┐
              │         BACKEND            │
              │      Node + Express        │
              │                            │
              │  Routes • Authentication   │
              │  Business Logic • APIs     │
              └────────────┬───────────────┘
                           │
                        Mongoose
                           │
                           ▼
              ┌────────────────────────────┐
              │         DATABASE           │
              │          MongoDB           │
              │                            │
              │  Users • Boards • Columns  │
              │          • Cards           │
              └────────────────────────────┘
---------------------------------------------------*----------------------------------
Data Flow
  User Action
      ↓
  React Frontend
      ↓
  REST API Request
      ↓
  Express Backend
      ↓
  Business Logic / Validation
      ↓
  MongoDB
      ↓
  API Response
      ↓
  React UI Update
  --------------------------------------------*---------------------------------
📁 Project Structure
  kanban-board/
  │
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   ├── Landpage/
  │   │   ├── App.jsx
  │   │   └── main.jsx
  │   │
  │   ├── package.json
  │   └── ...
  │
  ├── backend/
  │   ├── routes/
  │   ├── controllers/
  │   ├── models/
  │   ├── middleware/
  │   ├── server.js
  │   ├── package.json
  │   └── .gitignore
  │
  ├── .gitignore
  └── README.md
  --------------------------------------*---------------------------------------
🔮 Future Improvements
  Complete backend CRUD for boards
  Complete backend CRUD for columns
  Complete backend CRUD for cards
  Connect frontend state with backend APIs
  Persist drag-and-drop changes
  User-specific boards and cards
  Protected API routes
  Due dates
  Labels / tags
  Card details modal
  Better form validation
  Centralized error handling
  AI-assisted workflow features
  Deployment
