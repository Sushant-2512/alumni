import mongoose from 'mongoose';
const studentSchema=new mongoose.Schema({
  fname:String,
  lname:String,
  email:String,
  password:String,
  phoneNumber:String,
  passingYear:Number,
  profession:String
});
const Student=mongoose.model("Student",studentSchema);
export default Student;
