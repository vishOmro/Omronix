import ReactDom from "react-dom/client"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Product from "./pages/Product"



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/contact" element={<ContactUs />} />
      <Route path="/products" element={<Product />}/>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
