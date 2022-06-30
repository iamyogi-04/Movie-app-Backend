const mongoose = require('./databse');
const express = require('express');
const cors = require('cors')
const Port = process.env.PORT || 5000

const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})
//built-in middleware
app.use(express.json());
app.use(cors());

//user routes
app.use("/api/v1", require("./routes/userRoute"));

app.use("/api/v1", require("./routes/movieRoute"));

app.listen(Port, (req, res) => {
    console.log("server started ")
})