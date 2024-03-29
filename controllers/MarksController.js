const Marks = require("../models/studentmarks");

const studentMarks=async(req,res)=>{
    try{
        res.render("studentMarks");
    }
    catch(error){
        console.log(error);
    }
}

const insertMarks=async(req,res)=>{
    try{
      //  console.log(req.body.name);
      const marks=new Marks({
        name:req.body.name,
        eno:req.body.eno,
        rollno:req.body.rollno,
        department:req.body.department,
        subject:req.body.subject,
        marks:req.body.marks,
        pass:req.body.pass,
        fail:req.body.fail,
      
      })
      const entered=await marks.save();
      res.render("home");
    }catch(err){
        res.status(400).send(err);
    }
  }
module.exports={
    studentMarks,
    insertMarks
}