

function Card({image, heading, content}) {
  return (
    <div className='w-auto p-2 m-5 rounded-lg overflow-auto'>
      <img src={image} alt="image" className='rounded-lg w-50 h-50'/>
      <div className='p-2 font-bold'>
         {heading}
      </div>
      <div className='p-2 w-50'>
          {content}

           </div>

    </div>
  )
}

export default Card