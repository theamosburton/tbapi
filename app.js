const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post('/create', (req, res) => {
    console.log(req.body);
    res.status(200).json({ walletaddes: true, message: "" });
});

const PORT = 2001;
const HOST = "192.168.77.172";

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
