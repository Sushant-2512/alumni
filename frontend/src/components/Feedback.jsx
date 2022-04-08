import React from 'react';
import { useRef,useEffect,useState,useContext } from 'react';
import axios from  'axios';
import AuthContext from "./store/AuthContext";

function Feedback()
{
  const authCtx=useContext(AuthContext);
  const adminemail=authCtx.AdminEmail;
    const description=useRef();
    useEffect(()=>{
      function getAdminEmail()
      {
              axios.get("http://localhost:5000/admin/get",).
              then((res)=>{
                   if(res.data) { authCtx.setAdminEmail(res.data.email); console.log(res.data.email); }
              })
      }
      getAdminEmail()
    },[adminemail])
    console.log(authCtx.AdminEmail);
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const eventData="title:feeedback of Alumni portal"+"   "+"Description:"+description.current.value;
        const obj={name:"user of alumni portal",email:authCtx.data.email,rEmail:authCtx.AdminEmail,subject:"feedback",text:eventData}
           console.log(obj);
        axios.post("http://localhost:5000/email/",obj).
        then( (res) => {
             if(res.data=='false') {console.log("false");}
              else {console.log("true");}
        })
    console.log(obj);
    }
   return (
      <div style={{backgroundColor:"#dff7e9",marginTop:"3rem"}}>
      <div style={{margin:"1rem 10rem 1rem 10rem"}} className="Container">
               <div className="row">
               <div className="col-lg-3 col-md-6" style={{marginTop:"3rem"}}>
               <h1 style={{fontSize:"1.5rem"}}>Alumni Portal</h1><br/>
               <p>This is the alumni Portal used to interact with our senior and get the benifit of their experience.</p>
               <a class="faicon-facebook" href="https://www.facebook.com/demo@nitj/"><i class="fab fa-facebook"></i></a>
               <a class="faicon-linkedin" href="https://www.linkedin.com/in/demo"><i class="fab fa-linkedin"></i></a>
               <a class="faicon-vk" href="https://www.instagram.com/demo_nitj/"><i class="fab fa-instagram"></i></a>
                </div>
                <div className="col-lg-1 col-md-6">
                </div>
                <div className="col-lg-3 col-md-6" style={{marginTop:"3rem"}}>
                  <h3>Postal Address</h3>
                  <ul>
                    <li>Mahtma Gandhi vidhalay Rukadi</li>
                    <li>Main Road,Rukadi 416118</li>
                    <li>Rukadi,Maharashtra</li>
                    <li>India</li>
                  </ul>
               </div>
               <div className="col-lg-1 col-md-6">
               </div>
               <div className="col-lg-3 col-md-6">
                 <div class="container d-flex justify-content-center">
          <div class="card mt-5 pb-5">
              <div class="d-flex flex-row justify-content-between p-3 adiv text-white"> <i class="fas fa-chevron-left"></i> <span class="pb-3">feedback</span> <i class="fas fa-times"></i> </div>
              <div class="mt-2 p-4 text-center">
                  <h6 class="mb-0">Your feedback help us to improve.</h6> <small class="px-3">Please let us know about your chat experience.</small>
                  <div class="d-flex flex-row justify-content-center mt-2"> <img className="card-img" src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png" /> <img className="card-img" src="https://img.icons8.com/fluent/48/000000/sad.png" /> <img className="card-img" src="https://img.icons8.com/color/48/000000/happy.png" /> <img className="card-img" src="https://img.icons8.com/emoji/48/000000/smiling-face.png" /> <img className="card-img" src="https://img.icons8.com/color/48/000000/lol.png" /> </div>
                  <div class="form-group mt-4"> <textarea ref={description} class="form-control" rows="4" placeholder="Message"></textarea> </div>
                  <div class="mt-2"> <button type="button" onClick={SubmitHandler} class="btn btn-primary btn-block"><span>Send feedback</span></button> </div>
                  <p class="mt-3">Continue without sending feedback</p>
              </div>
          </div>
      </div>
               </div>
                </div>
                </div>

      </div>
   );
}
export default Feedback;
