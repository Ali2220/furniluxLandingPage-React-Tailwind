import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Elevate from './Components/Elevate';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Elevate/>
    <Products/>
    <Footer/>
   </>
  );
}

export default App;
