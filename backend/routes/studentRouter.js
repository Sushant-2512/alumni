import express from "express";
import Student from '../models/student.model.js';
const router=express.Router();
router.route("/",).get((req,res)=>{
   console.log("showing");
    Student.find(function(err,students)
  {
    if(!err)
    res.json(students);
    else {
      res.status(400).json('Error :'+err);
    }
  });
});
router.route("/add").post((req,res)=>{
  const fname=req.body.fname,lname=req.body.lname,email=req.body.email,password=req.body.password;
  const phoneNumber=req.body.contactNumber,passingYear=req.body.passingYear;
  const profession=req.body.profession;
  Student.findOne({email:email},function(err,curr_student)
{
      if(curr_student) { res.json('false');}
      else {
        const newStudent=new Student({
              fname:fname,
              lname:lname,
              email:email,
              password:password,
              phoneNumber:phoneNumber,
              passingYear: Number(passingYear),
              profession:profession
            });
            res.json(newStudent);
            newStudent.save();
        }
});
});
router.route("/findone").post((req,res)=>{
     const email=req.body.email,password=req.body.password;
     Student.findOne({email:email},function(err,curr_student)
   {

        if(curr_student && curr_student.password===password) { res.json(curr_student); }
        else{ res.json('notfound');}
   })
});
router.route("/update").post((req,res)=>{
  Student.findOneAndUpdate({email:req.body.email},req.body,(err,curr_student) =>
  {
     if(!curr_student) {  res.json('notfound'); }
     else {res.json(curr_student); }
  }
)
});
router.route("/delete").post((req,res)=>{
  Student.findOneAndDelete({email:req.body.email},(err,curr_student) =>
  {
     if(!curr_student) {  res.json('notfound'); }
     else {res.json('deleted'); }
  }
)
});
export default router;
