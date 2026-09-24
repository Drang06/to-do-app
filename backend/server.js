import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import taskRoutes from './routes/tasks.js';
import authRoutes from './routes/auth.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - comes before anything else, eg. security checks and compatibility assurence
app.use(cors()); // Cross Origin Resource Sharing - as a safety measure, you can decide which origins can use the server.
app.use(express.json());

// Routes
app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)

// -- HTTP METHODS --

// GET - retrieve data / read data
// POST - create new data
// PUT - replacing an entire resource of data
// PATCH - replaces a part of a resource
// Delete - delete data*

app.get('/', function (req, res) {
    res.send('Hello, this message is coming from the backend. The server is working.');
});

if (!process.env.MONGODB_URI) {
    console.log('Missing database connection string in .env');
    process.exit(1);
}

if (!process.env.JWT_SECRET) {
    console.log('Missing JWT token in .env');
    process.exit(1);
}

try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log ('Connect to MongoDB')

    app.listen(PORT, function () {
    console.log('Server is running:', PORT);
    });
} catch (error) {
    console.log('Could not start server', error.message);
    process.exit(1);
}