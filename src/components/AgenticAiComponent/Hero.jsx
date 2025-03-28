

const Hero = () => {
  return (
    <>
    
     <div className="HeroSection w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:mt-0 mt-12 bg-gradient-to-br from-black to-blue-900 text-white">
            <div className="left w-full md:p-10 p-4 relative bottom-10">
                <h1 className="text-xl md:text-4xl font-bold">Agentic AI Solutions<br />   
                
                        Autonomous Intelligence, Infinite Possibilities
 
                </h1>
    
                <p className="mt-4 md:w-3/4 text-sm md:text-lg  font-semibold">Autonomous Intelligence for Smarter Operations. Deploy self-learning AI agents that act, adapt, and innovate independently. </p>
    
                <div className="buttonSection flex md:gap-10 gap-5 mt-6">
            <button className="border-1 rounded-xl px-2 py-1 md:px-5 md:py-2 font-bold md:text-base text-sm cursor-pointer bg-white text-black">GET STARTED TODAY</button>

            <button className="border-1 rounded-xl md:px-5 md:py-2 font-bold cursor-pointer px-3 text-sm md:text-base py-2 bg-white text-black">CONTACT US</button>
            </div>
            </div>
            <div className="right w-full flex justify-center relative bottom-10">
                <img src="/AgenticAiImages/5.png" alt="" className="md:w-96 w-72 rounded-xl"  />
            </div>
        </div>

       
    </>
  )
}

export default Hero