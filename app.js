const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    res.send('Hello, FastReed is live!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
