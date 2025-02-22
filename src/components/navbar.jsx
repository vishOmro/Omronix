import Logo from "../assets/logo_bg.png";

const Navbar = () => {
  return (
    <div className="w-full h-18 bg-mid-blue m-10 flex justify-around align-middle items-center rounded-b-2xl">
        <div className="logo font-bold flex h-10 justify-center items-center">
            <img src={Logo} alt="" className="w-30"/>
            <h2 className="relative right-5">OMROXIN</h2>
        </div>
        <div className="taskList flex justify-around gap-10 p-20 list-none font-semibold">
            <li>Home</li>
            <li>Partners</li>
            <li>Product</li>
            <li>Contacts</li>
            <li><button className="border-2">GET IN TOUCH</button></li>
        </div>
    </div>
  )
}

export default Navbar