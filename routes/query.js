const express = require('express');
const router = express.Router();

router.post('/getData', function (req, res) {
    res.send({'result': 'TRUE', 'data': [{name: 1,subs: [{name: 'red'},{name: 'green',subs: [{name: 'black'}]}]}]});
});

router.post('/getList', function (req, res) {
    res.send(
        {
            'result': 'TRUE',
            'data': [
                {name: '吴承恩', content: '西游记'},
                {name: '施耐庵', content: '水浒传'},
                {name: '曹雪芹', content: '红楼梦'},
                {name: '罗贯中', content: '三国演义'}
            ]
        }
    );
});

module.exports = router;