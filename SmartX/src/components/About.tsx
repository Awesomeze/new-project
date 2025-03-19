


const About = () => {
    
  return (
    <div className="bg[url('/Frame1.svg')] absolute top-3  bg-cover relative h-dvh w-screen  flex justify-center overflow-x-hidden">
       
    <div className= "w-[100%] h-[100%] flex flex-col md:flex-row relative md:gap-5 items-center  p-1 md:p-10 shadow-xl shadow-blue-700 ">
        
    <div className="h-[100] md:h-[100%] flex relative  "> 
        <div className="flex space-y-1 md:space-y-3 justify-center p-1 md:p-3 justify-centers flex-col items-center">
          <h1 className="border-1 text-white p-2 text-3xl md:text-5xl font-[regular]">Why trade with smart<span className="font-[regular] text-yellow-300">X</span> ?</h1>
        <div className="bg-white relative p-3 md:p-6  md:w-150 w-100 border-1 ">
          <h1 className="flex font-bold justify-center items-center">Best Rates </h1>
          <p className="flex justify-center text-sm items-center">We offer appealing exachange rates for all gift cards.</p>
        </div>
      
        <div className="bg-white relative p-3 md:p-6 md:w-150 w-100 border-1 ">
          <h1 className="flex font-bold justify-center items-center">Instant Payment </h1>
          <p className="flex justify-center text-sm items-center">Get paid in minutes.</p>
        </div>

        <div className="bg-white relative  p-3 md:p-6  md:w-150 w-100 border-1 ">
          <h1 className="flex font-bold justify-center items-center">Secure Transaction </h1>
          <p className="flex justify-center text-sm  items-center">Your information and payments are encrypted and protected.</p>
        </div>

        </div>
        </div>
        <img className="object-cover flex md:h-100 md:w-150 h-70 w-100 rounded-lg" src="./clienthappy.jpg" alt="smiling guy " />
        </div>
        </div>
       
  )
}

export default About