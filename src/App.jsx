
import './App.css'

import Navbar from './components/navbar'

import Footer from './components/Footer'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Product from "./pages/Product"
import Blockchain from './pages/Blockchain'
import AgenticAI from './pages/AgenticAI'




function App() {


  return (
    <>

      <Navbar />


     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/contact" element={<ContactUs />} />
      <Route path="/product/communicationsolution" element={<Product />}/>
      <Route path="/product/blockchainsolution" element={<Blockchain />}/>
      <Route path='/product/agenticaisolution' element={<AgenticAI />} />
      
    </Routes>
    </BrowserRouter> 
    <Footer/>
  
    </>
  )
}

export default App
