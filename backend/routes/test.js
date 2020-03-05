const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('test is working porperly');
});

module.exports = router;