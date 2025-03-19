

function Card({image, heading, content}) {
  return (
    <div className=' p-0 md:p-2  md:m-5 rounded-lg overflow-auto md:w-auto w-40 flex flex-col justify-center items-center md:items-start gap-2 text-center md:text-left'>
      <img src={image} alt="image" className='rounded-lg md:w-50 md:h-50 h-30 w-30'/>
      <div className='md:p-2 font-bold md:text-lg  w-40 md:w-auto'>
         {heading}
      </div>
      <div className='md:p-2 md:w-50 md:text-md  font-semibold w-40 '>
          {content}

           </div>

    </div>
  )
}

export default Card