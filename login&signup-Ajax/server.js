const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const loadUsers = () => {
    const data = fs.readFileSync('user.json');
    return JSON.parse(data);
};

const saveUsers = (users) => {
    fs.writeFileSync('user.json', JSON.stringify(users, null, 2));
};

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, password });
    saveUsers(users);
    return res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return res.status(200).sendFile(path.join(__dirname, "public", "home.html"));
    } else {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});
