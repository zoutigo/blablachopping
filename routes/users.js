var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/', userController.usersList)

// GET user detail
router.get('/:id', userController.userDetail)

// Post a new user
router.post('/add', userController.userAdd)

// Put a new user
router.put('/:id', userController.userModify)

module.exports = router;
