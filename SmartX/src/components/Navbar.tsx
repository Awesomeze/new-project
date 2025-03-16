
import { useRef, useState } from "react"
const navContainerRef = useRef(null)
const NavList= ['Profile', 'About','Testimonial','Trade','Contact']
    
const Navbar = () => {
    
    const [hasClicked, sethasClicked] = useState(false)
 
  return (
   <div ref={navContainerRef} className=" z-30 h-6 absolute items-center top-2 left-0 bg-black/50 justify-center items-center flex font-bold w-screen p-3 transition-all duration-500 ">
    <header className="flex size-full items-center justify-between">
        {NavList.map((item) =>(
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:border-1 border-white rounded-lg shadow-white hover:shadow-lg cursor-pointer px-1 ">
                {item}
            </a>
        ))}

    </header>
   
   </div>
  )
}

export default Navbar