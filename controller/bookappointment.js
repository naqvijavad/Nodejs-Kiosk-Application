const appointment = require("../models/appointment");
const G2new = require("../models/user.js");
module.exports = async (req, res) => {
  var date = req.body.date;
  var time = req.body.time;

  // var displayTime = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM" , "12:00 PM","12:30 PM" ,"01:00 PM" , "01:30 PM" ,"02:00 PM"];

  var today = new Date();
  var dd = today.getDate() + 1;
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  var dateSelected = today;

  var user_id = req.session.userId;
  const G2data = await G2new.findOne({ _id: user_id });
  console.log("g2 data details...", G2data);

  var alreadybooked = await appointment.findOne({
    date: date,
    time: time,
    isTimeSlotAvailable: true,
  });
  var resDate = [];

  if (alreadybooked) {
    resDate.push(alreadybooked.time);
  }

  if (!time) {
    const err = ["This date is not available ,Select next date available "];
    res.render("g2Test", {
      gData: G2data,
      Cdata: G2data.carDetails,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  } else if (G2data.appointmentId != "") {
    const err = ["you already booked a slot"];
    res.render("g2Test", {
      gData: G2data,
      Cdata: G2data.carDetails,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  } else if (!G2data) {
    G2data = {
      firstName: "",
      lastName: "",
      licenseNumber: "",
      age: "",
      dob: "",
    };
    const car_details = {
      Brand: "",
      modelNumber: "",
      year: "",
      plateNumber: "",
    };
    const err = [""];
    res.render("g2Test", {
      gData: G2data,
      Cdata: carDetails,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  } else {
    const err = ["Slot booked"];
    await appointment.findOneAndUpdate(
      { _id: alreadybooked._id },
      { isTimeSlotAvailable: false }
    );
    await G2new.findOneAndUpdate(
      { _id: user_id },
      { appointmentId: alreadybooked._id }
    );
    res.render("g2Test", {
      gData: G2data,
      Cdata: G2data.carDetails,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  }
};
