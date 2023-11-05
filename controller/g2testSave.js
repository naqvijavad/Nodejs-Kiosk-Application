const user = require('../models/user.js');
const bcrypt = require('bcrypt');
module.exports= (async (req,res)=>
{
    var firstName = req.body.firstName;
   var lastName = req.body.lastName;
   var age = req.body.age;
  var licenseNo =req.body.licenseNumber ;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedLicenseNo = bcrypt.hashSync(licenseNo, salt);
  var make = req.body.carMake ;
  var model = req.body.carModel;
  var year = req.body.year;
  var plate = req.body.plateNumber;
  await user.findOneAndUpdate({
    _id:loggedIn
    },
        {
            firstName:firstName,
            lastName:lastName,
            licenseNumber:hashedLicenseNo,
            age:age,
            carDetails:{
            carMake:make, 
            carModel:model,
            year:year,
            plateNumber:plate
}})
        req.session.firstName = user.firstName;
  res.redirect('/gTest')
})

