const Faculty = require("../models/facultyModel");
const facultyMember=async(req,res)=>{
    try{
        //  console.log(req.body.name);
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
    
        if(password==cpassword){
           const facultyMember=new Faculty({
            fname:req.body.fname,
            lname:req.body.lname,
            dname:req.body.dname,
            mobileno:req.body.mobileno,
            email:req.body.email,
            dob:req.body.dob,
            gender:req.body.gender,
            aadharno:req.body.aadharno,
            address:req.body.address,
            state:req.body.state,
            district:req.body.district,
            pincode:req.body.pincode,
            password:req.body.password,
            nationality:req.body.nationality,
            confirmpassword:req.body.confirmpassword
        })
            const registered=await facultyMember.save();
         res.render("../views/home");
        }
        else{
            res.send("passwords are not matching");
            }
        }
       catch(err){
          res.status(400).send(err);
      }
}
const facultyRegistered=async(req,res)=>{
    try{
        res.render("facultyRegister");
    }
    catch(error){
        console.log(error);
    }
}

// for login page
const loginfaculty=async(req,res)=>{
    try{
        res.render("facultylogin");
    }
    catch(error){
        console.log(error);
    }
}

const afterfacultylogin=async(req,res)=>{
    try{
        let check=await Faculty.findOne({email:req.body.email})
        if(check.password==req.body.password){
            req.session.user_id = check._id;
            // console.log("User ID set in session:", req.session.user_id);
             res.render("facultyinside")
        }
        else
         res.send("wrong details")
    }
    catch{
       res.send("Wrong credentials")
    }
}

// for faculty profile page
const  getProfile=async(req,res)=>{
    try{
        const myData = await Faculty.findById({_id:req.session.user_id});
        console.log(myData);
        res.render("facultyprofile", { user: myData });
    }
    catch(error){
        console.log(error);
    }
} 
//for faculty time table
const timetable=async(req,res)=>{
    try{
        res.render("facultytimetable");
    }
    catch(error){
        console.log(error);
    }
}
//for student info
const studentInfo=async(req,res)=>{
    try{
        res.render("studentInfo");
    }
    catch(error){
        console.log(error);
    }
}

module.exports={
    facultyMember,
    facultyRegistered,
    loginfaculty,
    afterfacultylogin,
    getProfile,
    timetable,
    studentInfo
}