import ReactDom from "react-dom/client"
import './App.css'

import Navbar from './components/navbar'
import Card from './components/Card'
import Logo from './assets/sample.webp'
import Footer from './components/Footer'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Product from "./pages/Product"




function App() {


  return (
    <>

    <div className="min-w-screen min-h-screen  text-black">
      <Navbar />
      
      <div className='h-full w-screen bg-sky-100 flex justify-center'>

        <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
        <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>

      </div>
      
      <Footer/>
    </div>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/contact" element={<ContactUs />} />
      <Route path="/products" element={<Product />}/>
    </Routes>
    </BrowserRouter> */}
  

    </>
  )
}

export default App
