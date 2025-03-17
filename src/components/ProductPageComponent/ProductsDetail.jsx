import ProductDescCard from "../productDescCard";


const Data = [ {
  "imgUrl": "/TransLogo.png",
  "title": "OTP & Authentication",
  "content": "Secure, time-sensitive one-time passwords for account verification and secure transactions. Enjoy high security with encryption, reducing the risk of fraud."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Transactional SMS",
  "content": "Automated messages triggered by customer interactions such as order confirmations, shipping details, and account notifications. These messages are personalized and sent in real time to maintain high engagement."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Promotional SMS",
  "content": "Engage your audience with targeted campaigns. Customize your messages using variables (like customer names) to make each communication personal."
},
]

const Data2 = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Outbound Dialing",
  "content": "Deliver pre-recorded voice messages quickly and reliably. Ideal for marketing  campaigns, alerts, and notifications. "
},
{
  "imgUrl": "/TransLogo.png",
  "title": "IVR Telephony",
  "content": "Provide a self-service option for customers with an Interactive Voice Response  system that routes calls efficiently and gathers necessary information."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Missed Call Alerts",
  "content": "Ensure no opportunity is lost by converting missed calls into actionable leads with  immediate follow-ups."
},
]
const Data3 = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Transactional Emails",
  "content": "Automatically triggered emails for activities such as password resets, invoices, and  account alerts. These emails are fully encrypted and designed to build trust and  reliability"
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Promotional Email",
  "content": "Creative, visually engaging emails designed to capture attention and drive  conversions. Utilize rich media, personalized content, and clear CTAs to boost  engagement."
},

]




const ProductsDetail = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 min-h-screen justify-center">
    <h1 className="text-2xl font-bold pt-5">Our Services</h1>
    <div className="w-full text-center bg-[url(/ProductImage/bg1.png)] p-10">        
    <h2 className="text-xl font-bold mb-7">SMS SOLUTIONS</h2>
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

    <div className="w-full text-center bg-[url(/ProductImage/bg2.png)] p-10">        
    <h2 className="text-xl font-bold mb-7">VOICE SERVICES</h2>
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

    <div className="w-full text-center bg-[url(/ProductImage/bg3.png)] p-10">        
    <h2 className="text-xl font-bold mb-7">Email Solutions</h2>
    <div className="w-full flex justify-around items-center gap-10">
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

    <div className="w-full text-center bg-[url(/ProductImage/bg4.png)] p-10">        
    <h2 className="text-xl font-bold mb-7">Whatsapp Business API</h2>
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
    <h2 className="text-xl font-bold mb-7">Customer Engagement</h2>
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
