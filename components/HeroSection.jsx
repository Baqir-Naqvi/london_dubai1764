import React from "react";
import Image from "next/image";
import SideDiv from "./SideDiv";

export default function HeroSection() {
  return (
    <div className="w-[100%] bg-[#1a1a1a] flex flex-col  items-center z-50 bg-opacity-40">
      <div className="absolute bg-cover bg-center w-full h-screen bg-image opacity-50" />

      <div className="flex flex-col items-center justify-center h-screen pt-40">
        <h1 className="text-[50px] tracking-widest uppercase z-10 ">
          The Home of Digital Assets
          <br /> and Disruptive Innovation
        </h1>

        <h3 className="text-[24px] z-10 opacity-70 mb-8">
          The World’s first Private Members' Club dedicated to Web3 and the
          World’s
          <br /> first Private Members' Club to innovate NFTs as Membership
          Tokens
        </h3>
        <button className="bg-[#c5a47e]  uppercase z-10 w-[355px] h-[57px] rounded-[30px]">
          <p className="z-10 text-[14px] tracking-wider font-[600] text-white">
            Enquire about membership
          </p>
        </button>
      </div>
      <SideDiv />

    
    </div>
  );
}
