import { useState } from "react"
import emailjs from "@emailjs/browser";

const Review = () => {
    const [Name, setName] = useState<string>("");
    const [Testimony, setTestimony] = useState<string>("")

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
      .send(
        "Awesome", //  EmailJS service ID
        "template_w9gxoct", //  EmailJS template ID
        { 
          name: Name,
          testimony: Testimony
        },
        "5a_eZ9a62aM1eT7it" //  EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Testimony submitted successfully!");
        setName("");
        setTestimony(""); // Clear input after submission
      })
      .catch((err) => console.error("FAILED...", err));
  };
  return (
    <div className="flex  flex-col items-center  relative p-2 md:w-full w-full rounded-3xl ">
           <form onSubmit={sendEmail} className="mt-3 md:mt-10 w-full flex flex-col items-center">
           
           <input
                className="cursor-pointer focus-ring bg-white/50 p-2 px-4 border rounded-lg w-full mb-2 placeholder-gray-700"
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            <textarea 
          className="cursor-pointer focus-ring  bg-white/50  p-2 px-2 border rounded-lg w-full h-10 md:h-30 placeholder-gray-700"
      
          value={Testimony}
          onChange={(e) => setTestimony(e.target.value)}
          placeholder="review"
          rows={4}
             />
            
            <button
              id= "submission btn" 
              type="submit"
              className="mt-2 md:mt-8 cursor-pointer bg-green-500 hover:bg-yellow-400 hover:text-black text-white font-bold py-1 md:py-2 px-10 rounded-lg"
            >
              Submit
            </button>
            </form>
          </div>
  )
}

export default Review