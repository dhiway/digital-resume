import React from 'react'
import { Routes, Route } from "react-router-dom";
import Resume from './pages/Resume';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
    <Route path='/resume' element={ <Resume/>}/>
    <Route path="/" element={ <Home/>}/>
   </Routes>
  )
}

export default App