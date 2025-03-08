const express = require('express');
const connectDB = require("./dbconnect");
const app = express();
const PORT = 3241;

app.post('/create', (req, res) => {
    console.log("📥 Data Received:", req);
    res.status(200).json({ status: "true", message: "hello" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
