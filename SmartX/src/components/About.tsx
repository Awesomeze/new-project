import { useState } from "react"


const About = () => {
    const [aboutUs, setaboutUs] = useState(true)
    
  return (
    <div className="bg-[url('/Frame1.svg')] bg-cover relative h-162 w-screen  flex justify-center overflow-x-hidden">
       <div> <button className="text-black font-bold text-2xl"
        onClick={() => setaboutUs(!aboutUs)}
        >About us</button> </div>
        {aboutUs && (<div className= "w-[90%] h-[70%]  absolute top-20 bg-black/75 border-2 border-white shadow-xl shadow-blue-700 rounded-xl"></div>)}
        </div>
       
  )
}

export default About