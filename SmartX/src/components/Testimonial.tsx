import { useState } from "react"
import emailjs from "@emailjs/browser";



const Testimonial = () => {
    const [Testimony, setTestimony] = useState<text|"">("")
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
      .send(
        "Awesome", //  EmailJS service ID
        "template_w9gxoct", //  EmailJS template ID
        { Testimony },
        "5a_eZ9a62aM1eT7it" //  EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Testimony submitted successfully!");
        setTestimony(""); // Clear input after submission
      })
      .catch((err) => console.error("FAILED...", err));
  };


  return (
<div className="bg-[url('/Frame1.svg')] bg-cover relative h-160 w-screen  flex justify-center overflow-x-hidden" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 15%, 50% 0%, 0% 15%)' }}>
  <div className= " w-[100%] h-[100%]  absolute flex justify-center items-center top-5  rounded-xl">  
    <div className="flex  space-y-3  justify-center  p-3 flex-col items-center">
          <h1 className="border-2  border-white text-black p-2 text-3xl md:text-5xl font-[regular]">Testimonial</h1>
       

        <div className="bg-white relative p-6 md:w-150 w-100 rounded-3xl">
          <h1 className="flex font-bold justify-center items-center">Lordzee</h1>
          <p className="flex justify-center text-sm items-center">Payment was stress-free</p>
        </div>
      
        <div className="bg-white relative p-6 md:w-150 w-100 rounded-3xl ">
          <h1 className="flex font-bold justify-center items-center">Shola </h1>
          <p className="flex justify-center text-sm items-center">It was fast and customer service was nice</p>
        </div>
   
        <div className="bg-white relative p-6 md:w-150 w-100 rounded-3xl ">
          <h1 className="flex font-bold justify-center items-center">Tee </h1>
          <p className="flex justify-center text-sm items-center">My first try and I love it already</p>
        </div>
   
        <div className="flex space-y-4 flex-col items-center bg-white relative p-6 md:w-150 w-100 rounded-3xl ">
           <form onSubmit={sendEmail} className="w-full flex flex-col items-center">
           <span className="font-bold ">Send us a review</span> 
        <input 
          className="focus-ring  bg-white/50  p-2 px-4 border rounded-lg "
          type="text"
          value={Testimony}
          onChange={(e) => setTestimony(e.target.value)}
          placeholder="type"
          />
            
            <button
              id= "submission btn" 
              type="submit"
              className="mt-1 hover:pointer bg-green-500 hover:bg-yellow-400 hover:text-black text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
            </form>
          </div>
   
  </div>
     </div>

</div>
  )
}

export default Testimonial