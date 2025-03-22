

function Card({ image, heading, content }) {
  return (
    <div className=' p-0 md:p-2  md:m-5 rounded-lg overflow-auto md:w-auto w-70 flex flex-col justify-center items-center md:items-start gap-2 '>
      <div class="text-center">
        <img src={image} alt="image" className='rounded-lg md:w-70 md:h-50 h-30 w-70' />
        <div className='md:p-2 font-bold md:text-lg w-40 md:w-auto'>
          {heading}
        </div>
        <div className='md:p-1 md:w-70 md:text-center  font-semibold '>
          {content}

        </div>
      </div>
    </div>
  )
}

export default Card