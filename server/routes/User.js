const express = require('express');
const router = express.Router();

const {Login,SignUp} = require('../controllers/User');

router.post('Login',Login);
router.post('SignUp',SignUp)

module.exports = router