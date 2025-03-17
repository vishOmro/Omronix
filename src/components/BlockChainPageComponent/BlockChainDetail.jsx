import ProductDescCard from "../productDescCard";


const ProductsDetail = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12 min-h-screen justify-center
      ">
      <h1 className="text-2xl font-bold">Our Services</h1>
      <div className=" w-full flex justify-around items-center ">
      <ProductDescCard />
      <ProductDescCard />
      <ProductDescCard />
      </div>
    </div>
  );
};

export default ProductsDetail;
