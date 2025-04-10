const express = require("express");

const connectMongoDb = require("./connection");

const{} = require('./models/url');

const urlRoute = require('./routes/url')


const app = express();
const PORT = 8001;



//Mongoose connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(() => {
  console.log("MongoDB connected!");
});

//Middleware to fetch data
// app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use("/url", urlRoute);


//Server connected on port
app.listen(8001, () => {
    console.log(`Server started on port : ${PORT}`);  
})
