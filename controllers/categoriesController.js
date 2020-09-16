const categoriesModel = require("../models/categoriesModel")
module.exports = {
    getAll: async (req, res, next) => {
      console.log(req.query);
       const categories = await categoriesModel.find({});
      res.json(categories);
    },
    getById: async (req, res, next) => {
        console.log(req.params.id);
        const categories = await categoriesModel.findById(req.params.id);
        res.json(categories);
    },
    create:(req, res, next) => {
        console.log(req.body);
        const categories = new categoriesModel({
            name:req.body.name
        })
        product.save();
        res.json(categories);
    }
}