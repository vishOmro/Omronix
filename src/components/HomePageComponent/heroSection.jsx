import HeroSectionImg from "../../assets/heroSection.png"

const HeroSection = () => {
  return (
    <div className="HeroSection w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10  bg-gradient-to-bl from-white to-blue-200">
      <div className="left w-full md:p-10 p-4 relative bottom-10">
        <h1 className="text-xl md:text-4xl font-bold">Empowering Your Business with Next-Generation Decentralized Communication Solutions</h1>

        <p className="mt-4 md:w-3/4 text-sm md:text-lg text-textColor font-semibold">Omronix delivers an integrated CPaaS platform that unites bulk messaging, voice, email, WhatsApp, and advanced customer engagement tools into one seamless experience.</p>

        <div className="buttonSection flex md:gap-10 gap-5 mt-6">
          <button className="border-1 rounded-xl px-3 py-2 md:px-5 md:py-2   md:font-bold cursor-pointer bg-gray-800 text-white">
            <a href="/">GET STARTED TODAY</a></button>

          <button className="border-1 rounded-xl px-3 py-2 md:px-5 md:py-2 font-bold cursor-pointer ">
            <a href="/contact">
              CONTACT US
            </a></button>
        </div>
      </div>
      <div className="right w-full flex justify-center relative bottom-10">
        <img src={HeroSectionImg} alt="" className="md:w-96 w-72" />
      </div>
    </div>
  )
}

export default HeroSection