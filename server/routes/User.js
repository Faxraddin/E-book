const express = require('express');
const router = express.Router();

const {Login,SignUp} = require('../controllers/User');

//Auth system
router.post('Login',Login);
router.post('SignUp',SignUp);

module.exports = router;