import express from "express";
import Admin from '../models/admin.model.js';
const router=express.Router();
router.route("/").post((req,res)=>{
    Admin.findOne({email:req.body.email},(err,curr_admin) =>
  {
    if(err)
    {
           res.status(400).json('Error :'+err);
    }
    else {
      if(curr_admin && curr_admin.password===req.body.password) {res.json(curr_admin);}
      else{
        res.json('notfound');
      }

    }
  });
  });
  router.route("/get").get((req,res)=>{
    Admin.find((err,curr_admin) =>
  {
    if(err)
    {
           res.status(400).json('Error :'+err);
    }
    else {
      if(curr_admin) {res.json(curr_admin[0]);}
      else{
        res.json('notfound');
      }

    }
  });
  });
router.route("/change").post((req,res)=>{
  Admin.findOne({email:req.body.email},(err,curr_admin) =>
  {
    if(curr_admin) { res.send('false');}
    else{
      const newAdmin=new Admin({
            email:req.body.email,
            password:req.body.password,
            fname:req.body.fname,
            lname:req.body.lname,
          });
          newAdmin.save();
          res.json('admin changed!');
    }
  });
});
export default router;
