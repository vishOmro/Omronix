import ProductDescCard from "../productDescCard";

const Data = [ {
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
    "title": "Hyper-Personalized Recommendations",
    "content": "AI adapts to customer needs in real time, ensuring that every interaction feels tailored and relevant."
},
]

const services = () => {
    return (
      <div className="w-full flex flex-col items-center gap-5  min-h-screen justify-center">
        <h1 className="text-2xl font-bold pt-5">Our Services</h1>
        <div className="w-full text-center p-10">      
        <h2 className="text-xl font-bold mb-7">Custom AI Agent Development</h2>
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

        <div className="w-full text-center bg-[url(/AgenticAiImages/bg1.png)] p-10">        
        <h2 className="text-xl font-bold mb-7">Industry Specific-AI Agents</h2>
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

        <div className="w-full text-center bg-[url(/AgenticAiImages/bg2.png)] p-10">      
        <h2 className="text-xl font-bold mb-7">AI-Powered Analytics </h2>
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

        <div className="w-full text-center bg-[url(/AgenticAiImages/bg3.png)] p-10">    
        <h2 className="text-xl font-bold mb-7">Automated Workflow Management</h2>
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
  }
  

  

export default services