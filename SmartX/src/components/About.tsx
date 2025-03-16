import { useState } from "react"


const About = () => {
    const [aboutUs, setaboutUs] = useState(true)
    
  return (
    <div className="bg[url('/Frame1.svg')] bg-cover relative h-162 w-screen  flex justify-center overflow-x-hidden">
       <div> <button className="text-black pt-2 font-bold text-lg"
        onClick={() => setaboutUs(!aboutUs)}
        ></button> </div>
        
        {aboutUs && (<div className= " w-[90%] h-[70%]  absolute top-20 bg-black/80 border-2 border-white shadow-xl shadow-blue-700 rounded-xl">
        <div className="flex  space-y-3 justify-center  p-3 justify-centers flex-col items-center">
          <h1 className="border-1 text-white p- text-3xl md:text-5xl font-[regular]">Why trade with smart<span className="font-[regular] text-yellow-300">X</span> ?</h1>
        <div className="bg-white relative p-6 md:w-150 w-100 border-2 ">
          <h1 className="flex font-bold justify-center items-center">Best Rates </h1>
          <p className="flex justify-center text-sm items-center">We offer appealing exachange rates for all gift cards.</p>
        </div>
      
        <div className="bg-white relative p-6 md:w-150 w-100 border-2 ">
          <h1 className="flex font-bold justify-center items-center">Instant Payment </h1>
          <p className="flex justify-center text-sm items-center">Get paid in minutes.</p>
        </div>

        <div className="bg-white relative p-6 md:w-150 w-100 border-2 ">
          <h1 className="flex font-bold justify-center items-center">Secure Transaction </h1>
          <p className="flex justify-center text-sm  items-center">Your information and payments are encrypted and protected.</p>
        </div>
        

        </div>
        </div>)}
        </div>
       
  )
}

export default About