


const NavList= ['Home', 'About','Testimonial','Trade','Contact']
    
const Navbar = () => {
    
    
 
  return (
   <div  className=" z-30 fixed h-10 absolute items-center top-1 left-0 bg-black/80 justify-center items-center flex font-bold w-screen p-3 transition-all duration-500 ">
    <header className="flex size-full items-center justify-between">
        {NavList.map((item) =>(
            <a key={item} href={`#${item.toLowerCase()}`} className=" rounded-lg  shadow-blue-200 hover:shadow-lg cursor-pointer px-1 text-white ">
                {item}
            </a>
        ))}

    </header>
   
   </div>
  )
}

export default Navbar