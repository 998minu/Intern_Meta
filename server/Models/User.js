const mongoose = require('mongoose');

// Define the structure of documents in the MongoDB collection
const myCollectionSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    phonenumber: Number
});

// Create a model based on the schema for a MongoDB collection named "mycollection"
module.exports = mongoose.model("mycollection", myCollectionSchema);
