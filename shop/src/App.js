import React, {useEffect, useState} from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/js/Nav';
import RoutesAnimation from './components/js/RoutesAnimation';




function App() {

  return (
    
     <HashRouter>

        <Nav/>
        <RoutesAnimation/>

     </HashRouter>
   
  );
}

export default App;
