

const ProductDescCard = ({imgUrl, title, content}) => {
  return (
    <div className="w-72  h-88 bg-white border border-gray-400 rounded-xl text-center flex flex-col justify-center items-center gap-4 p-1 shadow-agenticColor drop-shadow-xl shadow-xl bg-gradient-to-br from-white to-blue-100">
        <img src={imgUrl} alt="" className="mix-blend-multiply object-cover w-24 h-24 "/>
        <h2 className="text-base font-semibold text-center">{title}</h2>
        <p className="text-sm leading-6 font-semibold text-textColor">{content}</p>
    </div>
  )
}

export default ProductDescCard