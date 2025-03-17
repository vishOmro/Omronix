
import Hero from "../components/ProductPageComponent/Hero"
import WhyChooseUs from "../components/ProductPageComponent/WhyOmronix"
import ProductsDetail from "../components/ProductPageComponent/productsDetail"
import ProductSolutions from "../components/ProductPageComponent/productSolutions"


const Product = () => {
  return (
    <>

<div className="w-full min-h-screen  text-black bg-background-blue">
  <Hero />
    <WhyChooseUs />
    <ProductSolutions />
  <ProductsDetail />

  </div>
  </>  
  )
}

export default Product