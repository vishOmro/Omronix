

const Hero = () => {
  return (
    <>
     <div className="HeroSection w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10  bg-gradient-to-br from-white to-blue-200 bg-white text-black p-4">
            <div className="left w-full md:p-10 p-6 relative bottom-10">
                <h1 className="text-2xl md:text-4xl font-bold">Blockchain Solutions <br />   
                Build Trust, Security, and Efficiency
  
 
                </h1>
    
                <p className="mt-4 md:w-3/4 md:text-lg  font-semibold">Leverage blockchain’s transformative power with Omronix’s end-to-end development and consulting services.  </p>
    
                <div className="buttonSection flex md:gap-10 gap-5 mt-6">
            <button className="border-1 rounded-xl px-4 py-3 md:px-5 md:py-2 font-bold md:text-base text-sm cursor-pointer bg-gray-900 text-white">GET STARTED TODAY</button>

            {/* <button className="border-1 rounded-xl md:px-5 md:py-2 font-bold cursor-pointer px-3 text-sm md:text-base py-2">CONTACT US</button> */}
            </div>
            </div>
            <div className="right w-full flex justify-center relative bottom-10">
                <img src="/BlockchainImage/img.jpg" alt="" className="md:w-96 w-72 rounded-xl"  />
            </div>
        </div>
        

        </>
  )
}

export default Hero