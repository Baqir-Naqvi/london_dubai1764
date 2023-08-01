import React from "react";
import A1 from "@/public/Images/Layer_15.png";
import A2 from "@/public/Images/Layer16.png";
import A3 from "@/public/Images/Layer17.png";
import A4 from "@/public/Images/Layer_18.png";
import A5 from "@/public/Images/Layer_19.png";
import A6 from "@/public/Images/Layer20.png";
import A7 from "@/public/Images/Layer_21.png";
import Image from "next/image";

const Assoications = [
  { name: A1, size: 300, url: "https://partner.bybit.com/b/blacksclub" },
  {
    name: A2,
    size: 170,
    url: "https://revolutbusiness.ngih.net/c/4470266/1582434/9943",
  },
  { name: A3, size: 250, url: "https://aspreystudio.com/home.html" },
  { name: A4, size: 170, url: "https://the-labz.com/" },
  { name: A5, size: 300, url: "https://www.appold.com/" },
  { name: A6, size: 300, url: "https://www.incryptohub.com" },
  { name: A7, size: 300, url: "https://theharleywellnessclub.com" },
];
function Association() {
  return (
    <>
      <div className='flex bg-black flex-col justify-center items-center pt-20 '>
        <h2 className=' uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white md:mt-[100px] md:flex flex-grow'>
          in <span className='text-[#c5a47e] mx-5'>Association</span> with
        </h2>
        <div className='flex md:flex-row flex-col  justify-evenly items-center flex-wrap  md:w-[90%]'>
          {Assoications.map((item, index) => {
            return (
              <div key={index} className='cursor-pointer'>
                <Image
                  src={item.name}
                  alt='Feature'
                  height={200}
                  width={item.size * 0.5}
                  className='md:mx-10 mt-10'
                  onClick={() => window.open(item.url, "_blank")}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Association;
