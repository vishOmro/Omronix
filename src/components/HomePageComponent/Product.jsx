import ProductCard from "./ProductCard"
import productImage from "../../assets/sample.webp"


const Product = () => {
  return (
    <div className="ProductSection w-full min-h-screen flex flex-col justify-center items-center relative md:gap-10 gap-5 bg-transparent">
    <h1 className="text-lg md:text-2xl font-bold pt-4">Services</h1>
    <div className="cardSection flex justify-center flex-wrap w-full md:px-20 px-2 gap-10 md:text-base text-sm">
         <ProductCard name={"Communication Solution"} link={"/product/communicationsolution"} image={productImage}/>
         <ProductCard name={"Blockchain Solution"} link={"/product/blockchainsolution"} image={productImage}/>
         <ProductCard name={"Agentic AI Solution"} link={"/product/agenticaisolution"} image={productImage}/>
        

    </div>

</div>
  )
}

export default Product