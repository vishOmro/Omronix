import React from 'react'

function Card({image,heading ,content}) {
  return (
    <div className='h-110 w-80 p-2 m-5 rounded-lg overflow-auto'>
      <img src={image} alt="image" className='h-70 w-80 rounded-lg'/>
      <div className='p-2 font-bold'>
         {heading}
      </div>
      <div className='p-2 '>
          {content}

           </div>

    </div>
  )
}

export default Card