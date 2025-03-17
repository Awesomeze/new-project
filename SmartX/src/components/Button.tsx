

const Button = () => {
  const Ref=['Trade']
  return (
    <div className="cursor-pointer item-center h-8 w-60 md:top-[50%] top-[67%] right-[40%] md:right-[30%] text-black  font-bold uppercase  absolute  bg-yellow-400 border-2 border-white shadow-blue-600 shadow-lg hover:bg-green-500 hover:text-black rounded-xl">
      {Ref.map((item)=>(
        <a href={`#${item.toLowerCase()}`}><span className="justify-center py-2 item-center px-13">
        start trading</span></a>
      ))}
      
        </div>
  )
}

export default Button