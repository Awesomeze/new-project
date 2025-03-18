
import GiftCardForm from "./GiftCardForm"

const Trade = () => {
  return (
<div className=" bg-white h-dvh w-screen overflow-x-hidden" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 87%)' }}>
    <div className="absolute flex flex-col items-center top-0 w-[100%] h-[100%] relative ">
        <h1 className=" md:mt-2 mt-1 px-4 md:py-2 md:px-5  font-[regular] text-3xl md:text-5xl">Trade Now</h1>

        <div className="md:space-x-10 w-[100%] h-[100%] flex flex-col md:flex-row relative items-center ">
            
            <div><GiftCardForm/></div>

            <div className="absolute mt-6 md:mt-4 relative top flex md:h-100 md:w-150 h-70 w-100" >
            <img className=" object-cover items-center flex rounded-lg" src="./fill2.jpg" alt="smiling girl" /></div>
        
        </div>

    </div>
</div>
  )
}

export default Trade