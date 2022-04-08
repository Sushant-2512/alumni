import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './home';
import Login from './Login';
import Register from './Register';
import AuthContext from "./store/AuthContext";
import NavBar2 from './NavBar2';
import Heading from './Heading';
import SearchAlumni from "./SearchAlumni";
import Message from "./Message";
import EventForm from "./EventForm.js";
import SuggestEvent from "./SuggestEvent";
import DeleteEvent from "./DeleteEvent";
import UpdateProfile from "./UpdateProfile";
import SingleEvent from "./SingleEvent";

function App() {
  const authCtx=React.useContext(AuthContext);
     return(
      <div>
      <Router>
    { authCtx.isLoggedIn &&  <Heading />}
    { authCtx.isLoggedIn &&  <NavBar2 />}
      <Routes>
        { authCtx.isLoggedIn && <Route exact path="/" element={<Home/>} />}
         {!authCtx.isLoggedIn && <Route exact path="/" element={<Login  />} />}
        {!authCtx.isLoggedIn && <Route exact path="/register" element={<Register />} /> }
        { authCtx.isLoggedIn && <Route exact path="/SearchAlumni" element={<SearchAlumni />}/>}
        { authCtx.isLoggedIn && <Route exact path="/message" element={<Message />} /> }
        { authCtx.isLoggedIn && <Route exact path="/addevent" element={<EventForm />} />}
        { authCtx.isLoggedIn && <Route exact path="/suggestevent" element={<SuggestEvent />} />}
        { authCtx.isLoggedIn && <Route exact path="/deleteevent" element={<DeleteEvent />} />}
        { authCtx.isLoggedIn && <Route exact path="/UpdateProfile" element={<UpdateProfile />} />}
          { authCtx.isLoggedIn && <Route exact path="/singleevent" element={<SingleEvent />} />}


      </Routes>
        </Router>
   </div>);
}

export default App;
// // <NavBar1 manageMember={manageMember} member={member}/>
// <Heading manageMember={manageMember} member={member}/>
// <NavBar2 manageMember={manageMember} member={member}/>
