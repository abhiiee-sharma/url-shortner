require('dotenv').config(); // Add this line at the top

const express = require("express");

const connectMongoDb = require("./connection");

const{} = require('./models/url');
const helmet = require('helmet');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter')
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8001; 
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/url-shortner"; // Use environment variable for MongoDB URI



//Mongoose connection
connectMongoDb(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if the database connection fails
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middleware to fetch data
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/url", urlRoute);
app.use("/", staticRoute);


//Server connected on port
app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
}).on('error', (err) => {
  console.error("Failed to start server", err);
});
