import React from 'react'

const AuthContext = React.createContext({
  Event:[],
  setEvent:()=>{},
  SingleEvent:{},
  setSingleEvent:()=>{},
  AdminEmail:"",
  setAdminEmail:()=>{},
  AlumniEmail:"",
  setAlumniEmail:()=>{},
    isLoggedIn:false,
    data:{},
    login:(data)=>{},
    logout:()=>{}
})

export default AuthContext;
