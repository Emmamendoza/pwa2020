const mongoose = require("../bin/mongoDB");

const noticiasRelSchema = new mongoose.Schema({
    titulo:{
        type:String
    },
    descripcion:{
        type:String
    }
});

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
    },
    relacionada: [noticiasRelSchema]
})

module.exports = mongoose.model("news", newsSchema);