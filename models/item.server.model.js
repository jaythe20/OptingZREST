/**
 * Created by jaythe20 on 09/05/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var category = ["Software","Website","Store","Brand"];

var itemSchema = new schema({
    name : {type: String, required : true},
    description : {type: String, default: "This is default desc"},
    views : {type: Number},
    website : {type: String},
    category : {type: String, enum: category, required: true},
    subcategory : [{
        name : {type: String},
        description : {type: String}
    }],
    sticker : [{
        name : {type: String},
        description : {type: String}
    }],
    createdOn : {type: Date, default: Date.Now}
});

module.exports = mongoose.model("Items",itemSchema,"Items");