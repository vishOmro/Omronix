import Navbar from "../components/navbar"
import contactImage from "../assets/contactus.png"
import ContactDropdown from "../components/contactDropdown"
const ContactUs = () => {
  return (
    <div>
        <Navbar />
        <div className="contact_container w-full gap-10 flex justify-center items-center align-middle rounded-b-2xl ">
            <div className="contact_left w-full p-10 ">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <form action="" className="mt-5 text-lg">
                    <div className="name_container flex gap-15">
                        <div className="input_container flex flex-col gap-2"> 
                        <h3 className="font-semibold">First Name</h3>
                        <input type="text" name="" id="" placeholder="eg: John" className="w-75" />
                        </div>
                        <div className="input_container flex flex-col gap-2"> 
                        <h3 className="font-semibold">Last Name</h3>
                        <input type="text" name="" id="" placeholder="eg: Doe" className="w-75" />
                        </div>
                    
                    </div>

                    <div className="input_container flex flex-col gap-2 mt-4"> 
                        <h3 className="font-semibold">Email Address</h3>
                        <input type="text" name="" id="" placeholder="eg: email@janesfakedomain.net" className="mr-20" />
                        </div>

                        <div className="input_container flex flex-col gap-2 mt-4"> 
                        <h3 className="font-semibold">Company Name</h3>
                        <input type="text" name="" id="" placeholder="eg: omronix" className="mr-20" />
                        </div>


                        <div className="input_container flex flex-col gap-2 mt-4"> 
                        <h3 className="font-semibold">Product Of Intrest</h3>
                        <input type="text" name="" id="" placeholder="SMS Services" className="mr-20" />
                        </div>


                        <div className="input_container flex flex-col gap-2 mt-4"> 
                        <h3 className="font-semibold">Requirement</h3>
                        <ContactDropdown />
                        </div>

                        <div className="input_container flex flex-col gap-2 mt-4"> 
                        <h3 className="font-semibold">Remark</h3>
                        <input type="text" name="" id="" placeholder="How can we help you?" className="mr-20" />
                        </div>

                        <div className="gap-2 mt-4 bg-black text-white w-fit px-15 py-2 rounded-xl cursor-pointer">
                            Submit
                        </div>



                       
                </form>
            </div>
            <div className="contact_right w-full">
                <img src={contactImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs