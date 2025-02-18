import Profile from "./profile"
import About from "./About"
import { useState } from "react"

const Navbar = () => {
    const [hasClicked, sethasClicked] = useState(false)
   
    
  return (
   <div className="flex font-bold w-full p-3 ">
    <ul className="flex cursor-pointer justify-between w-full rounded-lg bg-black/50 h-6 px-3">
     <li className="hover:text-red-700" ><Profile/></li>
     <li className="hover:text-red-700" onClick={()=> sethasClicked(!hasClicked)}>about</li>
     <li className="hover:text-red-700">testimonial</li>
     <li className="hover:text-red-700">trade</li>
     <li className="hover:text-red-700">contact</li>
     </ul>
   </div>
  )
}

export default Navbar