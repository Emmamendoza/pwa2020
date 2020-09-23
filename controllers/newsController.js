const newsModels = require("../models/newsModels")

module.exports = {
    getAll: async (req, res, next) =>{
        console.log(req.query);
        const news = await newsModels.find({}).populate("category");
        res.json(news);
    },
    getById: async (req, res, next) => {
        console.log(req.query.id);
        const news = await newsModels.findById(req.params.id);
        res.json(news);
    },
    create:(req, res, next) => {
        console.log(req.body);
        const news = {
            name: req.body.name,
            descripcion: req.body.descripcion,
            cantidadVistas: req.body.cantidadVistas,
            categoria: req.body.categoria,
            update: req.body.update,
            relacionada: req.body.relacionada
        }
        news.save((error,document) => {
            if(error){
                return(error);
            }else{
                return(document);
            }
        });
        res.json(news);
    },
    update: async (req, res, next) => {
        console.log(req.params.id,req.body);
        const news = await newsModels.update({_id: req.params.id}, req.body,{multi: false});
        
        res.json(news);
    },
    delete: async (req, res, next) => {
        console.log(req.params.id);
        const news = await newsModels.deleteOne({_id: req.params.id});
        res.json({});
    }
}