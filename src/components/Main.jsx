import React from "react";
import {Navbar, Activities, Login, MyRoutines, Register, Routines} from './'
import {Route, Routes} from "react-router-dom";
const Main = () => {
  
  return (
    <div id="main">
    <Navbar/>
    
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="login/register" element={<Register/>}/>
      <Route path="/" element={<Routines/>}/>
    </Routes>
  </div>
  );
};

export default Main;
