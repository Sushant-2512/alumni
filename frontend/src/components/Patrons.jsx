import React from 'react';
function Patrons()
{
     return (<div>
       <p className="patrons-head heading">Our Patrons</p>
       <div className="Container" style={{margin:"1rem 20rem 1rem 20rem"}}>
                <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="card" style={{width: "18rem"}}>
             <img className="card-img-top" src="images/dir.jpg" alt="dir" />
             <div className="card-body">
               <h5 className="card-title">Prof.D B kulkarni</h5>
               <p className="card-text"><b>Director,Mahtma Gandhi,Rukadi</b></p>
               <p className="card-text">To become a leading and unique institution of higher learning, research and training in engineering and technology for students</p>
             </div>
            </div>
                 </div>
                 <div className="col-lg-2 col-md-6">
                 </div>
                 <div className="col-lg-5 col-md-6">
                   <div className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src="images/lalatendusir.jpg" alt="dir" />
              <div className="card-body">
                <h5 className="card-title">Dr. Lalatendu Bahera</h5>
                <p className="card-text"><b>Faculty Co-ordinator</b></p>
                <p className="card-text">It is a priviledge to work as a coordinator of Rayat sanstha, mahatma gandhi under the leadership of honourable director of institute. </p>
              </div>
             </div>
                </div>
                 </div>
                 </div>

  </div>);
}
export default Patrons;
