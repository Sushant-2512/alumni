import React from 'react';
function Contact()
{
    return(
      <div>
      <h2 className="heading"><b>Any queries</b></h2>
  <p style={{textAlign:"center"}}>Feel free to CONTACT us !!</p>
  <div className="Container" style={{margin:"1rem 5rem 1rem 5rem"}}>
           <div className="row">
           <div className="col-lg-3 col-md-6">
           <div className="Container">
           <div className="row">
           <div className="col-lg-2">
              <img className="contact-img" src="images/phone-call.png" alt="call" />
           </div>
           <div className="col-lg-10">
               <span><strong>Give us A call:</strong><br/>+91 9075674610</span>
           </div>
           </div>
           </div>
           </div>
            <div className="col-lg-1 col-md-6">
            </div>
            <div className="col-lg-3 col-md-6">
            <div className="Container">
            <div className="row">
            <div className="col-lg-2">
               <img className="contact-img" src="images/email.jpg" alt="call" />
            </div>
            <div className="col-lg-10">
                <span><strong>Send Us A Email:</strong><br/>patilsushant518@gmail.com</span>
            </div>
            </div>
            </div>

            </div>
             <div className="col-lg-1 col-md-6">
           </div>
           <div className="col-lg-3 col-md-6">
           <div className="Container">
           <div className="row">
           <div className="col-lg-2">
              <img className="contact-img" src="images/google-maps.png" alt="call" />
           </div>
           <div className="col-lg-10">
               <span><strong>Visit Us:</strong><br/>Mahatma Gandhi vidhalay Rukadi</span>
           </div>
           </div>
           </div>
           </div>
            <div className="col-lg-1 col-md-6">
           </div>
            </div>
  </div>
      </div>
    );
}
export default Contact;
