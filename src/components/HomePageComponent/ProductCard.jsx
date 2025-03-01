

const ProductCard = ({image, name, link, overview}) => {
  return (
    <div className='w-60
     bg-gray-200 rounded-lg overflow-auto leading-7'>
    <img src={image} alt="image" className='rounded-lg w-60
     h-60'/>
    <div className='p-2 font-semibold'>
       {name}
       <p className="text-sm font-normal text-grey mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt quisquam explicabo repudiandae nulla dolore neque ipsa dolores velit maiores.</p>
       <p className="text-textColor text-sm mt-2"><a href={link}>View more {"->"}</a></p>
    </div>
    

  </div>
  )
}

export default ProductCard