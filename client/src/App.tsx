import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, CoursesPage, ShortCoursesPage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/live-courses" element={<ShortCoursesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
