/**
 * Created by jaythe20 on 15/04/17.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    //return standupController.list(req,res);
    res.render('index', { title: 'OptingZ' });
});
module.exports = router;