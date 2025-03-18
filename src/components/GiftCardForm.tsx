import { useState } from "react";
import emailjs from "@emailjs/browser";

const GiftCardForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cardCode, setCardCode] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  // Convert image to Base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        
      };
      reader.readAsDataURL(file);
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      cardCode,
      amount,
      image, // Base64 image string
    };

    emailjs
      .send(
        "Awesome", //  EmailJS service ID
        "template_7q7fkjn", //  EmailJS template ID
        templateParams,
        "5a_eZ9a62aM1eT7it" //  EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Gift card details submitted successfully!");
        setName("");
        setEmail("");
        setCardCode("");
        setAmount("");
        setImage(null);
        
      })
      .catch((err) => {console.error("FAILED...", err);
      alert("Submission failed. Please try again.");
    })
    .finally(() => setLoading(false));
  };

  const sendWhatsAppMessage = () => {
    const phone = "+2349095942976"; 
    
    const message = `Hello! I would like to submit my gift card details:
    - Name: ${name}
    - Email: ${email}
    - Gift Card Code: ${cardCode}
    - Amount: $${amount}
    ${image ? "- Image attached (check email)." : ""}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  return (
    <div className="flex  items-center h-90 md:h-[100%]  md:p-5">
      
      <form onSubmit={sendEmail} className="absolute top-0 h-[100%] md:h-[100%] flex relative md:p-6 p-1 md:w-150 w-100 bg-white flex-col md:shadow-blue-200 items-center  rounded-lg shadow-lg">
        <h2 className=" text-sm md:text-xl text-blue-600 font-bold mt-2 mb-2"> Gift Card Details</h2>

        {/* Name Input */}
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />

        {/* Email Input */}
        <input
          className="w-full p-2 border rounded mb-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />

        {/* Card Code Input */}
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          value={cardCode}
          onChange={(e) => setCardCode(e.target.value)}
          placeholder="Gift Card Code"
          required
        />

        {/* Amount Input */}
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount ($)"
          required
        />

        {/* Image Upload */}
        <input
          className="w-full p-2 border rounded mb-2"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />

         {/* Image Preview */}
         

          <button
            type="submit"
            className=" cursor-pointer w-full bg-blue-800 text-black font-bold py-2 rounded hover:bg-blue-700 hover:text-white"
            disabled={loading}
          >
              {loading ? "Submitting..." : "Submit"}
            </button>
            
          
              <a
                href={sendWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 cursor-pointer w-full block bg-green-600 text-black font-bold py-2 rounded hover:bg-green-500 hover:text-white text-center"
              >
                Submit via WhatsApp
              </a>
            
            
        </form>
      </div>
  );
};

export default GiftCardForm;
