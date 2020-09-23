var express = require('express');
var router = express.Router();
var usersAdminController = require("../controllers/usersAdminController");

/* CREATE users listing. */
router.post('/', usersAdminController.create);
router.post('/', usersAdminController.validate);
module.exports = router;
