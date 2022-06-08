import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/home/Footer/Footer';
import Home from './pages/home/home/Home';
import Navbar from './pages/home/Navbar/Navbar';
import Login from './pages/Register/Login';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/Register/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
