const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/softwareProject");
const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT||3000
const bodyparser=require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','hbs');
app.set('views','./views');
const session=require("express-session");
const config=require("./config/config");
app.use(session({secret:config.sessionSecret}));
const Student=require("./controllers/studentController");
const AdmitStudent=require("./controllers/studentController");
const Faculty=require("./controllers/facultyController");
const Admin=require("./controllers/adminControllers");
const Marks=require("./controllers/MarksController");
const auth=require("./middleware/auth");
app.get("/",Student.loadHome);
app.get("/login",auth.isLogout,Student.loginLoad);
app.post("/login",Student.verifyLogin); 
app.get("/adminlogin",Admin.loginadmin);
app.post("/adminlogin",Admin.afterlogin);
app.get("/facultylogin",Faculty.loginfaculty);
app.post("/facultylogin",Faculty.afterfacultylogin);
app.get("/registration",auth.isLogout,Student.loadRegister);
app.post("/registration",Student.insertStudent);
app.get("/facultyRegister",Faculty.facultyRegistered);
app.post("/facultyRegister",Faculty.facultyMember);
app.get("/adminRegister",Admin.adminRegistered);
app.post("/adminRegister",Admin.adminEntered);
app.get("/inside",Student.insideEntry);
app.get("/printRegistrationform",Student.insidePage);

app.get("/admissionform",AdmitStudent.admission);
app.post("/admissionform",AdmitStudent.admitStudent);
app.get("/admitcard",AdmitStudent.admitcard);
app.get("/gradecard",AdmitStudent.gradecard);
app.get("/insideadmissionform",AdmitStudent.insideadmissionform);
app.get("/departmentelective",AdmitStudent.departmentelective);
app.get("/club",AdmitStudent.club);
app.get("/placement",AdmitStudent.placement);
app.get("/alumnidetails",Student.alumnidetails);
app.get("/feePayment",AdmitStudent.feePayment);
app.get("/downloadReceipt",AdmitStudent.downloadReceipt);
app.get("/logout",AdmitStudent.logout);
//for faculty
app.get("/facultyprofile",Faculty.getProfile);
app.get("/facultytimetable",Faculty.timetable);
app.get("/studentInfo",Faculty.studentInfo);
app.get("/studentMarks",Marks.studentMarks);
app.post("/studentMarks",Marks.insertMarks);
app.listen(PORT,function(){
    console.log(`Server is running at ${PORT}...`);
})