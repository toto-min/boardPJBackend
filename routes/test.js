var express = require('express');
var router = express.Router();

router.get('/getTest', (req, res) => {
    try {
        res.send({
            msg: 'getTest'
        });
    } catch (err) {
        console.log(err);
        res.send({
            error: 'error'
        });
    }
});
module.exports = router;