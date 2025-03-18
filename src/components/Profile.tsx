import { useState } from "react"



const Profile = () => {
    const [showProfile, setshowProfile] = useState(false)
    
    

    
  return (
    <div>
        <button onClick={()=> setshowProfile(!showProfile)}>
            <span>profile</span>  
        </button>

        {showProfile && (<ul className="shadow-blue-600 shadow-2xl flex flex-col left-3 items-center rounded px-4 z-10 w-60 h-13 absolute top-9">
            <li><button className="hover:bg-white  hover:text-black bg-yellow-300 border-1 w-60 rounded-lg">create an Account</button> </li>
            <li><button className="hover:bg-white  hover:text-black bg-yellow-300 border-1 w-60 rounded-lg">Sign in</button></li>
        </ul>)}
    </div> 
  
    

  )
}

export default Profile