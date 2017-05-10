/**
 * Created by jaythe20 on 09/05/17.
 */
var express = require('express');
var router = express.Router();

var itemController = require('../controllers/item.server.controller.js');

router.get('/', function(req, res, next) {
    return itemController.GetAll(req,res);
});

router.get('/:id', function(req, res, next) {
    return itemController.GetById(req,res);
    //res.render('index', { title: 'Express' });
});

router.get('/alternative/:id', function(req, res, next) {
    return itemController.GetAlternativeById(req,res);
    //res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    return itemController.Add(req,res);
    //res.render('index', { title: 'Express' });
});

router.put('/:id', function (req, res) {
    return itemController.Update(req,res);
});

router.delete('/:id', function (req, res) {
    return itemController.Delete(req, res);
});

module.exports = router;

