import ProductDescCard from "../productDescCard.jsx";


const Data = [ {
  "imgUrl": "/otp.png",
  "title": "OTP & Authentication",
  "content": "Secure, time-sensitive one-time passwords for account verification and secure transactions. Enjoy high security with encryption, reducing the risk of fraud."
},
{
  "imgUrl": "/Trans.png",
  "title": "Transactional SMS",
  "content": "Automated messages triggered by customer interactions such as order confirmations, shipping details, and account notifications. These messages are personalized and sent in real time to maintain high engagement."
},
{
  "imgUrl": "/Promo.png",
  "title": "Promotional SMS",
  "content": "Engage your audience with targeted campaigns. Customize your messages using variables (like customer names) to make each communication personal."
},
]

const Data2 = [ {
  "imgUrl": "../TransLogo.png",
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

const wpapi = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Interactive Notifications",
  "content": "Engage your customers with clickable buttons, images, and rich media that drive immediate responses."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Automated Bots",
  "content": "Provide 24/7 support and streamline customer interactions with customizable chatbots."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Custom Branding",
  "content": "Enhance customer trust by integrating your logo, tagline,and personalized welcome messages directly into the chat interface."
},

]

const customeng = [ {
  "imgUrl": "/TransLogo.png",
  "title": "Unified Dashboard",
  "content": "Monitor all your campaigns in one place with detailed analytics and real-time reporting."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Smart Algorithms",
  "content": "Ensure that your messages are optimized for maximum reach and engagement."
},
{
  "imgUrl": "/TransLogo.png",
  "title": "Multimedia Messaging",
  "content": "Add a personal touch with images, videos, and interactive elements that make your campaigns memorable"
},

]




const ProductsDetail = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 min-h-screen justify-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold pt-10">Our Services</h1>

      {/* SMS Solutions */}
      <div className="w-full text-center bg-[url(/ProductImage/bg1.png)] p-4 md:p-10">        
        <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">SMS SOLUTIONS</h2>
        <div className="grid grid-cols-1 md:ml-0 ml-6    sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {Data.map((data, index) => (
            <ProductDescCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Voice Services */}
      <div className="w-full text-center bg-[url(/ProductImage/bg2.png)] p-4 md:p-10">        
        <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">VOICE SERVICES</h2>
        <div className="grid grid-cols-1 md:ml-0 ml-6  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data2.map((data, index) => (
            <ProductDescCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* WhatsApp Business API */}
      <div className="w-full text-center bg-[url(/ProductImage/bg3.png)] p-4 md:p-10">        
        <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">WhatsApp Business API</h2>
        <div className="grid grid-cols-1 md:ml-0 ml-6  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wpapi.map((data, index) => (
            <ProductDescCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Email Solutions */}
      <div className="w-full text-center bg-[url(/ProductImage/bg4.png)] p-4 md:p-10">        
        <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">Email Solutions</h2>
        <div className="grid grid-cols-1 md:ml-0 ml-6  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data3.map((data, index) => (
            <ProductDescCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Customer Engagement */}
      <div className="w-full text-center bg-[url(/ProductImage/bg5.png)] p-4 md:p-10 mb-5">        
        <h2 className="text-xl md:text-2xl underline font-bold mb-5 md:mb-7">Customer Engagement</h2>
        <div className="grid grid-cols-1 md:ml-0 ml-6  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customeng.map((data, index) => (
            <ProductDescCard key={index} {...data} />
          ))}
        </div>
      </div>

    </div>
  );
};



export default ProductsDetail;
