// server.js

const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Redirect to index.html for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
