import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useEffect, useRef, useState } from "react";

const Hero = () => {
    

    const imageRef = useRef<HTMLImageElement>(null)
   useEffect( () => {
  if (imageRef.current){
    gsap.set(imageRef.current,{
      clipPath:"polygon(7% 0, 88% 0, 100% 100%, 0 100%)",
  });
}
}, []);
    
    const imageSrc = () => '/Asset.png';

    useGSAP
  return (
   
   <div className="relative h-dvh w-screen flex justify-center overflow-x-hidden rounded-lg ">

        
         <div className="flex justify-center z-20 absolute">
        <img 
        ref={imageRef}
        src={imageSrc()}
        alt="heroImage"
        className="h-[70%] w-[80%] "
         />
         <h1
         className=" text-white font-[zentry] absolute top-0 inset-0 text-6xl md:text-7xl lowercase " 
         > smartX
         </h1>
         
         </div>
         
         <h1
         className=" text-black font-[zentry] absolute flex text-6xl md:text-7xl lowercase" 
         > smartX
         </h1>
        
         </div>
         
  )
}

export default Hero