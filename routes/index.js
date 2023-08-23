const router = require('express').Router();

const signupRouter = require('./signup');
const signinRouter = require('./signin');

const authMiddleware = require('../middlewares/auth');

const usersRouter = require('./users');
const cardsRouter = require('./movies');

const NotFoundError = require('../errors/NotFoundError');

router.use('/', signupRouter);
router.use('/', signinRouter);

router.use(authMiddleware);

router.use('/users', usersRouter);
router.use('/movies', cardsRouter);

router.use((req, res, next) => next(new NotFoundError('Неправильный путь')));

module.exports = router;
