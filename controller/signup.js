

const userDetails = require('../models/user');
const bcrypt = require("bcrypt")

const signUp = (req, res) => {
    const showMsgError = false;
    res.render("signup", { showMsgError });
  };
const signupInfo = (req, res) => {
    try {
      if (req.body.password === req.body.repassword) {
        const signindetails = {
            username: req.body.username,
            password: req.body.password,
            usertype: req.body.usertype,
        };
        userDetails.create(signindetails);
        res.redirect("/login");
      } else {
        const showMsgError = true;
        res.render("signup", { showMsgError });
      }
    } catch (e) {
      console.log(e);
    }
  }

module.exports = { signUp, signupInfo };
