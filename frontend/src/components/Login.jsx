import React from 'react';
import {useRef} from 'react';
import axios from 'axios';
import AuthContext from "./store/AuthContext";
import {useNavigate} from 'react-router-dom';
const date=new Date();
function Login() {


          const authCtx=React.useContext(AuthContext);
          const email=useRef();
          const password=useRef();
         // const [member,manageMember]=React.useState({email:"",password:""});
         const history=useNavigate();
         // function manageChange(event)
         // {
         //         const {name,value}=event.target;
         //         if(name=="email") { manageMember((prev)=> ({ ...prev,[name]:value})) }
         //         else if(name=="password") { manageMember((prev)=> ({ ...prev,[name]:value})) }
         //
         // }
       function manageSubmit(event)
       {
          const  member={email:email.current.value,password:password.current.value}
               event.preventDefault();
             axios.post("http://localhost:5000/alumni/findone",member).
             then(res=> {
                    if(res.data=="notfound") {


                     axios.post("http://localhost:5000/students/findone",member)
                     .then(res=> {
                          if(res.data=="notfound") {
                             axios.post("http://localhost:5000/admin/",member).
                             then( res =>{
                                       if(res.data=="notfound")
                                       {
                                          alert("username or password is invalid!");
                                       }
                                       else {
                                         authCtx.login({...res.data,isAdmin:true});
                                         console.log("admin");
                                           history("/");

                                       }

                             }

                             )

                          }
                          else {

                            // props.manageMember({...res.data,isAlumni:false});
                            console.log(res.data);
                            authCtx.login({...res.data,isAlumni:false});
                            // email.current.value="";
                            //   password.current.value="";
                            history("/");
                              }
                     })
                   }
                    else {
                        // props.manageMember({...res.data,isAlumni:true});
                           console.log(res.data);
                          authCtx.login({...res.data,isAlumni:true});
                          // email.current.value="";
                          //   password.current.value="";
                          history("/");
                    }
               });


       }
   return(

     <div className="login">
     <form style={{textAlign:"center"}} onSubmit={manageSubmit} className="form-signin" method="post">
  <img className="mb-4" src="images/mglogo.jpg" alt="" width="200" height="200" />
  <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
    <input type="email" ref={email} className="form-control" name="email" placeholder="email" required />
    <input type="password"  ref={password} className="form-control" name="password" placeholder="password" required />
    <p onClick={()=>{history("/register")}}>Create a new account ?</p>
    <button className="btn btn-lg btn-primary btn-block" type="submit" name="submit">log in</button>
  <p className="mt-5 mb-3 text-muted">@{date.getFullYear()}</p>
</form>
</div>
);
}
export default Login;
