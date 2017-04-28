const express = require('express');
const router = express.Router();

router.post('/getData', function (req, res) {
    res.send({'result': 'TRUE', 'data': {name: 1}});
});

router.post('/getList', function (req, res) {
    res.send({'result': 'TRUE', 'data': {name: 1}});
});

module.exports = router;