import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, CoursesPage, ShortCoursesPage, CustomWebPage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/live-courses" element={<ShortCoursesPage/>}/>
        <Route path="/custom-web" element={<CustomWebPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
