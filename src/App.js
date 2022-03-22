import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pagination_1 from './application/Pagination_1';
import Pagination_2 from './application/Pagination_2';

import Home from './Home';


function App() {
  return (
  
   
    <Router >
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/page1" element={<Pagination_1/>} />
      <Route path="/page2" element={<Pagination_2/>} />
     
      
    </Routes>
  </Router>
  );
}

export default App;
