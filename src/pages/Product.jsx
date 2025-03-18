
import Hero from "../components/ProductPageComponent/Hero.jsx"
import WhyChooseUs from "../components/ProductPageComponent/WhyOmronix.jsx"
import ProductSolutions from "../components/ProductPageComponent/productSolutions.jsx"
import productsDetail from "../../components/ProductPageComponent/productsDetail.jsx";


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