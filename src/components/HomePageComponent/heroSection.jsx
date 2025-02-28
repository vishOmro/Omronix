import HeroSectionImg from "../../assets/heroSection.png"

const HeroSection = () => {
  return (
    <div className="HeroSection w-full min-h-screen flex justify-center items-center gap-10">
        <div className="left w-full p-10 relative bottom-10">
            <h1 className="text-2xl md:text-4xl font-bold">Empowering Your Business with Next-Generation Communication Solutions</h1>

            <p className="mt-4 md:w-3/4 md:text-lg text-textColor font-semibold">Omronix delivers an integrated CPaaS platform that unites bulk messaging, voice, email, WhatsApp, and advanced customer engagement tools into one seamless experience.</p>

            <div className="buttonSection flex gap-10 mt-6">
            <button className="border-1 rounded-xl px-5 py-2 font-bold cursor-pointer">GET STARTED TODAY</button>

            <button className="border-1 rounded-xl px-5 py-2 font-bold cursor-pointer">CONTACT US</button>
            </div>
        </div>
        <div className="right w-full flex justify-center relative bottom-10">
            <img src={HeroSectionImg} alt="" className="w-96"  />
        </div>
    </div>
  )
}

export default HeroSection