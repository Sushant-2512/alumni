import React from 'react';
import AuthContext from "./AuthContext";
function AuthContextProvider(props)
{

  let userdata=localStorage.getItem('userdata');
  // console.log(userdata);
  let isLogin=false;
  let initialData={};
  if(userdata) {
     initialData=JSON.parse(userdata);
    isLogin=true;
  }
  const [data,setData]=React.useState(initialData);
  const [AEmail,setAEmail]=React.useState("")
  const [AdminEmail,setAdminEmail]=React.useState("")
  const [event,setevent]=React.useState([])
  const [singleevent,setSingleEvent]=React.useState({})
  // console.log(data);
  const [login,setLogin]=React.useState(isLogin);
  function loginHandler(authData)
  {
    console.log(authData);
    setData(authData);
    setLogin(true);
    // console.log(authData);
    // console.log(JSON.stringify(authData));
    localStorage.setItem("userdata",JSON.stringify(authData));

  }
  function logoutHandler()
  {
        setLogin(false);
           setData({});
           localStorage.removeItem('userdata');

  }
  function AEmailHandler(ae)
  {
    console.log(ae);
     setAEmail(ae);
  }
  function AdminEmailHandler(e)
  {
     console.log(e);
     setAdminEmail(e);
  }
  function setEventHandler(obj)
  {
     console.log(obj);
     setevent(obj);
  }
  function setSingleEventHandler(obj)
  {
     console.log(obj);
     setSingleEvent(obj);
  }
  const contextObj={
    Event:event,
    setEvent: setEventHandler,
    SingleEvent:singleevent,
    setSingleEvent:setSingleEventHandler,
    AdminEmail:AdminEmail,
    setAdminEmail:AdminEmailHandler,
    AlumniEmail:AEmail,
    setAlumniEmail:AEmailHandler,
      isLoggedIn:login,
      data:data,
      login:loginHandler,
      logout:logoutHandler
  }
  return (
       <AuthContext.Provider value={contextObj}>
           {props.children}
       </AuthContext.Provider>
   );
}
export default AuthContextProvider;
