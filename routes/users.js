var express = require('express');
var router = express.Router();
const usersController  = require("../controllers/usersAdminController");
/* GET users listing. */

router.post('/registro', usersController.create);
router.post('/login', usersController.login);

module.exports = router;
