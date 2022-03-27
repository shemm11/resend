const express = require('express');
const router = express.Router();
const privateController = require('../controllers/privateController')



router.get('/dev', privateController.parseDev)
router.get('/prod', privateController.parseProd)
router.get('/test', privateController.test)

module.exports = router;
