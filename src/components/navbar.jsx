import React from "react";
import Logo from "../assets/logo_bg.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-sky-200 flex justify-around align-middle items-center rounded-b-2xl p-5 mt-1">
        <div className="logo font-bold flex h-10 justify-center items-center">
            <img src={Logo} alt="" className="w-30"/>
            <h2 className="relative right-5">OMROXIN</h2>
        </div>
        <div className="taskList flex justify-around gap-10 p-2 list-none font-semibold">
            <li>Home</li>
            <li>Partners</li>
            <li>Product</li>
            <li>Contacts</li>
            <li><button className="border-2 rounded-2xl p-1 font-bold hover:bg-blue-200 hover:h-10 hover:w-32">GET IN TOUCH</button></li>
        </div>
    </div>
  )
}

export default Navbar