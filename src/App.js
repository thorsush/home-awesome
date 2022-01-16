import {BrowserRouter,Routes,Route  } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Checkout from './components/Checkout';
import AllProducts from './components/AllProducts';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header/>
         <Routes>
           <Route path="/home-awesome/" element={<Home/>}/>
           <Route path="/home-awesome/about" element={<About/>}/>
           <Route path="/home-awesome/products" element={<AllProducts/>}/>
           <Route path="/home-awesome/sign_in" element={<SignIn/>}/>
           <Route path="/home-awesome/checkout" element={<Checkout/>}/>
         </Routes>
      </div>
      </BrowserRouter>
  
  );
}

export default App;
