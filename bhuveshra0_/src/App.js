import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/home';
import Design from './components/Design/Design'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <div className="">
        <Header />
        <Home />
        {/* <Navbar /> */}
      </div>
    </>
  );
}

export default App;
