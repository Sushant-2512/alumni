import mongoose from 'mongoose';
const adminSchema=new mongoose.Schema({
  fname:String,
  lname:String,
  email:String,
  password:String
});
const Admin=mongoose.model("Admin",adminSchema);
export default Admin;
