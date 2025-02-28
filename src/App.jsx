
import './App.css'

import Navbar from './components/navbar'

import Footer from './components/Footer'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Product from "./pages/Product"




function App() {


  return (
    <>

      <Navbar />


     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/contact" element={<ContactUs />} />
      <Route path="/products" element={<Product />}/>
    </Routes>
    </BrowserRouter> 
    <Footer/>
  
    </>
  )
}

export default App
