import { useRef } from 'react';
import axios from  'axios';


const EventForm = () => {
    const title=useRef()
    const description=useRef();
    const guest=useRef();
    const date=useRef();
    const time=useRef();
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const obj={title:title.current.value,description:description.current.value,guest:guest.current.value,date:date.current.value,time:time.current.value}
        axios.post("http://localhost:5000/event/add",obj).
        then( (res) => {
             if(res.data=='false') { alert("Event alerady Exist");}
              else {console.log("event added");}
        })
    // console.log(obj);
    }

    return (
        <div className='form-out'>
            <form onSubmit={SubmitHandler} className="form-in">
                <div>
                    <h1>Event Form</h1>
                </div>
                <div className="event-input">
                    <input type="text" placeholder="title" ref={title}></input>
                </div>
                <div className="event-input">
                    <textarea placeholder="description" id="description" ref={description} ></textarea>
                </div>
                <div className="event-input">
                    <input type="text" placeholder="guest name" ref={guest}></input>
                </div>
                <div className="event-input-time">
                    <input type="date" ref={date} ></input>
                    <input type="number" ref={time} max="24" min="1" placeholder="time 1-24"></input>
                </div>

                <div className="submit-btn-event-form">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
