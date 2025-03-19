import ProductDescCard from "../productDescCard";
const Data = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Public Blockchain",
  "content": "Develop Apps on Ethereum, Solana, etc.Private Blockchains: Permissioned networks (Hyperledger, Corda).Consortium Blockchains: Cross-organization collaboration."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Hyper-Personalized Recommendations",
  "content": "Provide individualized recommendations based on user preferences, behaviors, and predictive analytics."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Real-Time Adaptation",
  "content": "AI adapts to customer needs in real time, ensuring that every interaction feels tailored and relevant."
},
]

const Data2 = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Non-Fungible Token",
  "content": " A unique digital asset that represents ownership of items like art, music, videos, and virtual goods on the blockchain."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Fungible Token",
  "content": " A digital asset that is interchangeable with another of the same type, like cryptocurrencies (e.g., Bitcoin, Ethereum)."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Central Bank Digital Currency",
  "content": "A digital currency issued and regulated by a central bank, representing a digital form of a country's fiat currency."
},
]

const Data3 = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Security",
  "content": "Ensuring smart contracts are free from vulnerabilities through rigorous auditing and testing to prevent hacks and exploits."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Development",
  "content": "Writing and structuring self-executing contracts using blockchain-based programming languages like Solidity or Rust."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Deployment",
  "content": "Deploying verified smart contracts on blockchain networks for automated, trustless execution in various industries like DeFi and supply chain."
},
]

const Data4 = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Consulting Services",
  "content": "Providing expert guidance on blockchain adoption, strategy, and use cases tailored to business needs."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Implementation",
  "content": "Developing and integrating blockchain solutions, from smart contracts to decentralized applications (dApps), ensuring seamless deployment."
},
{
  "imgUrl": "/TransLogo.png",
  "title": " Blockchain as a Solution",
  "content": "Leveraging blockchain technology to enhance security, transparency, and efficiency across industries like finance, supply chain, and identity management."
},
]


const ProductsDetail = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 min-h-screen justify-center px-4">
    <h1 className="text-2xl md:text-3xl font-bold pt-5">Our Services</h1>
    <div className="w-full text-center bg-[url(/BlockchainImage/bg.png)] p-10">        
    <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">BLOCKCHAIN SOLUTIONS</h2>
    <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        Data.map((data, index) => (
          <ProductDescCard 
            key={index} 
            imgUrl={data.imgUrl} 
            title={data.title} 
            content={data.content}  
          />
        ))
      }
    </div>
    </div>

    <div className="w-full text-center bg-[url(/BlockchainImage/bg1.png)] p-10">        
    <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">TOKENIZATION SOLUTIONS</h2>
    <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        Data2.map((data, index) => (
          <ProductDescCard 
            key={index} 
            imgUrl={data.imgUrl} 
            title={data.title} 
            content={data.content}  
          />
        ))
      }
    </div>
    </div>

    <div className="w-full text-center bg-[url(/BlockchainImage/bg1.png)] p-10">        
    <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">SMART CONTRACT SERVICES</h2>
    <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        Data3.map((data, index) => (
          <ProductDescCard 
            key={index} 
            imgUrl={data.imgUrl} 
            title={data.title} 
            content={data.content}  
          />
        ))
      }
    </div>
    </div>

    <div className="w-full text-center bg-[url(/BlockchainImage/bg1.png)] p-10">        
    <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">ENTERPRISE SOLUTIONS</h2>
    <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        Data4.map((data, index) => (
          <ProductDescCard 
            key={index} 
            imgUrl={data.imgUrl} 
            title={data.title} 
            content={data.content}  
          />
        ))
      }
    </div>
    </div>

    
    <div className="w-full text-center bg-[url(/ProductImage/bg5.png)] p-10 mb-5">        
    <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">Customer Engagement</h2>
    <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        Data.map((data, index) => (
          <ProductDescCard 
            key={index} 
            imgUrl={data.imgUrl} 
            title={data.title} 
            content={data.content}  
          />
        ))
      }
    </div>
    </div>
    

  </div>
  );
};

export default ProductsDetail;
