import React from 'react'
import Logo from './../assets/AgenAi.png'

function solutions() {
  return (
    <div className='w-full min-h-screen bg-[#1c1e33] flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-2xl font-bold text-white'>Agentic AI Solutions</h1>
        <div className='bg-white w-3/4 h-3/4 rounded-2xl text-black flex '>

            <div className='w-1/2 flex flex-col p-5'>
            <img src={Logo} alt="img" />
            <span className='font-bold text-xl p-2'>Custom AI Agent Development</span>
            <p className='text-textColor font-semibold '>
            Enhance customer experiences with AI-driven personalization, leveraging advanced algorithms to tailor content and interactions in real time.  

            </p>


            </div>

            <div className="rightConatiner w-1/2 flex flex-col">
                <div className='flex w-full p-4 gap-4'>
                    <img src={Logo} alt="img" className='w-44 p-2'/>
                    <div className='leading-6 flex flex-col gap-2'>
                    <span className='font-bold'>Industry-Specific AI Agents</span>
                    <p className='text-textColor text-sm font-semibold'>Asset Tokenization : 
                        Convert real estate, art, or commodities 
                        into digital tokens.</p>
                    </div>
                </div>

                <div className='flex w-full p-4 gap-4'>
                    <img src={Logo} alt="img" className='w-44 p-2'/>
                    <div className='leading-6 flex flex-col gap-2'>
                    <span className='font-bold'>Smart Contract Services</span>
                    <p className='text-textColor text-sm font-semibold'>Development, auditing, and deployment of self-executing contracts. 
                    Industries: DeFi, insurance, supply chain.</p>
                    </div>
                </div>

                <div className='flex w-full p-4 gap-4'>
                    <img src={Logo} alt="img" className='w-44 p-2'/>
                    <div className='leading-6 flex flex-col gap-2'>
                    <span className='font-bold'>Enterprise Solutions</span>
                    <p className='text-textColor text-sm font-semibold'>Asset Tokenization : 
                        Convert real estate, art, or commodities 
                        into digital tokens.</p>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default solutions