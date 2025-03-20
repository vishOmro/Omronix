

const HeroSection = () => {
  return (

    <div className="HeroSection w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 bg-gradient-to-bl from-white to-blue-200">
      <div className="left w-full md:w-34/4 md:p-5 p-2 text-center flex flex-col justify-center items-center mt-[--30px] md:mt-[-40px]">
        <h1 className="text-xl md:text-4xl font-bold">
          Empowering Your Business with Next-Generation Decentralized Communication Solutions
        </h1>

        <p className="mt-10 md:w-3/4 text-sm md:text-lg text-textColor font-semibold">
          Omronix delivers an integrated CPaaS platform that unites bulk messaging, voice, email, WhatsApp, and advanced customer engagement tools into one seamless experience.
        </p>

        <div className="buttonSection flex flex-col md:flex-row gap-5 mt-25">
          <button className="border-1 rounded-xl px-3 py-2 md:px-5 md:py-2 md:font-bold cursor-pointer bg-gray-800 text-white">
          <a href="/">
          GET STARTED TODAY
          </a> 
          </button>

          <button className="border-1 rounded-xl px-3 py-2 md:px-5 md:py-2 font-bold cursor-pointer">
            <a href="/contact">
              CONTACT US
            </a></button>
        </div>
      </div>
    </div>


  )
}

export default HeroSection