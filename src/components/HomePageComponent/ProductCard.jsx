

const ProductCard = ({image, name, link}) => {
  return (
    <div className='w-auto p-2 m-5 rounded-lg overflow-auto'>
    <img src={image} alt="image" className='rounded-lg w-60 h-60'/>
    <div className='p-2 font-semibold'>
       {name}
       <p className="text-textColor text-sm"><a href={link}>View more</a></p>
    </div>
    

  </div>
  )
}

export default ProductCard