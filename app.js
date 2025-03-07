const fs = require("fs");
const https = require("https");
const express = require("express");

const app = express();

// Load Self-Signed SSL certificate
const options = {
  key: fs.readFileSync("/etc/ssl/certs/selfsigned.key"),
  cert: fs.readFileSync("/etc/ssl/certs/selfsigned.crt"),
};

app.post('/create', (req, res) => {
    console.log(req.body);
    res.status(200).json({ walletaddes: true, message: "" });
});

// Start HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log("Server running on https://YOUR_PUBLIC_IP");
});
