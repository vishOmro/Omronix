import productData from "../../Data/product.data.json";
//import productData from "../../Data/agenticAi.json"
import ProductDescCard from "../productDescCard"


const ProductsDetail = () => {
  return (
   <div className="flex flex-col gap-10 w-full min-h-screen justify-center items-center">
    <h1 className="text-xl font-bold">Services</h1>
    <div className="flex gap-10 serviceCards ">
    <ProductDescCard />
    <ProductDescCard />

    <ProductDescCard />

    </div>
 
   </div>
  );
};

export default ProductsDetail;
