const mongoose=require("mongoose");
const facultySchema=mongoose.Schema({
    fname:{
        type:String,
        // required:true
      },
    lname:{
        type:String
    },
    dname:{
        type:String
    },
    dob:{
        type:Date
    },
    mobileno:{
        type:Number
    },
    gender:{
        type:String
    },
    aadharno:{
        type:Number
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    district:{
        type:String
    },
    pincode:{
        type:Number
    },
    nationality:{
        type:String
    },
      email:{
          type:String,
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
      },

});

module.exports=mongoose.model("Faculty",facultySchema);