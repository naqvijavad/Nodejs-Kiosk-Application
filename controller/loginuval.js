const G2new =require('../models/user.js');
const bcrypt = require("bcrypt")

module.exports = async(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    var username = req.body.username;
    var password = req.body.password;
    var utype = req.body.usertype;
    

    var datas= await G2new.findOne({username : username})   
    if(datas)
    {
        
        bcrypt.compare(password,datas.password, (error,same) =>{

            console.log(same, datas, 'correct')
            if(same){
               
                req.session.userId = datas._id
                req.session.usertype = datas.usertype;
                res.redirect("/")
            }
            else{
                res.redirect("login")
            }
        })


    }
    else{
        res.redirect("login")
    }
}