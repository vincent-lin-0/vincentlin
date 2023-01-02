import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
