import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useEffect, useRef, useState } from "react";

const Hero = () => {
    

    const imageRef = useRef<HTMLImageElement>(null)
    const imageSrc = () => '/Asset.png';

    
  return (
   
   <div className="bg-[url('/Frame2.svg')] bg-cover relative h-dvh w-screen flex justify-center overflow-x-hidden  ">

       <div className="w-[90%] h-[70%] absolute top-20 bg-black/75 border-2 border-white shadow-xl shadow-blue-700 rounded-xl">
         <h1
         className=" px-3 text-white font-[regular] absolute flex text-6xl md:text-7xl left-0 top-0 " 
         > smart<span className="font-[regular] text-yellow-300">X</span>
         </h1>
         <p className="text-yellow-500 flex  absolute top-13 md:pt-3 pt-1 px-4 font-[RegularR] ">
          making smart Xchanges
         </p>
         
         </div> 
         <h1
         className="  text-white font-bold  font-[regular] absolute flex text-xl md:text-2xl right-1/14 bottom-[20%] " 
         >every <span className="font-[regular] text-yellow-300">X</span>change counts
         </h1>
         </div> 
        
         
  )
}

export default Hero