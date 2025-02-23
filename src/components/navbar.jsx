
import Logo from "../assets/logo_bg.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-mid-blue flex justify-around align-middle items-center rounded-b-2xl ">
        <div className="logo font-bold flex h-10 justify-center items-center">
            <img src={Logo} alt="" className="w-30"/>
            <h2 className="relative right-5">OMROXIN</h2>
        </div>
        <div className="taskList flex text-lg justify-around items-center gap-8 list-none font-semibold">
            <a href="/">
              <li className="cursor-pointer hover:underline">Home</li>
            </a>
            <a href="/">
              <li className="cursor-pointer hover:underline">Partners</li>
            </a>
            <a href="/product">
              <li className="cursor-pointer hover:underline">Product</li>
            </a>
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