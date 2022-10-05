import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/js/Nav';
import RoutesAnimation from './components/js/RoutesAnimation';




function App() {

  return (
    
     <BrowserRouter>

        <Nav/>
        <RoutesAnimation/>

     </BrowserRouter>
   
  );
}

export default App;
