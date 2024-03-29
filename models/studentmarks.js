const mongoose=require("mongoose");
const studentMarks=mongoose.Schema({
    name:{
        type:String,
        // required:true
      },
    eno:{
        type:Number
    },
    rollno:{
        type:Number
    },
    department:{
        type:String
    },
    subject:{
        type:String
    },
    marks:{
        type:Number
    },
    pass:{
        type:String
    },
    fail:{
        type:String
    }
});

module.exports=mongoose.model("Marks",studentMarks);