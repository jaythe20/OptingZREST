/**
 * Created by jaythe20 on 09/05/17.
 */
var items = require('../models/item.server.model.js');
var fs = require('fs');

exports.GetAll = function (req, res) {
    items.find({},function (err, results) {
        if(err) console.log(err);
        return res.send(results);
    });
};

//GetById
exports.GetById = function (req, res) {
    var id = req.params.id;
    items.findById(id,function (err,results) {
        if(err) console.log(err);
        return res.send(results);
    });

};

//Post
exports.Add = function (req, res) {
    items.create(req.body,function (err, results) {
        if(err) console.log(err);
        return res.send(results);
    });
};

//Put
exports.Update = function (req,res) {
    var id = req.params.id;
    var updates = req.body;
    //updates.updatedDate = Date.now;
    items.findByIdAndUpdate(id,updates,function (err, results) {
        if(err) console.log(err);
        return res.send("Updated successfully");
    });
};

//Remove
exports.Delete = function (req, res){
    var id = req.params.id;
    items.findByIdAndRemove(id,function (err, results) {
        if(err) console.log(err);
        return res.send("Successfully removed");
    })
};

//GetAlternativeById
exports.GetAlternativeById = function (req, res) {

    var id = req.params.id;
    var parent;
    items.find({'_id': id},[],function (err,callback) {
        parent = callback;
        console.log(parent);
    });

    console.log("subcategory"+parent.subcategory);
    var allItems = items.find();

    if(parent.subcategory.count === 1)
        var subcategoryFilter = parent.subcategory.name;
    if(subcategoryFilter.length > 0)
    {
        allItems.where({'subcategory.name' : subcategoryFilter});
    }
    allItems.exec(function (err, results)
    {
        if(err)
            console.log(err);
        return res.send(results);

    });
};
