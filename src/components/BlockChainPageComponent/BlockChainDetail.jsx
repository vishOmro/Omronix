import productData from "../../Data/blockchain.data.json"

const BlockChainDetail = () => {
  return (
    <div className={'w-full flex flex-col items-center gap-1'}>
    {productData.map((product, index) => (
      <div key={index} className={`w-full flex flex-col items-center gap-10 ${index%2 !== 0 ? "bg-mid-blue" : ""}`}>
        {/* Product Info */}
        <div className="ProductSection w-full flex justify-center items-center relative">
          <div className="left w-full p-10 leading-7">
            <h1 className="text-lg md:text-xl font-bold">{product.title}</h1>
            <ul className="mt-4 md:w-3/4 md:text-md  text-textColor font-semibold list-disc list-inside">

              {product.desc?.line?.map((item, i) => (
                <li key={i} className="mt-2">
                  <span className="text-black">{item.desctitle}:</span> {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="right w-full bg-blue mt-5 flex justify-center">
            <img src={product.imgUrl} alt="About Us" className="w-92 rounded-2xl" />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="ProductSection w-full flex flex-row-reverse justify-center items-center relative leading-7">
          <div className="left w-full p-10">
            <h1 className="text-lg md:text-xl font-bold">{product.benefits.title}</h1>
            <ul className="mt-4 md:w-3/4 md:text-md text-textColor font-semibold list-disc list-inside">
              {product.benefits?.content?.map((benefit, i) => (
                <li key={i} className="mt-2">
                  <span className="text-black">{benefit.benetitle}:</span> {benefit.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="right w-full bg-blue relative flex justify-center mb-5 ">
            <img src={product.benifitImgUrl} alt="About Us" className="w-92 rounded-2xl" />
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default BlockChainDetail