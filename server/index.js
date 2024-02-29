const express = require('express');
var cors = require('cors')

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.json('Hello World!');
})

app.post("/register", (req, res) =>{
    const {userName, password} = req.body;
    res.json({userName, password});
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})


