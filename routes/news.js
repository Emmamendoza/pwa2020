var express = require('express');
var router = express.Router();

var newsController = require("../controllers/newsController");

/* GET users listing. */
router.get('/', newsController.getAll);
router.get('/:id', newsController.getById);
router.post('/', newsController.create);
router.put('/:id', newsController.update);
router.delete('/:id', newsController.delete);
module.exports = router;