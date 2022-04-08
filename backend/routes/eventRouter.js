import express from "express";
import Event from '../models/event.model.js';
const router=express.Router();
router.route("/",).get((req,res)=>{
   console.log("showing");
    Event.find(function(err,events)
  {
    if(!err)
    res.json(events);
    else {
      res.status(400).json('Error :'+err);
    }
  });
});
router.route("/add").post((req,res)=>{
 const title=req.body.title,description=req.body.description,time=req.body.time,guest=req.body.guest,date=req.body.date;
 Event.findOne({title:title},function(err,curr_event)
{
     if(curr_event) { res.json('false');}
     else {
       const newEvent=new Event({
           title:title,
           description:description,
           guest:guest,
           date:date,
           time:time,
           });
           newEvent.save();
           res.json(newEvent);
       }
});
});
router.route("/delete").post((req,res)=>{
 const title=req.body.title;
 console.log(title);
 Event.findOneAndDelete({title:title},function(err,curr_event)
{
     if(err) { res.json('false');}
     else {
       res.json('true');
       }
});
});
export default router;
