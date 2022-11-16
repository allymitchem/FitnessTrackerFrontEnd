import React, { useEffect, useState } from "react";
import {Navbar, Activities, Login, MyRoutines, Register, Routines} from './'
import {Route, Routes} from "react-router-dom";
const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const getLoggedInUser = async () =>{
    const token = localStorage.getItem('token')
    
    if(token){
      setLoggedIn(true)
    }
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      getLoggedInUser()
    }
  }, [])
  return (
    <div id="main">
    <Navbar loggedIn={loggedIn} setLoggedIn= {setLoggedIn}/>
    
    <Routes>
      <Route path="login" element={<Login getLoggedInUser={getLoggedInUser} setLoggedIn={setLoggedIn}/>}/>
      <Route path="login/register" element={<Register/>}/>
      <Route path="activities" element={<Activities/>}/>
      <Route path="/" element={<Routines/>}/>
      <Route path="/me" element={<Routines/>}/>
    </Routes>
  </div>
  );
};

export default Main;
