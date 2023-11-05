const G2new =require('../models/user.js')

module.exports = async(req,res)=>{
  

    var displayTime = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM" , "12:00 PM","12:30 PM" ,"01:00 PM" , "01:30 PM" ,"02:00 PM"];

    const err=[""];
    var today = new Date();
   var dd = today.getDate() + 1;
   var mm = today.getMonth() + 1; //January is 0!
   var yyyy = today.getFullYear();
   if (dd < 10) {
       dd = '0' + dd
   }
   if (mm < 10) {
       mm = '0' + mm 
   }
   today = yyyy + '-' + mm + '-' + dd;
   var dateSelected = today;
   
   
    res.render('appointment',{dateSelected:dateSelected, displayTime : displayTime,lisenceinfo: err }) 
}