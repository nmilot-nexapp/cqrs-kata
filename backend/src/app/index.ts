import express from 'express';

// Create Express app instance
const app = express();

// Routes setup
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export default app;
