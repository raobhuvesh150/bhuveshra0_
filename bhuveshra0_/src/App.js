import './App.css';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import Header from './components/Header/Header'


import { useRef, useState } from 'react';
import Skills from './components/Skills/Skills';




function App() {

  const HandelClick = (y) => {
    window.scroll({ left: 0, top: y, behavior: 'smooth' })
  }

  return (
    <>
      <div className="">
        <Header />
        <Home />
        <Skills />
        <About />
        <Navbar HandelClick={HandelClick} />
      </div>
    </>
  );
}

export default App;
