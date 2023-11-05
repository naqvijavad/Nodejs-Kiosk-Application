const user = require("../models/user.js");
const appointment = require("../models/appointment");
module.exports = async (req, res) => {
  var user_id = req.session.userId;
  const G2data = await user.findOne({ _id: user_id });
  console.log(G2data);

  var today = new Date();
  var dd = today.getDate() + 1;
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  var dateSelected = today;
  var alreadybookeddate = await appointment.find({
    date: dateSelected,
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
    res.render("g2Test", {
      gData: G2data,
      Cdata: car_details,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  } else {
    console.log("here...");
    res.render("g2Test", {
      gData: G2data,
      Cdata: G2data.carDetails,
      dateSelected: dateSelected,
      displayTime: resDate,
      lisenceinfo: err,
    });
  }
};
