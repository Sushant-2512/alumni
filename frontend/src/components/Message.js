import { Navigate } from 'react-router-dom';
import { useContext,useRef } from 'react';
import AuthContext from './store/AuthContext';
import axios from "axios";

const Message = () => {
    const authCtx=useContext(AuthContext)
    const subject=useRef();
    const text=useRef();
    const submitHandler=(event)=>{
      event.preventDefault()
        console.log("hii");
        const wholeName=`${authCtx.data.fname} ${authCtx.data.lname}`;
        let obj={name:wholeName,email:authCtx.data.email,rEmail:authCtx.AlumniEmail,subject:subject.current.value,text:text.current.value}
        console.log(obj);
          axios.post("http://localhost:5000/email/",obj).
          then((res)=>{
                  if(res.data==="true") { console.log("true");}
          });

    }
    return (
        <div className='form-out'>
            <form onSubmit={submitHandler} className="form-in">
                <div>
                    <h1>Message</h1>
                </div>
                <div className="event-input">
                    <input placeholder="subject" ref={subject}></input>
                </div>
                <div className="event-input">
                    <textarea placeholder="text" ref={text}></textarea>
                </div>
                <div className="submit-btn-event-form">
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Message;
