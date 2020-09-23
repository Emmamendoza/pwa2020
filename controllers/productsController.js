const productsModel = require("../models/productsModels")
module.exports = {
    getAll: async (req, res, next) => {
      console.log(req.query);
       const productos = await productsModel.find({});
      res.json(productos);
    },
    getById: async (req, res, next) => {
        console.log(req.params.id);
        const productos = await productsModel.findById(req.params.id);
        res.json(productos);
    },
    create:(req, res, next) => {
        console.log(req.body);
        const product = new productsModel({
            name:req.body.name,
            sku: req.body.sku,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            category: req.body.category,
            tags:req.body.tags
        })
        product.save();
        res.json(product);
    },
    update: async (req, res, next) => {
        console.log(req.params.id,req.body);
        const productos = await productsModel.update({_id: req.params.id}, req.body, {multi: false});
        res.json(productos);
    },
    delete: async (req, res, next) => {
        console.log(req.params.id);
        const productos = await productsModel.deleteOne({_id: req.params.id});
        res.json(productos);
    }
}