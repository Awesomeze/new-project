import Profile from "./profile"
import { useRef, useState } from "react"

<ul className="flex cursor-pointer justify-between w-full rounded-lg bg-black/50 h-6 px-3">
<li className=" hover:border-1 hover:border-white" ><Profile/></li>
<li className="hover:border-1 hover:border-white">about</li>
<li className="hover:border-1 hover:border-white">testimonial</li>
<li className="hover:border-1 hover:border-white">trade</li>
<li className="hover:border-1 hover:border-white">contact</li>
</ul>

const Navbar = () => {
    const navContainerRef = useRef(null)
    const [hasClicked, sethasClicked] = useState(false)
   const NavbarList= ["profile", "about",'testimonial',"trade","contact"]
    
  return (
   <div ref={navContainerRef} className="fixed z-30 h-6 absolute items-center top-2 left-0 bg-black/50 justify-center items-center flex font-bold w-screen p-3 transition-all duration-700 ">
    <header className="flex size-full items-center justify-between">

    </header>
   
   </div>
  )
}

export default Navbar