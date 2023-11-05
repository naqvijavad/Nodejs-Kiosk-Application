$(document).ready(function () {

});

// appending text to selected html element
const appendTextbyId = (id, message) => {
  document.getElementById(id).innerHTML = message;
};

const validate = (event) => {
  let flag = false;

  // validate first name
  let firstNameElement = document.getElementById("firstName");
  // if field is empty
  if (!firstNameElement.value) {
    appendTextbyId("firstNameError", "Please enter the First name or format is not correct");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("firstNameError", "");
    flag = true;
  }

  // validate last name
  let lastNameElement = document.getElementById("lastName");
  // if field is empty
  if (!lastNameElement.value) {
    appendTextbyId("lastNameError", "Please enter the last name or format is not correct");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("lastNameError", "");
    flag = true;
  }

  let ageElement = document.getElementById("age");
  // if field is empty
  if (!ageElement.value) {
    appendTextbyId("ageError", "Age is Mandatory");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("ageError", "");
    flag = true;
  }

 
  // validate license number
  let licenseNumberElement = document.getElementById("licenseNumber");
  // if field is empty
  if (!licenseNumberElement.value) {
    appendTextbyId("licenseNumberError", "License is Mandatory");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("licenseNumberError", "");
    flag = true;
  }

  // validate car make
  let carMakeElement = document.getElementById("carMake");
  // if field is empty
  if (!carMakeElement.value) {
    appendTextbyId("carMakeError", " Make Field is Mandatory");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("carMakeError", "");
    flag = true;
  }

  // validate car model
  let carModelElement = document.getElementById("carModel");
  // if field is empty
  if (!carModelElement.value) {
    appendTextbyId("carModelError", "Model is required");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("carModelError", "");
    flag = true;
  }

  // validate year
  let yearElement = document.getElementById("year");
  // if field is empty
  if (!yearElement.value) {
    appendTextbyId("yearError", "Year is Mandatory");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("yearError", "");
    flag = true;
  }

  // validate plat number
  let plateNumberElement = document.getElementById("plateNumber");

  // if field is empty
  if (!plateNumberElement.value) {
    appendTextbyId("plateNumberError", "Plate number is Mandatory");
    event.preventDefault();
    flag = false;
  } else {
    appendTextbyId("plateNumberError", "");
    flag = true;
  }
  return flag;
};

// setting formatting for the date
$(function () {
  $("#pickup_date").datepicker({
    dateFormat: "dd/mm/yy",
  });
});
