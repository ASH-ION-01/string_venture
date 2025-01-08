Library Management System

This is a Library Management System project that allows users to manage a library's books and user data. The application provides functionality for adding, listing, borrowing, and returning books while ensuring a smooth user experience through modern frontend and backend technologies.

Features

Book Management:

Add new books with title, author, and publication year.

View a list of all available and borrowed books.

Update book details.

Delete books from the database.

Borrowing Functionality:

Borrow and return books by users.

Real-time updates of book availability status.

User Authentication:

Register and log in users.

Role-based authentication for admin and regular users.

Dashboard:

Displays library statistics such as total books and borrowed books.

Cloud Deployment:

Easily deployable to cloud platforms like Heroku or AWS.

File Structure

Frontend

/src
├── components
│   ├── Navbar.jsx
│   ├── BookList.jsx
│   ├── AddBook.jsx
│   ├── BorrowBook.jsx
│   ├── Dashboard.jsx
├── pages
│   ├── Login.jsx
│   ├── Register.jsx
├── App.jsx
├── index.jsx
├── utils
│   ├── api.js

Backend

/backend
├── models
│   ├── Book.js
│   ├── User.js
├── routes
│   ├── bookRoutes.js
│   ├── userRoutes.js
│   ├── borrowRoutes.js
│   ├── authRoutes.js
├── server.js
├── .env
├── package.json

Technologies Used

Frontend

React

Tailwind CSS

React Router

Axios

Backend

Node.js

Express.js

MongoDB

Mongoose

Additional Tools

Postman for API testing

Dotenv for environment variables

Cors for cross-origin requests

Installation and Setup

Prerequisites

Ensure you have the following installed on your system:

Node.js

MongoDB

A code editor (e.g., VS Code)

Steps to Run the Project Locally

Backend Setup

Clone the repository and navigate to the backend folder.

git clone <repository-url>
cd backend

Install the dependencies.

npm install

Create a .env file and add the following environment variables:

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>

Start the backend server.

npm start

The server will run on http://localhost:5000.

Frontend Setup

Navigate to the frontend folder.

cd frontend

Install the dependencies.

npm install

Start the frontend server.

npm run dev

The application will run on http://localhost:5173.

API Endpoints

Book Endpoints

GET /api/books - Get all books

POST /api/books - Add a new book

PUT /api/books/:id - Update book details

DELETE /api/books/:id - Delete a book

Borrow Endpoints

POST /api/borrow - Borrow a book

POST /api/return - Return a book

User Endpoints

POST /api/auth/register - Register a new user

POST /api/auth/login - Log in a user

Testing

Testing Backend APIs

Use Postman or cURL to test the API endpoints. For example:

To borrow a book:

POST http://localhost:5000/api/borrow
{
  "bookId": "<book-id>",
  "userId": "<user-id>"
}

Testing Frontend

Run both the backend and frontend servers.

Visit http://localhost:5173 in your browser.

Log in or register as a new user.

Navigate through the dashboard, add books, and borrow/return books.

Deployment

Steps for Deployment

Deploy the backend to a cloud platform like Heroku or AWS.

Add environment variables (e.g., MongoDB URI) in the cloud environment.

Deploy the frontend to a hosting platform like Netlify or Vercel.

Ensure that the frontend is configured to make API calls to the deployed backend URL.

Screenshots

Login Page


Dashboard


Future Enhancements

Implement advanced search and filtering for books.

Add admin-specific dashboards with detailed analytics.

Include email notifications for due dates.

Improve UI/UX with animations and additional features.

Contributors

Ashish Kumar - GitHub Profile

License

This project is licensed under the MIT License. See the LICENSE file for details.
