const user = require('../models/user');
module.exports= async (req,res)=>{
    var data = await user.findOne({_id:loggedIn})
    console.log(here)
    if(data){
        if(firstName!="Default"){
      
        
            res.render('gTest',{user:data})
  }
  else{
    res.redirect('/g2Test');
  }
}
  }  