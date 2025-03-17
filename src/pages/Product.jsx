
import Hero from "../components/ProductPageComponent/Hero"
import WhyChooseUs from "../components/ProductPageComponent/WhyOmronix"
import ProductsDetail from "../components/ProductPageComponent/productsDetail"


const Product = () => {
  return (
    <>

<div className="w-full min-h-screen  text-black bg-background-blue">
  <Hero />
    <WhyChooseUs />
  <ProductsDetail />

  </div>
  </>  
  )
}

export default Product