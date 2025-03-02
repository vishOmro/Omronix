

const WhyOmronix = () => {
  return (
    <div className="AboutSection w-full min-h-screen flex md:flex-row-reverse flex-col-reverse justify-center items-center relative gap-10 bg-mid-blue">
              <div className="left w-full md:p-10 p-5">
             <h1 className="text-lg md:text-xl font-bold">Why Choose Omronix?</h1>
     
             <p className="mt-4 md:w-3/4 text-sm md:text-base text-textColor font-semibold">
                 <ul>
                 <li  className="mt-2">
                  <p className="text-black">Expertise: </p>A team of seasoned professionals with extensive experience in blockchain technology.
                </li>
                <li  className="mt-2">
                  <p className="text-black">Innovation:</p> Continuous investment in research and development to deliver state-of-the-art solutions.
                </li>
                <li  className="mt-2">
                  <p className="text-black">Customization: </p> Tailored services that align with your specific business needs and objectives
                </li>
                <li  className="mt-2">
                  <p className="text-black">Support:</p>Dedicated support throughout your blockchain journey, from consultation to implementation and beyond.
                </li>
                    </ul>
                    </p>
     
                
             </div>
              <div className="right w-full bg-blue relative flex justify-center">
                         <img src="" alt="WhyOmronix"  className="md:w-96 w-72  mt-4 md:mt-0"/>
                     </div>
         </div>
  )
}

export default WhyOmronix