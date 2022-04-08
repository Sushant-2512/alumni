import React from 'react';
import AuthContext from "./store/AuthContext";
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
function ShowEvent(props)
{
  const authCtx=useContext(AuthContext);
  const history=useNavigate();
  function handleClick()
  {
    console.log(props.event);
    authCtx.setSingleEvent(props.event);
    console.log(authCtx.SingleEvent);
    history("/singleevent");
  }

      return(   <li onClick={handleClick}>
        {   props.index===0 &&  <a style={{color:"#990000"}} ><p>{props.event.title} <img src="http://www.nitj.ac.in//images/New.gif"/></p></a> }
          {   props.index!==0 &&  <a style={{color:"#990000"}}><p>{props.event.title}</p></a> }
           </li>);
}
export default ShowEvent;
