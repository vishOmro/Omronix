import React from 'react'

import './App.css'
import Navbar from './components/navbar'
import Line from './components/Line'
import Card from './components/Card'
import Logo from './assets/sample.webp'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <div className="min-w-screen min-h-screen  text-black">
      <Navbar />
      <Line/>
      <div className='h-full w-screen bg-sky-100 flex justify-center'>

        <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
        <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>

      </div>
      <Line/>
      <Footer/>
    </div>
    </>
  )
}

export default App
