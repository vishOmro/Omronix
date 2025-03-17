import React from 'react'

import Logo1 from '/BlockchainImage/bl1.png'
import Logo2 from '/BlockchainImage/bl2.png'
import Logo3 from '/BlockchainImage/bl3.png'
import Logo4 from '/BlockchainImage/bl4.png'

function solutions(con1,image1,image2,image3,image4,con2,con3,con4,hd1,hd2,hd3,hd4) {
  return (
    <div className='w-full min-h-screen bg-[#1c1e33] flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-2xl font-bold text-white'>Blockchain Solutions</h1>
        <div className='bg-white w-3/4 h-3/4 rounded-2xl text-black flex '>

            <div className='w-1/2 flex flex-col p-5'>
            <img src={Logo1} alt="img" />
            <span className='font-bold text-xl p-2'>Blockchain Development</span>
            <p className='text-textColor font-semibold '>
            Public Blockchains , Private Blockchains , Consortium Blockchains
            </p>


            </div>

            <div className="rightConatiner w-1/2 flex flex-col">
                <div className='flex w-full p-4 gap-4'>
                    <img src={Logo2} alt="img" className='w-44 p-2'/>
                    <div className='leading-6 flex flex-col gap-2'>
                    <span className='font-bold'>Tokenization Solutions</span>
                    <p className='text-textColor text-sm font-semibold'>Asset Tokenization : 
                        Convert real estate, art, or commodities 
                        into digital tokens.</p>
                    </div>
                </div>

                <div className='flex w-full p-4 gap-4'>
                    <img src={Logo3} alt="img" className='w-44 p-2'/>
                    <div className='leading-6 flex flex-col gap-2'>
                    <span className='font-bold'>Smart Contract Services</span>
                    <p className='text-textColor text-sm font-semibold'>Development, auditing, and deployment of self-executing contracts. 
                    Industries: DeFi, insurance, supply chain.</p>
                    </div>
                </div>

                <div className='flex w-full p-4 gap-4'>
                    <img src={Logo4} alt="img" className='w-44 p-2'/>
                    <div className='leading-6 flex flex-col gap-2'>
                    <span className='font-bold'>Enterprise Solutions</span>
                    <p className='text-textColor text-sm font-semibold'>Supply Chain Management : Track goods from source to shelf with immutable logs. </p>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default solutions