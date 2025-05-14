# TimePay Server

This is the backend server for the TimePay application.

## Setup

1. Install dependencies:
```
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/timepay
```

3. Run the server:
```
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

## Folder Structure

```
server/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Mongoose models
├── routes/         # Express routes
├── .env            # Environment variables
├── .gitignore      # Git ignore file
├── package.json    # Dependencies and scripts
├── README.md       # Documentation
└── server.js       # Entry point
```

## Technologies Used

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens for authentication (to be implemented)
- CORS for cross-origin resource sharing 