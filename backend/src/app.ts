import express from 'express';
import bodyParser from 'body-parser';

// Create Express app instance
const app = express();

app.use(bodyParser.json({ type: 'application/json'}))

// Routes setup
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export default app;
