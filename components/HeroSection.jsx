import React from "react";
import Image from "next/image";
import SideDiv from "./SideDiv";

export default function HeroSection() {
  return (
    <div className="w-[100%] bg-[#1a1a1a] flex flex-col  items-center z-50 bg-opacity-40">
      <div className="absolute bg-cover bg-center w-full h-screen bg-image opacity-50" />

      <div className="flex flex-col items-center justify-center h-screen pt-40">
        <h1 className="md:text-[50px] text-[20px] text-center tracking-widest uppercase z-10 ">
          The Home of Digital Assets
          <br /> and Disruptive Innovation
        </h1>

        <h3 className="md:text-[24px] text-[14px] text-center z-10 opacity-70 mb-8 px-5 md:px-0">
          The World’s first Private Members' Club dedicated to Web3 and the
          World’s
          <div className="md:block hidden h-1"><br/> </div> 
           first Private Members' Club to innovate NFTs as Membership
          Tokens
        </h3>
        <button className="bg-[#c5a47e]  uppercase z-10 md:w-[355px] w-max md:h-[57px] h-[40px] md:px-0 px-2 rounded-[30px]">
          <p className="z-10 md:text-[14px] text-[10px] tracking-wider font-[600] text-white">
            Enquire about membership
          </p>
        </button>
      </div>
      <SideDiv />

    
    </div>
  );
}
