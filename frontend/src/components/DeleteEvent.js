import React from 'react';
import axios from 'axios';
import {useRef} from 'react';
function DeleteEvent()
{
  const event=useRef();
  function manageSubmit(e)
  {
     e.preventDefault();
     console.log(event.current.value);
     const ev={title:event.current.value};
       axios.post("http://localhost:5000/event/delete",ev).
       then((res)=>{
         console.log(res.data);
           if(res.data=="true"); else { alert("event not exist !");}
        })
  }
    return(
      <div className="delete-event">
<form className="example" style={{margin:"auto",maxWidth:"300px"}}>
<input ref={event} type="text" placeholder="Search event"  />
<button type="submit" onClick={manageSubmit}><i className="fa fa-search"></i></button>
</form>
</div>
);
}
export default DeleteEvent;
