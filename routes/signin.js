const router = require('express').Router();
const { loginValidation } = require('../utils/validation');
const { login } = require('../controllers/users');

router.post('/signin', loginValidation, login);

module.exports = router;
