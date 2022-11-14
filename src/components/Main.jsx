import React from "react";
import {Navbar, Activities, Login, MyRoutines, Register, Routines} from './'
import {Route, Routes} from "react-router-dom";
const Main = () => {
  console.log('hello world')
  return (
    <div id="main">
    <Navbar/>
    <Routines/>
  </div>
  );
};

export default Main;
