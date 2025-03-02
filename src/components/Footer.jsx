
import Logo from "../assets/Omronix_logo.jpg";
import Insta from "../assets/Insta.png"
import Facebook from "../assets/facebook.png"
import Yt from "../assets/Yt.png"
import Linkdin from "../assets/Linkdin.png"


function Footer() {
  return (
    <>
    
    <div className='h-full w-full bg-black text-indigo-100 flex justify-center gap-5 md:mt-0 mt-4 flex-wrap'>
        <div className='md:w-1/3  flex justify-around md:gap-12 gap-4 mt-8'>
            <div className='flex-col md:h-80 p-5  '>
                <img src={Logo} alt="Logo" className='md:w-30 w-20' />
                <div className='flex gap-2 md:gap-2 align-middle items-center justify-center mt-6 '>
                    <img src={Insta} alt="" className='md:w-5 md:h-5 w-4 h-4 '/>
                    <img src={Yt} alt="" className='md:w-5 md:h-5 w-4 h-4'/>
                    <img src={Facebook} alt="" className='md:w-5 w-4 h-4 md:h-5'/>
                    <img src={Linkdin} alt="" className='md:w-5 w-4 h-4 md:h-5'/>
                </div>
                

            </div>
            <div className='mt-4 md:text-base text-xs '>
                    USA
                    <br />
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
        <div className='flex justify-around  md:mt-4 gap-3 md:gap-6 md:p-3 md:w-1/2 flex-wrap '>
            <div>
                <ul className='flex flex-col md:gap-5 gap-2 md:text-base text-xs'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Partners</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-2 md:gap-5 md:text-base text-xs'>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='h-full w-50'>
                    <p className="md:leading-8 text-xs md:text-base md:pt-0 ">
                    Subscribe to our newsletter to receive the latest updates in CPaaS technology and industry insights.
                    </p>
            </div>
        </div>
    </div>
        <div className='h-full w-full bg-black text-textColor pb-4  flex md:text-base text-xs justify-center md:pt-0 pt-4'>
            © 2025 Omronix. All rights reserved.
        </div>
    </>
  )
}

export default Footer