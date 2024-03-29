const mongoose=require("mongoose");
const student=mongoose.Schema({
    name:{
        type:String,
        required:true
      },
      email:{
          type:String,
          required:true,
          unique:true
      },
      dob:{
          type:Date,
        required:true
      },
      mobileno:{
          type:Number,
        required:true,
        unique:true
      },
      password:{
          type:String
        // required:true
      },
      confirmpassword:{
          type:String
        // required:true
      }
});

module.exports=mongoose.model("Student",student);