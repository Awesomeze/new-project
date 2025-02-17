
const Navbar = () => {
  return (
   <div className="flex font-bold w-full p-3 ">
    <ul className="flex cursor-pointer justify-between w-full rounded-lg bg-black/50 h-6 px-3">
     <li className="hover:text-white">profile</li>
     <li className="hover:text-white">about</li>
     <li className="hover:text-white">testimonial</li>
     <li className="hover:text-white">trade</li>
     <li className="hover:text-white">contact</li>
     </ul>
   </div>
  )
}

export default Navbar