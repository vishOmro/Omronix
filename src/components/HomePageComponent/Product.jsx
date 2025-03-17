import ProductCard from "./ProductCard"



const Product = () => {
  return (
    <div className="ProductSection w-full min-h-screen flex flex-col justify-center items-center relative md:gap-10 gap-5 bg-transparent">
    <h1 className="text-lg md:text-2xl font-bold pt-4">Services</h1>
    <div className="cardSection flex justify-center flex-wrap w-full md:px-20 px-2 gap-10 md:text-base text-sm">
         <ProductCard name={"Communication Solution"} link={"/product/communicationsolution"} image={"/serv1.png"} overview={"At Omronix, our suite of products is designed to cover every aspect of business communication. Explore our detailed product pages to discover how we can help you engage more effectively with your customers."}/>

         <ProductCard name={"Blockchain Solution"} link={"/product/blockchainsolution"} image={"/serv2.png"} overview={"        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, ad totam. Illum voluptatibus totam soluta harum doloribus pariatur accusantium quaerat! Nihil doloribus dolore illum minus rerum, magnam officia officiis explicabo."}/>
         <ProductCard name={"Agentic AI Solution"} link={"/product/agenticaisolution"} image={"/serv3.png"} overview={"         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, ad totam. Illum voluptatibus totam soluta harum doloribus pariatur accusantium quaerat! Nihil doloribus dolore illum minus rerum, magnam officia officiis explicabo."}/>
        

    </div>

</div>
  )
}

export default Product