import app from "./server.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port=8000;
mongoose.connect(process.env.ALUMNIPORTAL_DB_URI, {useNewUrlParser: true})
.catch(err => {
 console.log(err.stack);
 process.exit(1);
 })
 .then(async client => {
   app.listen(port,() => {
    console.log(`listening on port ${port}`);
   });
 });
