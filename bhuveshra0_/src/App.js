import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/home';
import Design from './components/Design/Design'
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import About from './components/About/About'


function App() {
  return (
    <>
      <div className="">
        {/* <Header /> */}
        <Home />
        <About />
        <Navbar />
      </div>
    </>
  );
}

export default App;
