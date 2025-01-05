const express = require("express");

const path = require("path");
const cors = require("cors"); // Add cors import
const app = express();

// Middleware
app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});