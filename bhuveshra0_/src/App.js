import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/home';
import Design from './components/Design/Design'
import Navbar2 from './components/Navbar/Navbar2';


function App() {
  return (
    <>
      <div className="">
        <Header />
        <Home />
        <Navbar2 />
      </div>
    </>
  );
}

export default App;
