import { useRef,useEffect,useState,useContext } from 'react';
import axios from  'axios';
import AuthContext from "./store/AuthContext";


const SuggestEvent = () => {
  // const [AdminEmail,setAdminEmail]=useState("")
  const authCtx=useContext(AuthContext);
  const adminemail=authCtx.AdminEmail;
    const title=useRef()
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
        const eventData="title:"+title.current.value+"    "+"Description:"+description.current.value;
        const obj={name:"user of alumni portal",email:authCtx.data.email,rEmail:authCtx.AdminEmail,subject:"suggestion for Event",text:eventData}
           console.log(obj);
        axios.post("http://localhost:5000/email/",obj).
        then( (res) => {
             if(res.data=='false') {console.log("false");}
              else {console.log("true");}
        })
    console.log(obj);
    }

    return (
        <div className='form-out'>
            <form onSubmit={SubmitHandler} className="form-in">
                <div>
                    <h1>Suggest for Event</h1>
                </div>
                <div className="event-input">
                    <input type="text" placeholder="title" ref={title}></input>
                </div>
                <div className="event-input">
                    <textarea placeholder="discription" id="discription" ref={description} ></textarea>
                </div>
                <div className="submit-btn-event-form">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SuggestEvent;
