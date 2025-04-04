const express = require('express');
const app = express();
const port = 3000;

// CUSTOM MIDDLEWARE
const age = (req, res, next) => {
    const userAge = req.query.age;

    if (!userAge) {
        return res.send("Please enter age");
    }

    if (parseInt(userAge) <= 18) {
        return res.send("Your age is under 18");
    }

    next();
};

// Home route (no middleware)
app.get('/', (req, res) => {
    res.send("This is my home page");
});

// About route (middleware applied)
app.get('/about', age, (req, res) => {
    res.send("This is my about page");
});

// Start server
app.listen(port, () => {
    console.log(`App is running at: http://localhost:${port}`);
});

