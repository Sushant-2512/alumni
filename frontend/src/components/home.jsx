import React from 'react';
// import NavBar2 from './NavBar2';
// import Heading from './Heading';
import EventAndSlide from './EventAndSlide';
import Slogen from './Slogen';
import Patrons from './Patrons';
import Map from './Map';
import Contact from './Contact';
import Feedback from './Feedback';

function Home(props)
{
     return(
         <div>
         <EventAndSlide />
         <Slogen />
         <Patrons />
         <Map />
         <Contact />
         <Feedback />
         </div>
     );
}

export default Home;
