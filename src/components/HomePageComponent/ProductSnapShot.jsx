import ProductSnapshotImg from "../../assets/ProductSnapshot.png"
const ProductSnapShot = () => {
  return (
     <div className="AboutSection w-full min-h-screen  relative gap-10 bg-mid-blue">
               <h1 className="text-lg md:text-xl font-bold text-center pt-4">FEATURED PRODUCT SNAPSHOT</h1>
             <div className="flex justify-center items-center">
                 <div className="left  p-10 w-full">
                 
                     <p className="mt-4 md:text-md p-4 w-full">
                        <ul>
                            <li className="mt-4"><span className="font-bold">Customer Engagement</span><p className="text-textColor font-semibold">AI-driven tools to boost interaction and retention.</p></li>
                            <li className="mt-4"><span className="font-bold">WhatsApp API</span><p className="text-textColor font-semibold">Transform your communication with automated, branded WhatsApp interactions.</p></li>
                            <li className="mt-4"><span className="font-bold">SMS Solutions</span><p className="text-textColor font-semibold">From secure OTPs to engaging promotional campaigns.</p></li>
                            <li className="mt-4"><span className="font-bold">Voice Services</span><p className="text-textColor font-semibold">Clear, reliable, and interactive voice solutions.</p></li>
                            <li className="mt-4"><span className="font-bold">Email Solutions</span><p className="text-textColor font-semibold">Customized transactional and promotional email campaigns.</p></li>
                        </ul>
                     </p>
                     <div className="buttonSection flex gap-10 mt-6">
                   
                     </div>
                 </div>
                 <div className="right w-full bg-blue relative flex justify-center">
                     <img src={ProductSnapshotImg} alt=""  className="w-96"/>
                 </div>
             </div>
         </div>
  )
}

export default ProductSnapShot