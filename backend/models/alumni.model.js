import mongoose from 'mongoose';
const alumniSchema=new mongoose.Schema({
  fname:String,
  lname:String,
  email:String,
  password:String,
  phoneNumber:String,
  passingYear:Number,
  profession:String,
  image:String
});
const Alumni=mongoose.model("Alumni",alumniSchema);
export default Alumni;
