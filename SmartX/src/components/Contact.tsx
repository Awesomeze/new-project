import Review from "./Review"
import WhatsApp from "./WhatsApp"

const Contact = () => {
  return (
    <div className="overflow-y-hidden h-hdv overflow-x-hidden flex flex-col items-center">
      <h1 className="font-bold mt-10 mb-15  font-[regular] text-white  md:text-5xl text-2xl">Contact Us</h1>
      
      <div className="flex flex-col items-center md:flex-row"> 
      <div className="flex flex-col md:flex-row items-center border-2 p-2 md:p-4 border-white relative space-y-10 md:space-y-0 md:space-x-10"> 
        
        <div className=" md:space-y-10 flex flex-col h-50 md:h-100 w-100 bg-black"style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 15%, 50% 0%, 0% 15%)' }}>
          <div className="md:mt-10"> <WhatsApp/> </div>

           <div className="h-2 bg-white mt-3 text-white"></div>

           <div className="text-white text-center flex items-center flex-col mt-4">
            <img className="w-full h-10" src="./phone.svg" alt="" /> 
            +2349095942976
           </div> 
           
           </div>

        <div className="flex flex-col items-center rounded-xl h-50 md:h-100 w-100 bg-black text-white/80 text-center"style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}>
          <h1 className=" border-1 w-60 md:w-90 border-white text-lg md:text-2xl md:mt-5">Send us a review</h1> <Review/>
          </div>

      </div>

      <div className="md:px-10 text-center absolute mt-2 md:top-10 md:h-100 w-full relative  ">
        <h1 className="font-bold font-[regular] text-2xl md:text-7xl md:text-green-500 text-white ">
           Happy Trading !
           </h1>
        </div>
      </div>

    <footer className="mt-7 text-sm text-center  w-screen  h-10 bg-white">
      <h1>
        &copy; {new Date().getFullYear()} All Right Reserved
        </h1>
    </footer>
      </div>
  )
}

export default Contact