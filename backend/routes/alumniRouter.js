import express from "express";
import Alumni from '../models/alumni.model.js';
import multer from 'multer';

const storage=multer.diskStorage({
  destination:function(req,file,cb){

    cb(null,'./uploads/');
  },
  filename:function(req,file,cb){

    cb(null,file.originalname);
  }
});
const fileFilter=(req,file,cb)=>{

  if(file.mimetype=='image/jpeg'|| file.mimetype=='image/png')
  {
    cb(null,true);
  }
  else {
    cb(null,false);
  }
}
const upload=multer({storage:storage,limits:{
  fileSize: 1024*1024*5
}});
const router=express.Router();
router.route("/",).get((req,res)=>{
    Alumni.find()
    .then(alumni => res.json(alumni))
    .catch(err => res.status(400).json('Error :'+err));
});
router.route("/add").post(upload.single('AlumniImage'),(req,res)=>{
  console.log(req.file);
  const fname=req.body.fname,lname=req.body.lname,email=req.body.email,password=req.body.password;
  const phoneNumber=req.body.contactNumber,passingYear=req.body.passingYear;
const profession=req.body.profession;
  Alumni.findOne({email:email},function(err,curr_alumni)
{
      if(curr_alumni) { res.json('Alumni aleray exist');}
      else {
        const newAlumni=new Alumni({
              fname:fname,
              lname:lname,
              email:email,
              password:password,
              phoneNumber:phoneNumber,
              passingYear: Number(passingYear),
              profession:profession,
              image:req.file.path
            });
            res.json(newAlumni);
            newAlumni.save();
   }
});
});

router.route("/findone").post((req,res)=>{
     const email=req.body.email,password=req.body.password;
     Alumni.findOne({email:email},function(err,curr_alumni)
   {

        if(curr_alumni && curr_alumni.password===password) { res.json(curr_alumni); }
        else{ res.json('notfound');}
   })
});
router.route("/update").post((req,res)=>{
  Alumni.findOneAndUpdate({email:req.body.email},req.body,(err,curr_alumni) =>
  {
     if(!curr_alumni) {  res.json('notfound'); }
     else {res.json(curr_alumni); }
  }
)
});
router.route("/delete").post((req,res)=>{
  Alumni.findOneAndDelete({email:req.body.email},(err,curr_alumni) =>
  {
     if(!curr_alumni) {  res.json('notfound'); }
     else {res.json('deleted'); }
  }
)
});

export default router;
