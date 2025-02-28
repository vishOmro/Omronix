import AboutUsImg from "../../assets/aboutUsSection.png"


const AboutUsSection = () => {
  return (
 <div className="AboutSection w-full min-h-screen flex flex-row-reverse justify-center items-center relative gap-10 bg-mid-blue">
         <div className="left w-full p-10">
             <h1 className="text-lg md:text-xl font-bold">ABOUT US</h1>
 
             <p className="mt-4 md:w-3/4 md:text-md text-textColor font-semibold">Omronix is transforming CPaaS with secure, scalable communication solutions. Founded in 2024, we simplify complex communications. Launching in 2025, our platform includes bulk messaging, voice, email, and AI tools. We strive to be the most trusted partner in digital communication. Our mission: enhance customer interactions with secure, user-friendly solutions. Driven by innovation, reliability, and transparency, our expert team builds lasting relationships.</p>
 
             <div className="buttonSection flex gap-10 mt-6">
             <button className=" rounded-xl px-5 py-2 font-bold cursor-pointer bg-black text-white">READ MORE ABOUT US</button>
 
             
             </div>
         </div>
         <div className="right w-full bg-blue relative flex justify-center">
             <img src={AboutUsImg} alt=""  className="w-96"/>
         </div>
     </div>
  )
}

export default AboutUsSection