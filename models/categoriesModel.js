const mongoose = require("../bin/mongoDB");

const categorySchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("categories",categorySchema);