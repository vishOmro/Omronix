import ProductCard from "./ProductCard"
import productImage from "../../assets/sample.webp"


const Product = () => {
  return (
    <div className="ProductSection w-full min-h-screen flex flex-col justify-center items-center relative gap-10 bg-transparent">
    <h1 className="text-lg md:text-xl font-bold pt-4">PRODUCTS</h1>
    <div className="cardSection flex justify-center flex-wrap w-full px-20">
         <ProductCard name={"Services"} link={"/products"} image={productImage}/>
         <ProductCard name={"Services"} link={"/products"} image={productImage}/>
         <ProductCard name={"Services"} link={"/products"} image={productImage}/>
         <ProductCard name={"Services"} link={"/products"} image={productImage}/>
         <ProductCard name={"Services"} link={"/products"} image={productImage}/>

    </div>

</div>
  )
}

export default Product