import express from "express";
import cors from "cors";
import studentRouter from "./routes/studentRouter.js";
import alumniRouter from "./routes/alumniRouter.js";
import evenRouter from "./routes/eventRouter.js";
import adminRouter from "./routes/adminRouter.js";
import emailRouter from "./routes/emailRouter.js";
const app=express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));
app.use('/students',studentRouter);
app.use('/alumni',alumniRouter);
app.use('/event',evenRouter);
app.use('/admin',adminRouter);
app.use('/email',emailRouter);

app.use("*",(req,res)=>(res.status(404).json({error:"Not Found"})));
export default app;
