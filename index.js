//packages
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const { setEngine } = require("crypto");
const mongoose = require("mongoose");
const expressSession =
require('express-session');
//connect app to the monggodb database
mongoose.set("strictQuery",false);
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.sqn9ivc.mongodb.net/blogapp?retryWrites=true&w=majority"
  , {useNewUrlParser: true}
  , (error)=>{
          console.log(error, 'connected!')
});
const authMiddleware = require('./middleware/auth.middleware')

//update user nam and passowrd,add db name before?
//files models
const user = require("./models/user.js");

// const loginController = require('./controller/login');
const g2Controller = require('./controller/g2_test');
const gtestController =require('./controller/gtest');
const {signUp,signupInfo} =require('./controller/signup');
const {login,Check} =require('./controller/login');
const gtestSearchController =require('./controller/gtestSearch');
const g2testSaveController =require('./controller/g2testSave');
const logoutController = require('./controller/logout');

const loginuvalcontroller = require("./controller/loginuval");
// const passwordMiddleware = require('./middleware/confirmpassword');
const appoinmentcontroller = require("./controller/appointment");
const addAppoinmentcontroller = require("./controller/addAppointment");
const bookAppoinmentcontroller = require("./controller/bookappointment");
const verifyAppoinmentcontroller = require("./controller/verifyAppoinment");



//creates express app
const app = express();

app.set("view engine", "ejs");
global.showAuthenticatedRoutes = false;
global.loggedIn = null;
global.usertype = null;
global.firstName = null;

//mainframe
app.use(express.static("public"));

// app.use(express.json());
// app.use(express.urlencoded());
const bodyParser = require("body-parser");
const logout = require("./controller/logout");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(expressSession({
  secret: 'nosecret',
  resave: false, 
    saveUninitialized: false
  }))

//server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});

//routes
app.use("*", (req, res, next) => {
 
  loggedIn = req.session.userId;
  usertype=req.session.usertype;
 firstName = req.session.firstName;
next()
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/g2Test',authMiddleware,g2Controller);
app.get('/logout',logoutController);
app.get('/login',login);
app.post("/Check", Check);
app.get('/search',authMiddleware,gtestSearchController);
app.get('/signup',signUp)
app.post("/signupInfo", signupInfo);
app.get('/gTest',authMiddleware,gtestController);
app.get("/dashboard", (req, res) => {
res.render("dashboard");
});
app.post("/post/data",authMiddleware, g2testSaveController);
//console.log(user);
app.post("/update", async (req, res) => {
  var licenseNo = req.body.licenseNumber;
  var make = req.body.carMake;
  var model = req.body.carModel;
  var year = req.body.year;
  var plate = req.body.plateNumber;
  console.log(req.body);
  await user.findOneAndUpdate(
    {
      licenseNumber: licenseNo,
    },
    {carDetails:{
      carMake: make,
      carModel: model,
      year: year,
      plateNumber: plate,
    }}
  );
  res.redirect("/gTest");
});


app.post("/loginuval", loginuvalcontroller);
app.get("/appointment", appoinmentcontroller);
app.post("/create", addAppoinmentcontroller);
app.post("/bookAppointment", bookAppoinmentcontroller);
app.post("/verifyAppoinment", verifyAppoinmentcontroller);