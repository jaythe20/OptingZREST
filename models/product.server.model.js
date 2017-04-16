/**
 * Created by jaythe20 on 15/04/17.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productTypes = ["software", "website", "store", "brand"]
var productSchema = new schema({
    _id : {type: String},
    name : {type: String, required : true},
    description : {type: String, default: "This is default description for product"},
    website : {type: String},
    category : {type: String, required : true},
    productType : {type: String, enum: productTypes, required: true },
    createdOn : {type: Date, default: Date.Now}
});

module.exports = mongoose.model("Product", productSchema, "TestProducts");






