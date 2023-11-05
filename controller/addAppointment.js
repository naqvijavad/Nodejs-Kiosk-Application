const appointment = require('../models/appointment')
module.exports = async(req,res)=>{
    
    var date = req.body.date;
    var time = req.body.time;

    var displayTime = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM" , "12:00 PM","12:30 PM" ,"01:00 PM" , "01:30 PM" ,"02:00 PM"];

    
    var today = new Date();
   var dd = today.getDate() + 1;
   var mm = today.getMonth() + 1; 
   var yyyy = today.getFullYear();
   if (dd < 10) {
       dd = '0' + dd
   }
   if (mm < 10) {
       mm = '0' + mm
   }
   today = yyyy + '-' + mm + '-' + dd;
   var dateSelected = today;

 
    const alreadybookeddate = await appointment.findOne({date:date,time:time})

        if(alreadybookeddate){
            const err = ["This date is not available ,Select next date available "]; 
            res.render('appointment',{dateSelected:dateSelected, displayTime : displayTime,lisenceinfo: err}) 
        }
        else{
            appointment.create(req.body)
            const err = ["Selected Appointment has been confirmed"]; 
            res.render('appointment',{dateSelected:dateSelected, displayTime : displayTime,lisenceinfo: err}) 
        }

    


}