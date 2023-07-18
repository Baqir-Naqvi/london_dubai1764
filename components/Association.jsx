import React from 'react'
import A1 from '@/public/Images/Layer_15.png'
import A2 from '@/public/Images/Layer_16.png'
import A3 from '@/public/Images/Layer_17.png'
import A4 from '@/public/Images/Layer_18.png'
import A5 from '@/public/Images/Layer_19.png'
import A6 from '@/public/Images/Layer_20.png'
import A7 from '@/public/Images/Layer_21.png'
import Image from 'next/image'


const Assoications = [
  { name: A1, size: 300 },
  { name: A2, size: 170 },
  { name: A3, size: 250 },
  { name: A4, size: 170 },
  { name: A5, size: 300 },
  { name: A6, size: 300 },
  { name: A7, size: 300 },
];
function Association() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 ">
        <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white mt-[100px]">
          in <span className="text-[#c5a47e]">Association</span> with
        </h2>
        <div className="flex md:flex-row flex-col  justify-evenly items-center flex-wrap  md:w-[90%]">
          {Assoications.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item.name}
                  alt="Feature"
                  height={200}
                  width={item.size}
                  className="md:mx-10 mt-10"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Association