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
  "title": "AI-Powered Personalization",
  "content": "Enhance customer experiences with AI-driven personalization, leveraging advanced algorithms to tailor content and interactions in real time."
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


const ProductsDetail = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 min-h-screen justify-center">
    <h1 className="text-2xl font-bold pt-5">Our Services</h1>
    <div className="w-full text-center bg-[url(/BlockchainImage/bg.png)] p-10">        
    <h2 className="text-2xl underline font-bold mb-7">BLOCKCHAIN SOLUTIONS</h2>
    <div className="w-full flex justify-around items-center gap-10">
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
    <h2 className="text-2xl underline font-bold mb-7">TOKENIZATION SOLUTIONS</h2>
    <div className="w-full flex justify-around items-center gap-10">
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
    <h2 className="text-2xl underline font-bold mb-7">SMART CONTRACT SERVICES</h2>
    <div className="w-full flex justify-around items-center gap-10">
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
    <h2 className="text-2xl underline font-bold mb-7">ENTERPRISE SOLUTIONS</h2>
    <div className="w-full flex justify-around items-center gap-10">
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

    
    <div className="w-full text-center bg-[url(/ProductImage/bg5.png)] p-10">        
    <h2 className="text-2xl underline font-bold mb-7">Customer Engagement</h2>
    <div className="w-full flex justify-around items-center gap-10">
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
