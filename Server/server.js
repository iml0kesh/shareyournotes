
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userModel = require('./models/userModel');

const app = express();
const PORT = 1937;

mongoose.connect("mongodb://localhost/demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json())


require("./models/userModel");

app.post("/api/signup", (req, res) => {
    const { userName, userId, userEmail, userPassword } = req.body;
    const User = mongoose.model("User", userModel);
    
    const newUser = new User({
        userName,
        userId,
        userEmail,
        userPassword,
    });

    newUser.save((err, savedUser) => {
        if (err) {
            console.log("Error Saving the user: ", err);
        } else {
            console.log("USer Saved Success ", savedUser);
        }
    })

})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})