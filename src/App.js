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
      <>
      <Header/>
         <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/e-commerce/about" element={<About/>}></Route>
           <Route path="/e-commerce/products" element={<AllProducts/>}></Route>
           <Route path="/e-commerce/sign_in" element={<SignIn/>}></Route>
           <Route path="/e-commerce/checkout" element={<Checkout/>}></Route>
         </Routes>
      </>
      </BrowserRouter>
  
  );
}

export default App;
