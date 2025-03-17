

const WhyOmronix = () => {
  return (
    <div className="AboutSection w-full min-h-screen flex  flex-col justify-center items-center relative gap-10 bg-mid-blue">

             <h1 className="text-lg md:text-xl font-bold">Why Choose Omronix?</h1>

             <div className="container w-3/4 flex gap-10 justify-around">
              <div className="cardContainer flex flex-col gap-4 w-56 h-66 text-center ">
                <img src="/AgenticAiImages/img1.png" alt="" className="rounded-xl" />
                <h2 className="font-bold">Ethical AI</h2>
                <p className="text-sm text-textColor font-semibold">Ensures bias mitigation for fair and transparent decision-making.
                Implements explainable AI for accountability and trust.</p>
              </div>
              <div className="cardContainer flex flex-col gap-4 w-56 h-66 text-center ">
                <img src="/AgenticAiImages/img2.png" alt="" className="rounded-xl" />
                <h2 className="font-bold">Synergy with Blockchain</h2>
                <p className="text-sm text-textColor font-semibold">Provides secure audit trails for AI decisions. Ideal for industries like finance, healthcare, and compliance-driven sectors.</p>
              </div>
              <div className="cardContainer flex flex-col gap-4 w-56 h-66 text-center ">
                <img src="/AgenticAiImages/img3.png" alt="" className="rounded-xl" />
                <h2 className="font-bold">Scalability</h2>
                <p className="text-sm text-textColor font-semibold">Cloud-native infrastructure for handling enterprise-scale workloads. Supports high-performance AI agents with real-time processing.</p>
              </div>
             </div>
     
         </div>
  )
}

export default WhyOmronix