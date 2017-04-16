/**
 * Created by jaythe20 on 15/04/17.
 */
var express = require('express');
var router = express.Router();

var productController = require('../controllers/product.server.controller.js');

router.get('/', function(req, res, next) {
    if(req.query.import)
            return productController.Import(req,res);
    return productController.GetAll(req,res);
});

router.get('/:id', function(req, res, next) {
    return productController.GetById(req,res);
    //res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    return productController.Add(req,res);
    //res.render('index', { title: 'Express' });
});

router.put('/:id', function (req, res) {
    return productController.Update(req,res);
});

router.delete('/:id', function (req, res) {
    return productController.Delete(req, res);
});

router.get('/?import=true', function (req, res) {
    return productController.Import(req, res);
});

















module.exports = router;