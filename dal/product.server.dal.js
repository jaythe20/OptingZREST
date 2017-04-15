/**
 * Created by jaythe20 on 15/04/17.
 */
var product = require('../models/product.server.model.js');

exports.GetAll = function (req, res) {
    product.find({},function (err, results) {
        if(err) console.log(err);
        return res.send(results);
    });
};

//GetById
exports.GetById = function (req, res) {
    var id = req.params.id;
    product.findById(id,function (err,results) {
        if(err) console.log(err);
        return results;
    });

};

//Post
exports.Add = function (req, res) {
    product.create(req.body,function (err, results) {
        if(err) console.log(err);
        return results;
    });
};

//Put
exports.Update = function (req,res) {
    var id = req.params.id;
    var updates = req.body;
    //updates.updatedDate = Date.now;
    product.findByIdAndUpdate(id,updates,function (err, results) {
        if(err) console.log(err);
        return results;
    });
};

//Remove
exports.Delete = function (req, res){
    var id = req.params.id;
    product.findByIdAndRemove(id,function (err, results) {
        if(err) console.log(err);
        return results;
    })
};

exports.Import = function (req, res) {
    /*product.create(
        {title : "T1", "author": "A1", "publication": "P1", "price" : 101, "isRead" : true},
        {title : "T2", "author": "A2", "publication": "P2", "price" : 102, "isRead" : false},
        {title : "T3", "author": "A3", "publication": "P3", "price" : 103, "isRead" : true},
        {title: "T4", "author": "A4", "publication": "P4", "price" : 104, "isRead" : false}
        ,function (err) {
            if(err)
                return console.log(err);
            return "Success";
        });*/
};