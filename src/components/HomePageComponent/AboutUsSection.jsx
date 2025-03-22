import AboutUsImg from "../../assets/aboutUsSection.png"


const AboutUsSection = () => {
  return (
 <div className="AboutSection w-full min-h-screen flex md:flex-row-reverse flex-col-reverse justify-center items-center relative gap-10 bg-blue-100">
         <div className="left w-full md:p-10 p-5">
             <h1 className="text-xl md:text-xl font-bold">ABOUT US</h1>
 
             <p className="mt-4 md:w-3/4 text-sm md:text-base text-textColor font-semibold">Omronix is transforming CPaaS with secure, scalable communication solutions. Founded in 2024, we simplify complex communications. Launching in 2025, our platform includes bulk messaging, voice, email, and AI tools. We strive to be the most trusted partner in digital communication. Our mission: enhance customer interactions with secure, user-friendly solutions. Driven by innovation, reliability, and transparency, our expert team builds lasting relationships.</p>
 
             <div className="buttonSection flex gap-10 mt-6">
             <button className=" rounded-xl px-3 py-2  md:px-5 md:py-2  font-semibold cursor-pointer bg-black text-white">
             <a href="/aboutus" className="block px-4 py-2"> READ MORE ABOUT US </a></button>
 
             
             </div>
         </div>
         <div className="right w-full bg-blue relative flex justify-center">
             <img src={AboutUsImg} alt=""  className="md:w-96 w-72  mt-4 md:mt-0"/>
         </div>
     </div>
  )
}

export default AboutUsSection