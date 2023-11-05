const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//First Schema
const inputdataschema= new Schema({
firstName: String,
lastName:  String,
age: String



});
const inputdata =mongoose.model('inputdata',inputdataschema);//(Name of coolection,name of schema)
module.exports=inputdata;