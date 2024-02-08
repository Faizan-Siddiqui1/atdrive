var express = require('express');
const apiControllers = require('../controller/APIControllers');
var router = express.Router();

router.post('/fetchData', function(req, res) {
    apiControllers.fetchAndStoreDataFromAPI(req, res);
});

router.get('/getData/:id', function(req, res) {
    apiControllers.getAllRepositoryDataById(req, res);
});

router.get('/getAllData', function(req, res) {
    apiControllers.getAllRepositoryData(req, res);
});

module.exports = router;
