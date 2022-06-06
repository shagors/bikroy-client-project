import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/home/Footer/Footer';
import Home from './pages/home/home/Home';
import Navbar from './pages/home/Navbar/Navbar';
import Login from './pages/Register/Login';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
