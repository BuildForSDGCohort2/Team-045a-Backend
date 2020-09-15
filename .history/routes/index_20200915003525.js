const router = require('express').Router();

const { home } = require('../controllers/index');
const controllers = require('../controllers/index');

const {addCategoryController}= require('../controllers/donor.controller')

router.get('/', home);

router.get('/register',controllers.getRegister);

router.post('/register', controllers.postRegister);

router.get('/login', controllers.getLogin);

router.post('/login', controllers.postLogin);

router.post('/addCategory', addCategoryController )

module.exports = router;