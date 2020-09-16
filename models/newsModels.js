const mongoose = require("../bin/mongoDB");

const newsSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        maxlength: 255,
        required: true
    },
    cantidadVistas: {
        type: Number,
        minlength: 1
    },
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    update: { 
        type: Date,
        default: Date.now 
    } 
})

module.exports = mongoose.model("news", newsSchema);