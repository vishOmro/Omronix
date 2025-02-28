
import Logo from "../assets/Omronix_logo.jpg";
import Insta from "../assets/Insta.png"
import Facebook from "../assets/facebook.png"
import Yt from "../assets/Yt.png"
import Linkdin from "../assets/Linkdin.png"


function Footer() {
  return (
    <>
    
    <div className='h-full w-full bg-black text-indigo-100 flex justify-center gap-5'>
        <div className='w-1/3 flex justify-around gap-12 mt-8'>
            <div className='flex-col h-80 p-5 '>
                <img src={Logo} alt="Logo" className='size-30' />
                <div className='flex justify-around  mt-6 '>
                    <img src={Insta} alt="" className='size-5 place-content-around gap-2 '/>
                    <img src={Yt} alt="" className='size-5 place-content-around gap-2 '/>
                    <img src={Facebook} alt="" className='size-5 place-content-around gap-2 '/>
                    <img src={Linkdin} alt="" className='size-5 place-content-around gap-2 '/>
                </div>
                

            </div>
            <div className='mt-2 '>
                    USA
                    <br /><br />
                    Head Office :
                    <br />
                    123 Innovation Drive, Tech City, USA  
                    <br />
                    Phone :
                    <br />
                    +1 (800) 123-4567
                    <br />
                    Email :
                    <br />
                    info@omronix.com

                
                </div>
        </div>
        <div className='flex justify-around  mt-6 gap-6 p-3 w-1/2'>
            <div>
                <ul className='flex flex-col gap-5'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Partners</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-5'>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='h-full w-50'>
                    <p className="leading-8">
                    Subscribe to our newsletter to receive the latest updates in CPaaS technology and industry insights.
                    </p>
            </div>
        </div>
    </div>
        <div className='h-full w-full bg-black pb-4 text-indigo-100 flex justify-center'>
            © 2025 Omronix. All rights reserved.
        </div>
    </>
  )
}

export default Footer