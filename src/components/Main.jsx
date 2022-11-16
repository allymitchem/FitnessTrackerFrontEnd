import React, { useEffect, useState } from "react";
import {Navbar, Activities, Login, MyRoutines, Register, Routines, Home} from './'
import {Route, Routes} from "react-router-dom";
const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('');
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
      <Route path="login" element={<Login getLoggedInUser={getLoggedInUser} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn}/>}/>
      <Route path="login/register" element={<Register/>}/>
      <Route path="activities" element={<Activities/>}/>
      <Route path="routines" element={<Routines/>}/>
      <Route path="/me" element={<MyRoutines username={username}/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </div>
  );
};

export default Main;
