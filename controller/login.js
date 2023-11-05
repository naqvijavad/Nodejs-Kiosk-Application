const userDetails = require('../models/user');
const bcrypt = require('bcrypt');

const login=(req,res)=>{
    const showMsgError = false;
    res.render('login', { showMsgError })
    }


    const Check = (req, res) => {
        const { username, password } = req.body;
        userDetails.findOne({ username: username }, (err, user) => {
          if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
              console.log(same, user, 'same')
              if (same) {
                // req.session.userId = user._id;
                // req.session.userType = user.user;
                // global.loggedIn = true;
                if (user.user === "driver") {
                  showAuthenticatedRoutes = true;
                } else {
                  showAuthenticatedRoutes = false;
                }
                req.session.userId = user._id
                req.session.usertype = user.usertype
                 req.session.firstName = user.firstName
                
                res.redirect("/");
              } else {
                const showMsgError = true;

                res.render("login", { showMsgError });
              }
            // res.render("index");
            });
          } else {
            res.redirect("login");
          }
        });
      }



module.exports={login,Check}

