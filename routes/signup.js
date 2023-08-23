const router = require('express').Router();
const { createUserValidation } = require('../utils/validation');
const { createUser } = require('../controllers/users');

router.post('/signup', createUserValidation, createUser);

module.exports = router;
