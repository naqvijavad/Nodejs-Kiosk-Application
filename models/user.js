const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// First schema
const UserSchema = new Schema({
    firstName: {
      type: String,
      default: "Default"
    },
    lastName: {
      type: String,
      default: "Default"
    },
    age: {
      type: Number,
      default: 0
    },
    username: {
      type: String,
      default: "Default"
    },
    password: {
      type: String,
      default: "Default"
    },
    appointmentId:{
      type :String,
      default:""
    },
    usertype: {
      type: String,
      default: "driver"
    },
    licenseNumber: {
      type: String,
      default: "Default",
      unique: true,
  
    },
    carDetails:{
    carMake: {
      type: String,
      default: "Default"
      
    },
    carModel: {
      type: String,
      default: "Default"
    },
    year: {
      type: Number,
      default: 0
    },
    plateNumber: {
      type: String,
      default: "00000000"
    } }
  });


  UserSchema.pre("save", function(next){
    const userDetails = this;
    bcrypt.hash(userDetails.password, 10, (error, hashPassword) => {
      userDetails.password = hashPassword;
      next();
    })
  })

  UserSchema.pre("save", function (next) {
    const userDetails = this;
    bcrypt.hash(userDetails.licenseNumber, 10, (error, hash) => {
      userDetails.licenseNumber = hash;
      next();
    });
});

const user =mongoose.model('user',UserSchema);//(Name of coolection,name of schema)
module.exports=user;