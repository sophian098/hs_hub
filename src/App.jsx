
//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Extracurriculars from './pages/Extracurriculars';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is shown across all pages */}
      <div className='container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/extracurriculars' element={<Extracurriculars />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;