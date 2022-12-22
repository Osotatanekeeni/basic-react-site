import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  )
}
