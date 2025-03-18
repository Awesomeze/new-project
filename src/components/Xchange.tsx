import { useState } from "react"


const Xchange = () => {
   const [amount, setamount] = useState<number|"">("")
   const [selectedCard, setselectedCard] = useState("Amazon")
   const [showDropdown, setshowDropdown] = useState(false)
   
   const xchangeRate: Record<string, number> ={
    AppleiTunes:1400,
    eBay: 1300,
    Walmart: 1380,
    Nike: 1800,
    AmericanExpress: 1600,
    GooglePlay: 1420,
    Sephora: 1500,
    Steam: 1550,
    RazerGold: 1200,
    Amazon: 1500

   };

   const cards = Object.keys(xchangeRate);
   const convertedAmount= amount ? (amount * xchangeRate[selectedCard]).toLocaleString("en-US", {minimumFractionDigits: 2}): "0";
 

  return (
    <div className="flext flex-col w-full h-full">
    <div className="flex justify-center item-center absolute top-[33%]  right-[60%]">
          <h2 className=" md:text-3xl text-white text-2xl font-bold font-[circularWeb]"><span className="text-4xl font-[regular]">X</span>rate</h2>
          </div>
          <div className=" h-8 w-63 text-blue-950 item-center justify-center font-bold absolute flex top-[51%] md:top-[50%] right-[39%] md:right-[53.5%]">
          <input 
          className="focus-ring  bg-white/50  p-2 px-4 border rounded-lg "
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setamount(e.target.value ? parseFloat(e.target.value): "")}

           />
            </div>
           <div  className=" z-10 flex flex-col  rounded-2xl bg-yellow-400 absolute  flex top-[43%] right-[40%] md:right-[54%]">
            <button
            className=" justify-center font-bold h-8 w-60 cursor-pointer "
            onClick={() => setshowDropdown(!showDropdown)}>
                <span>{selectedCard} 🔻</span></button>

            {showDropdown && (
                <ul>
                    {cards.map((cards)=> (
                        <li
                        key={cards}
                        onClick={() => {
                            setselectedCard(cards)
                            setamount("")
                            setshowDropdown(false)
                        }}
                        className="hover:bg-white/40 cursor-pointer p-1 cusor-pointer overflow-hidden"
                        >
                            {cards}
                        </li>
                    ))}
                </ul>

            )}
           </div>
           <div  className=" flex overflow-hidden h-8 w-60 bg-white/50 border-1 border-white rounded-xl px-3 py-2 md:py-1/2 md:px-5 text-red-950 font-bold md:text-xl absolute flex md:top-[43%] top-[59%] right-[40%] md:right-[30%]">
           {amount !== "" && (
            <p className="justify-center object-contain item-center">
                <span>N {convertedAmount}</span>
            
            </p>

            
           )}
          
          </div>
         </div>
  )
}

export default Xchange