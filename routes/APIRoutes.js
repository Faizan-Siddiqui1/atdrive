var express = require('express');
const apiControllers = require('../controller/APIControllers');
var router = express.Router();

/* GET users listing. */
router.post('/fetchdata', function(req, res, next) {
    apiControllers.fetchAndStoreDataFromAPI(req, res);
});

module.exports = router;
