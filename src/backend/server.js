import express from "express";
import path from 'path';

const app = express();
const port = 3000;

const __dirname = path.resolve();   

app.get('/', (req, res) => {
    res.send("Hello World");
    console.log(__dirname);
});

app.post


app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})