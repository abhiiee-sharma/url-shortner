const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId : {
        typeof: String,
        required: true,
        unique: true,
    },
    redirectUrl : {
        typeof: String,
        required: String,
    },
    visitHistory : [{timestamps : { typeof: Number }}]
},{timestamps: true})

//Model

const URL = mongoose.model("url", urlSchema);

module.exports = URL;