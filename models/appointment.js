const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {type: String}, 
    time : {type: String}, 
    isTimeSlotAvailable : {type:Boolean , default : true},
    selectDriverId:{
        type: String,
        default: null,
    }
    
});

const appointment = mongoose.model('appointment',appointmentSchema)
module.exports = appointment