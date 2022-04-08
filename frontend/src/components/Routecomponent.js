import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './home';
import Login from './Login';
import Register from './Register';
function Routecomponent(props)
{
   return(
        <Routes>
           <Route exact path="/home" element={<Home/>}
           <Route exact path="/" element={<Login  />}
          <Route exact path="/register" element={<Register />} />
        </Routes>
   );
}
export default Routecomponent;
