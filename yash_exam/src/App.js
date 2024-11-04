import logo from './logo.svg';
import './App.css';
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import home from './pages/home.js';
import login from './pages/login.js';
import Signup from './pages/Signup.js';
import Router from 'express/lib/router/index.js';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
