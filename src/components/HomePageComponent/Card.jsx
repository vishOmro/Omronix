

function Card({image, heading, content}) {
  return (
    <div className='w-auto p-0 md:p-2  md:m-5 rounded-lg overflow-auto'>
      <img src={image} alt="image" className='rounded-lg md:w-50 md:h-50 h-30 w-30'/>
      <div className='p-2 font-bold md:text-lg  w-30 md:w-auto'>
         {heading}
      </div>
      <div className='p-2 md:w-50 w-30 md:text-md text-sm'>
          {content}

           </div>

    </div>
  )
}

export default Card