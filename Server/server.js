const express = require('express')

const app = express();

const PORT = 1937;

app.post("/signup", (req, res) => {
    res.send(`Data recivied`);
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})