import mongoose from 'mongoose';
const eventSchema=new mongoose.Schema({
  title:String,
  description:String,
  guest:String,
  date:String,
  time:Number,
});
const Event=mongoose.model("Event",eventSchema);
export default Event;
