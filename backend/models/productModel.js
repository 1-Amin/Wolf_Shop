const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }

}, {timestamps: true});


module.exports = mongoose.model("Product", productSchema);