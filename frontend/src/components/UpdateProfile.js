import React from 'react';
import {useRef} from 'react';
import axios from 'axios';
import AuthContext from "./store/AuthContext";
import {useNavigate} from 'react-router-dom';
function UpdateProfile()
{

  const history=useNavigate();
  const date=new Date();
     const authCtx=React.useContext(AuthContext);
     const fname=useRef();
     const lname=useRef();
     const email=useRef();
     const password=useRef();
     const contactNumber=useRef();
     const passingYear=useRef();
     const collegeWorkingcompany=useRef();
     const profession=useRef();
   function handleSubmit(event)
   {
     event.preventDefault();
     console.log(profession.current.value);
   const    member={fname:authCtx.data.fname,lname:authCtx.data.lname,email:authCtx.data.email,password:password.current.value,contactNumber:contactNumber.current.value,
         passingYear:authCtx.data.passingYear,collegeWorkingcompany:collegeWorkingcompany.current.value,profession:profession.current.value}
     console.log(member);
         if(!authCtx.data.isAlumni)
             axios.post("http://localhost:5000/students/update",member)
             .then(function(response){
               if(response.data=="false") { alert("user alerady exist!");}
               else {
                  authCtx.login({...response.data,isAlumni:false});
               // props.manageMember({...response.data,isAlumni:false});
                 history("/")
               }
              });
            else {
                  axios.post("http://localhost:5000/alumni/update",member)
                     .then(function(response){
                       if(response.data=="false") { alert("user alerady exist!");}
                      else {
                        console.log(response.data);
                         // props.manageMember({...response.data,isAlumni:true});
                          authCtx.login({...response.data,isAlumni:true});
                          history("/");}
                     });
            }


   }

    return(
      <div className="login">
       <form style={{textAlign:"center"}}  onSubmit={handleSubmit} className="form-signin">
   <img className="mb-4" src="images/mglogo.jpg" alt="" width="200" height="200" />
   <h1 className="h3 mb-3 font-weight-normal">Update</h1>
     <input  ref={fname} type="text" className="form-control" name="fname" placeholder="First Name" value={authCtx.data.fname} required autoFocus disabled />
     <input  ref={lname} type="text"  className="form-control" name="lname" placeholder="Last Name" value={authCtx.data.lname} required disabled/>
     <input  ref={email} type="email" className="form-control" name="email" placeholder="email" value={authCtx.data.email} required disabled/>
     <input  ref={password} type="password" className="form-control" name="password" placeholder="password"  required/>
     <input  ref={contactNumber} type="text" className="form-control" name="contactNumber" placeholder="contact number" required  />
       <input  ref={passingYear} type="text" className="form-control" name="passingYear" placeholder="Passing-Year" value={authCtx.data.passingYear}  disabled />
       <br />
     <input  ref={collegeWorkingcompany} type="text" className="form-control" name="collegeWorkingcompany" placeholder="college/company" required />
     <select name="payment" className="form-control" ref={profession}>
                 <option className="form-control " value="google-pay"  disabled selected required>select Profession</option>
                   <option className="form-control" value="Student">Student</option>
                 <option className="form-control" value="Computer Science Engenering">Computer Science Engenering</option>
                 <option className="form-control" value="Civil Engenering">Civil Engenering</option>
                   <option className="form-control" value="mechanical Engenering">mechanical Engenering</option>
                     <option className="form-control" value="Electrical Engenering">Electrical Engenering</option>
                       <option className="form-control" value="Electronics Engenering">Electronics Engenering</option>
                         <option className="form-control" value="Civil Services">Civil Services</option>
                         <option className="form-control" value="IT sector">IT sector</option>
                           <option className="form-control" value="BSc">BSc</option>
                             <option className="form-control" value="MBBS">MBBS</option>
                               <option className="form-control" value="BHMS">BHMS</option>
                                 <option className="form-control" value="BAMS">BAMS</option>

     </select>
     <button  className="btn btn-lg btn-primary btn-block" type="submit" name="submit" >Update</button>
   <p className="mt-5 mb-3 text-muted">&copy;{ date.getFullYear()}</p>
 </form>
 </div>
 );
}
export default UpdateProfile;
