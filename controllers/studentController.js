const AdmitStudent=require("../models/admitStudent");
const Student = require("../models/studentModel");
const insertStudent=async(req,res)=>{
    try{
        //  console.log(req.body.name);
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
    
        if(password==cpassword){
           const registeredStudent=new Student({
            name:req.body.name,
            email:req.body.email,
            dob:req.body.dob,
            mobileno:req.body.mobileno,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
        })
            const registered=await registeredStudent.save();
         res.render("../views/admissionform");
        }
        else{
            res.send("passwords are not matching");
            }
        }
       catch(err){
          res.status(400).send(err);
      }
}
// for admissionform
const admission=async(req,res)=>{
    try{
        res.render("admissionform");
    }
    catch(error){
        console.log(error);
    }
}


const admitStudent=async(req,res)=>{
    try{
      //  console.log(req.body.name);
      const admittedStudent=new AdmitStudent({
          name:req.body.name,
          fathername:req.body.fathername,
          mothername:req.body.mothername,
          email:req.body.email,
          dob:req.body.dob,
          bloodgp:req.body.bloodgp,
          mobileno:req.body.mobileno,
          nationality:req.body.nationality,
          religion:req.body.religion,
          address:req.body.address,
          state:req.body.state,
          pincode:req.body.pincode,
          corresaddress:req.body.corresaddress,
          corresstate:req.body.corresstate,
          correspincode:req.body.correspincode,
          exam:req.body.exam,
          year:req.body.year,
          rollno:req.body.rollno,
          rank:req.body.rank,
          score:req.body.score,
          degree:req.body.degree,
          selectionexamrollno:req.body.selectionexamrollno,
          branchname:req.body.branchname,
          coursename:req.body.coursename,
          session:req.body.session,
          admissiondate:req.body.admissiondate,
          eno:req.body.eno,
          admissionno:req.body.admissionno,
          currentsession:req.body.currentsession,
          coursesession:req.body.coursesession,
          currentsemester:req.body.currentsemester,
          paymentmode:req.body.paymentmode,
          amount:req.body.amount,
          paymentdate:req.body.paymentdate,
          bankname:req.body.bankname,
          yearofpayment:req.body.yearofpayment,
          password:req.body.password
      })
      const admitted=await admittedStudent.save();
      res.render("home");
    }catch(err){
        res.status(400).send(err);
    }
  }
// for home page

const loadHome=async(req,res)=>{
    try{
        res.render("home");
    }
    catch(error){
        console.log(error);
    }
}


//for login page
const loginLoad=async(req,res)=>{
    try{
        res.render("login");
    }
    catch(error){
        console.log(error);
    }
}

// login user methods started---

const verifyLogin=async(req,res)=>{
    try{
        let check=await AdmitStudent.findOne({email:req.body.email})
        if(check.password==req.body.password){
            req.session.user_id = check._id;
            console.log("User ID set in session:", req.session.user_id);
             res.render("inside")
        }
        else
         res.send("wrong details")
    }
    catch{
       res.send("Wrong credentials")
    }
}
// for registration page
const loadRegister=async(req,res)=>{
    try{
        res.render("registration");
    }
    catch(error){
        console.log(error);
    }
}

// inside page entry
const insideEntry=async(req,res)=>{
    try {
        
        res.render("inside");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



// for printRegistration form page
const insidePage=async(req,res)=>{
    try {
        const myData = await AdmitStudent.findById({_id:req.session.user_id});
        console.log(myData);
        res.render('printRegistrationform', { user: myData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

//admitcard
const admitcard=async(req,res)=>{
    try {
        const myData = await AdmitStudent.findById({_id:req.session.user_id});
        res.render("admitcard",{ user: myData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

//grade card

const gradecard=async(req,res)=>{
    try {
        const myData = await AdmitStudent.findById({_id:req.session.user_id});
        res.render("gradecard",{ user: myData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

//inside admissionform page

const insideadmissionform=async(req,res)=>{
    try {
        const myData = await AdmitStudent.findById({_id:req.session.user_id});
        res.render("insideadmissionform",{ user: myData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

//department elective
const departmentelective=async(req,res)=>{
    try {
        const myData = await AdmitStudent.findById({_id:req.session.user_id});
        res.render("departmentelective",{ user: myData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// club page

const club=async(req,res)=>{
    try {
        res.render("club");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// placement page


const placement=async(req,res)=>{
    try {
        res.render("placement");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
//alumni details
const alumnidetails=async(req,res)=>{
    try {
        res.render("alumnidetails");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
//fee payment
const feePayment=async(req,res)=>{
    try {
        res.render("feePayment");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
//for download receipt
const downloadReceipt=async(req,res)=>{
    try {
        res.render("downloadReceipt");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
//for logout page
const logout=async(req,res)=>{
    try {
        res.render("home");
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports={
    insertStudent,
    admitStudent,
    admission,
    verifyLogin,
    loadRegister,
    loginLoad,
    loadHome,
    insidePage,
    insideEntry,
    admitcard,
    gradecard,
    insideadmissionform,
    departmentelective,
    club,
    placement,
    feePayment,
    downloadReceipt,
    logout,
    alumnidetails
}