

const ProductDescCard = ({imgUrl, title, content}) => {
  return (
    <div className="w-72  h-88 bg-white border border-gray-400 rounded-xl text-center flex flex-col justify-center items-center gap-4 p-1">
        <img src={imgUrl} alt="" />
        <h2 className="text-base font-semibold text-center">{title}</h2>
        <p className=" text-sm">{content}</p>
    </div>
  )
}

export default ProductDescCard