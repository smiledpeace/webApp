var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/:type', function(req, res, next) {
    var type = req.params.type;
    console.log(type);
    res.render('index', {
        type: type,
        param1: '',
        title: 'Y_X'
    });
});

module.exports = router;
