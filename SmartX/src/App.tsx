import { useGSAP } from "@gsap/react";
import "./App.css"
import  { useEffect, useRef } from "react";







const App = () => {

  
    
  return (
    <section  id="hero" className=" flex item-center justify-center pt-10" >
      <div 
      className="h-100 w-200"
      style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"}}>
     <img src="/CardBlue.svg" alt="" />
     <div
     className="absolute top-10 left 10">
      spatans
     </div>
    </div>
    
    
    </section>
    
  )

 
}

export default App
