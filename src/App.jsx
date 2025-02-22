import React from 'react'

import './App.css'
import Navbar from './components/navbar'
import Line from './components/Line'
import Card from './components/Card'
import Logo from './assets/sample.webp'


function App() {


  return (
    <>
    <div className="min-w-screen min-h-screen  text-black">
      <Navbar />
      <Line/>
      <Card image={Logo} heading="Scalable solutions :" content ="Whether you're a small business or an enterprise, our platform grows with your  needs."/>
    </div>
    </>
  )
}

export default App
