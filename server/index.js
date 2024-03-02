const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);


const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://javid:12345@my-blog.htrbeyt.mongodb.net/blog")
.then(() => {
    console.log("DB Connected");
})


app.get('/test', (req, res) => {
    res.json('Hello World!');
})

app.post("/register", async (req, res) =>{
    const {userName, password} = req.body;

    try{
        const userDoc = await User.create({
            userName,
            password:bcrypt.hashSync(password, salt)
        })
    
        res.json(userDoc);
    } catch (e) {
        if (e.code === 11000) {
            // Duplicate key error (MongoDB error code)
            res.status(400).json({ error: "Username already exists" });
        } else {
            res.status(400).json(e);
        }
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})


