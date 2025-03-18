

const Testimonial = () => {
   


  return (
<div className="bg[url('/Frame1.svg')] bg-white relative h-dvh w-screen  flex justify-center overflow-x-hidden" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 15%, 50% 0%, 0% 15%)' }}>
  
   
    <div className="flex w-[100%] h-[100%] z-10 justify-center items-center space-y-2 md:space-y-10 absolute top-10  flex flex-col">
          <h1 className="border-2  border-white text-black p-2 text-3xl md:text-5xl font-[regular]">Testimonial</h1>
         
       <div className= " space-y-2 justify-center items-center rounded-xl"> 
        <div className="bg-blue-100 relative p-6 md:w-150 w-100 rounded-3xl">
          <h1 className="flex font-bold justify-center items-center">Lordzee</h1>
          <p className="flex justify-center text-sm items-center">Payment was stress-free</p>
        </div>
      
        <div className="bg-blue-100 relative p-6 md:w-150 w-100 rounded-3xl ">
          <h1 className="flex font-bold justify-center items-center">Shola </h1>
          <p className="flex justify-center text-sm items-center">It was fast and customer service was nice</p>
        </div>
   
        <div className="bg-blue-100 relative p-6 md:w-150 w-100 rounded-3xl ">
          <h1 className="flex font-bold justify-center items-center">Tee </h1>
          <p className="flex justify-center text-sm items-center">My first try and I love it already</p>
        </div>
   
  </div>

     </div>

</div>
  )
}

export default Testimonial