var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('WelCome My App')
});
router.get('/:type', function(req, res, next) {
    var type = req.params.type;
    console.log(type);
    res.render('index', {
        type: type,
        param1: '',
        title: 'X_X'
    });
});

module.exports = router;
