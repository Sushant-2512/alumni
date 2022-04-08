import React from 'react';
import {useContext} from "react";
import AuthContext from "./store/AuthContext";

const SingleEvent = () => {
    const authCtx=useContext(AuthContext);
    console.log(authCtx.SingleEvent);
    const data=authCtx.SingleEvent;
    const{title,description,guest,date,time}=data;
    let newTime;
    if(time>12)
    {
        time=time-12;
        newTime=`${time}   PM`;
    }
    else{
        newTime=`${time}   AM`;
    }
    return (
        <div className='single-event'>
            <h1 className='single-event-title'>{title}</h1>
            <p className='single-event-description'>{description}</p>
            <p className='single-event-guest'>{`Guest : ${guest}`}</p>
            <div className='single-event-schedule'>
                <h1>Event Schedule</h1>
                <div className="single-event-date-time">
                    <div className='single-event-date'><p>Date</p><p>{date}</p></div>
                    <div className='single-event-time'><p>Time</p><p>{newTime}</p></div>
                </div>
            </div>

        </div>
    );
};

export default SingleEvent;
