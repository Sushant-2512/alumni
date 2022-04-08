import React from 'react';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import { useNavigate } from 'react-router-dom';

const AlumniCard = (props) => {
  const authCtx=useContext(AuthContext)
  const history=useNavigate();
     const {phoneNumber, fname, lname, profession, currentProfession,email} = props.data;
  function sendReq()
  {
    console.log("ig");
    authCtx.setAlumniEmail(email);
       history("/message");
  }

    return (
        <div className="card-alumni">
            <div className="card-top">
                <img src="images/profile.png" alt="Avatar" />
                <svg xmlns="http://www.w3.org/2000/svg" className="messege" viewBox="0 0 20 20" fill="currentColor" onClick={sendReq}>
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="card-bottom">
                <h4><span>{fname}</span><span>{lname}</span></h4>
                <p>{profession}</p>
                <p>{currentProfession}</p>
                <div><span>Contact Number</span><span>{phoneNumber}</span></div>
            </div>
        </div>
    );
};

export default AlumniCard;
