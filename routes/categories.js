var express = require('express');
var router = express.Router();

var categoriesController = require("../controllers/categoriesController");

/* GET users listing. */
router.get('/', categoriesController.getAll);
router.get('/:id', categoriesController.getById);
router.post('/', categoriesController.create);
module.exports = router;