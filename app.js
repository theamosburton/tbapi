const express = require('express');
const app = express();
const PORT = 3241;

app.post('/create', (req, res) => {
    console.log(req.body);
    res.status(200).json({ status: true, message: "" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
