

const WhatsApp = () => {
   
        const whatsappURL = `https://wa.me/+2349095942976`;
      
        return (
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10  text-white flex flex-col items-center rounded-lg "
          >
            <img src="./Vector@2x.svg" alt="" />
          </a>
        );
      };
      
      
      
export default WhatsApp