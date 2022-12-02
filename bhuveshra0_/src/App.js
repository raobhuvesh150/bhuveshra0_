import './App.css';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import {useRef, useState} from 'react';

function App() {

    const HandelClick = (y)=>{
      window.scroll({left:0 , top:y ,  behavior: 'smooth'})
    }

  return (
    <>
      <div className="">
        <Home />
        <About />
        <Navbar HandelClick={HandelClick}  />
      </div>
    </>
  );
}

export default App;
