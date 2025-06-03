const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = []; // in-memory for demo
const SECRET = 'SecretKey123';
const ADMIN_EMAIL = 'ecaterina.grebennicova@gmail.com';
const ADMIN_PASSWORD = 'Kate123';

app.post('/register', (req, res) => {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL) {
        return res.status(400).json({ error: 'Cannot register as admin' });
    }

    users.push({ email, password });
    res.json({ success: true });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    let role = 'user';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        role = 'admin';
    } else if (!users.find(u => u.email === email && u.password === password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ email, role }, SECRET, { expiresIn: '1m' });
    res.json({ token });
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
