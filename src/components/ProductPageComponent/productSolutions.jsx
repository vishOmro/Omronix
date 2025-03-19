
import Logo from '/ProductImage/4.png'
import Logo2 from '/ProductImage/5.webp'
import Logo3 from '/ProductImage/16.png'
import Logo4 from '/ProductImage/1.png'

const productSolutions = () => {
  return (
    <div className='w-full min-h-screen bg-[#1c1e33] flex flex-col gap-10 justify-center items-center'>
            <h1 className='text-2xl font-bold text-white'>Communication Solutions</h1>
            <div className='bg-white w-3/4 h-3/4 rounded-2xl text-black flex '>
    
                <div className='w-1/2 flex flex-col p-5'>
                <img src={Logo} alt="img" className='h-70' />
                <span className='font-bold text-xl p-2'>SMS SOLUTIONS</span>
                <p className='text-textColor font-semibold '>
                Enhance customer experiences with AI-driven personalization, leveraging advanced algorithms to tailor content and interactions in real time.  
    
                </p>
    
    
                </div>
    
                <div className="rightConatiner w-1/2 flex flex-col">
                    <div className='flex w-full p-4 gap-4'>
                        <img src={Logo2} alt="img" className='w-44 p-2'/>
                        <div className='leading-6 flex flex-col gap-2'>
                        <span className='font-bold'>VOICE SERVICES</span>
                        <p className='text-textColor text-sm font-semibold'>Asset Tokenization : 
                            Convert real estate, art, or commodities 
                            into digital tokens.</p>
                        </div>
                    </div>
    
                    <div className='flex w-full p-4 gap-4'>
                        <img src={Logo3} alt="img" className='w-44 p-2'/>
                        <div className='leading-6 flex flex-col gap-2'>
                        <span className='font-bold'>Whatsapp Business API</span>
                        <p className='text-textColor text-sm font-semibold'>Development, auditing, and deployment of self-executing contracts. 
                        Industries: DeFi, insurance, supply chain.</p>
                        </div>
                    </div>
    
                    <div className='flex w-full p-4 gap-4'>
                        <img src={Logo4} alt="img" className='w-44 p-2'/>
                        <div className='leading-6 flex flex-col gap-2'>
                        <span className='font-bold'>Customer Engagement</span>
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

export default productSolutions