const appointment = require("../models/appointment");
const G2new = require("../models/user.js");
module.exports = async (req, res) => {
  var user_id = req.session.userId;
  const G2data = await G2new.findOne({ _id: user_id });

  var date = req.body.date;
  var dateSelected = date;
  const alreadybookeddate = await appointment.find({
    date: date,
    isTimeSlotAvailable: true,
  });
  var resDate = [];
  alreadybookeddate.forEach((element) => {
    resDate.push(element.time);
  });

  const err = [""];

  if (!G2data) {
    const G2data = {
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
    console.log("date selected", dateSelected);
    res.render("g2Test", {
      gData: G2data,
      Cdata: car_details,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  } else {
    console.log("date selected here..", dateSelected);
    res.render("g2Test", {
      gData: G2data,
      Cdata: G2data.carDetails,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  }
};
