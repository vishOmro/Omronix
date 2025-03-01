
import { useEffect, useState } from "react";
import Logo from "../assets/logo_bg.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)

  //close dropdown when click outside
  useEffect(()=>{
    const closeDropdown = (e) =>{
      if(!e.target.closest(".dropdown-container")){
        setDropdown(false)
      }
    }
    document.addEventListener("onmouseenter", closeDropdown);
    return () => document.removeEventListener("", closeDropdown)
  }, [])


  return (
    <div className="w-full h-20 bg-mid-blue flex justify-around align-middle items-center rounded-b-2xl sticky z-50">
        <div className="logo font-bold flex h-8 justify-center items-center">
            <img src={Logo} alt="" className="w-30"/>
            <h2 className="relative right-5">OMRONIX</h2>
        </div>
        <div className="taskList flex text-md justify-around items-center gap-8 list-none font-semibold">
            <a href="/">
              <li className="cursor-pointer hover:underline">Home</li>
            </a>
            <a href="/">
              <li className="cursor-pointer hover:underline">Partners</li>
            </a>
            
              <li className="cursor-pointer hover:underline dropdown-container" ><button onClick={()=>setDropdown(!dropdown)}>Product &#8595;</button></li>
              {dropdown && (
                   <div className=" absolute top-18  w-48 bg-mid-blue mr-5 text-black shadow-lg rounded rounded-10">
                   <a href="/product/communicationsolution" className="block px-4 py-2 hover:bg-blue-300">
                     Communication Solution
                   </a>
                   <a href="/product/blockchainsolution" className="block px-4 py-2 hover:bg-blue-300">
                     Blockchain Technology
                   </a>
                   <a href="/product/agenticaisolution" className="block px-4 py-2 hover:bg-blue-300">
                     AI Agentic Solution
                   </a>
                 </div>
              )}
            
            <a href="/contact">
              <li className="cursor-pointer hover:underline">Contacts</li>
            </a>
            <a href="/contact">
              <li className="cursor-pointer hover:underline"><button className="border-1 rounded-xl px-5 py-2 font-bold cursor-pointer">GET IN TOUCH</button></li>
            </a>
        </div>
    </div>
  )
}

export default Navbar