import React from 'react';
import axios from "axios";
import AuthContext from "./store/AuthContext";
import {useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ShowEver from "./ShowEvent";
// <li>
//    <a style={{color:"#990000"}} href="#"><p>Workshop Coming Soon <img src="http://www.nitj.ac.in//images/New.gif"/></p></a>
//  </li>
//
//  <li>
//    <a style={{color:"#990000"}} href="#"><p>Meeting Report</p></a>
//  </li>
//
//
//    <li>
//       <a style={{color:"#990000"}} href="#"><p>Event Report</p></a>
//     </li>

function Event(){
  const history=useNavigate();
  function addEvent()
  {
        history("/addevent");
  }
  // function handleClick(ele)
  // {
  //   console.log(ele);
  //   authCtx.setSingleEvent(ele);
  //   console.log(  authCtx.SingleEvent);
  //   history("/singleevent");
  // }
function deleteEvent()
{
   history("/deleteevent");
}
   // const [events,manageEvents]=React.useState([]);
   const authCtx=useContext(AuthContext)
   useEffect(()=>{

     function getEvent() {
       axios.get("http://localhost:5000/event/",)
       .then( (res) =>{  authCtx.setEvent(res.data); console.log(res.data); })
     }

     getEvent();

   },[]);
   console.log(authCtx.Event);
    const allEvents=authCtx.Event.map((ele,index) =>
       {
         return(<ShowEver event={ele} index={index} id={index} />  );
     });

    console.log(allEvents);
   return(
             <div>
           <div  className="marqueeStyle" style={{height:"20rem"}} >
             <h2 style={{margin:"1rem"}}>Events</h2>
             <hr/>
          <marquee direction="up" scrollamount="3" onMouseOver="this.stop();" onMouseOut="this.start();">

        <ul>

        {allEvents}


        </ul>

      </marquee>
      </div>
      {authCtx.data.isAdmin && <div className="add-event-btn"><button onClick={addEvent}>Add Event<svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
</svg></button></div>}
{authCtx.data.isAdmin && <div className="add-event-btn"><button onClick={deleteEvent}>Remove Event<svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
</svg></button></div>}
      </div>
    );
}
export default Event;
