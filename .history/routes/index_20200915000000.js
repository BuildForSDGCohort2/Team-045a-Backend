const router = require('express').Router();

const { home } = require('../controllers/index');
const controllers = require('../controllers/index');

const donorController = require('../controllers/donorController')

router.get('/', home);

router.get('/register',controllers.getRegister);

router.post('/register', controllers.postRegister);

router.get('/login', controllers.getLogin);

router.post('/login', controllers.postLogin);

router.post('/addCategory', donorController.addCategory )

module.exports = router;