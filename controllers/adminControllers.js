const Admin = require("../models/adminModel");
const adminEntered=async(req,res)=>{
    try{
        //  console.log(req.body.name);
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
    
        if(password==cpassword){
           const admin=new Admin({
            name:req.body.name,
            email:req.body.email,
            dob:req.body.dob,
            mobileno:req.body.mobileno,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
        })
            const registered=await admin.save();
         res.render("home");
        }
        else{
            res.send("passwords are not matching");
            }
        }
       catch(err){
          res.status(400).send(err);
      }
}
const adminRegistered=async(req,res)=>{
    try{
        res.render("adminRegister");
    }
    catch(error){
        console.log(error);
    }
}

// for login page
const loginadmin=async(req,res)=>{
    try{
        res.render("adminlogin");
    }
    catch(error){
        console.log(error);
    }
}

const afterlogin=async(req,res)=>{
    try{
        let check=await Admin.findOne({email:req.body.email})
        if(check.password==req.body.password){
            req.session.user_id = check._id;
            // console.log("User ID set in session:", req.session.user_id);
             res.render("admininside")
        }
        else
         res.send("wrong details")
    }
    catch{
       res.send("Wrong credentials")
    }
}
module.exports={
    adminEntered,
    adminRegistered,
    loginadmin,
    afterlogin
}