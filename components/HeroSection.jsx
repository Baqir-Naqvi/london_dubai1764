import React from "react";
import Image from "next/image";
import SideDiv from "./SideDiv";
import { useGlobalContext } from "@/utils/ContextProvider";
import { Parallax } from "react-scroll-parallax";

export default function HeroSection() {
  const { city } = useGlobalContext();

  return (
    <div className="w-[100%] bg-[#131313] flex flex-col  items-center bg-opacity-0">
      {city === "Dubai" ? (
        <div className="absolute bg-cover bg-center w-full h-screen bg-dubai opacity-50" />
      ) : (
        <div className="absolute bg-cover bg-center w-full h-screen bg-image opacity-50" />
      )}

      <div className="flex flex-col items-center justify-center h-screen pt-40 z-30">
        <Parallax translateY={20} speed={-20}>
          <h1
            className="md:text-[50px] text-[20px] text-center tracking-widest uppercase z-30
        leading-none
         "
          >
            {city === "Dubai" ? "Dubai’s" : "London’s"} Home of Digital Assets{" "}
            <br />
            and Disruptive Innovation
          </h1>
        </Parallax>

        {city === "Dubai" ? (
          
            <Parallax translateY={20} speed={-20} >
          <h3 className="md:text-[24px] text-[12px] text-center  opacity-60 mb-8 px-12 md:px-0 mt-5 leading-none z-30">
            Dubai’s first Private Members' Club dedicated to Crypto, NFTs, Web3,
            DeFi & Tech. <br/>Innovated by London’s first Private Members' Club
            devoted to the space.<br/> By those who pioneered NFTs as Membership
            Tokens
          </h3>
          </Parallax>
        ) : (
            <Parallax translateY={20} speed={-20} >
          <h3 className="md:text-[24px] text-[12px] text-center z-10 opacity-60 mb-8 px-12 md:px-0 mt-5 leading-none">

            The World’s first Private Members' Club dedicated to Web3 and the
            World’s
            
            <div className="md:block hidden h-1">
              <br />{" "}
            </div>
            
            first Private Members' Club to innovate NFTs as Membership Tokens
          </h3>
          </Parallax>
        )}
            <Parallax translateY={20} speed={-20} >
        <button className="bg-[#c5a47e]  uppercase z-10 md:w-[355px] w-max md:h-[57px] h-[40px] md:px-0 px-2 rounded-[30px]">
          <p className="z-10 md:text-[14px] text-[10px] tracking-wider font-[600] text-white">
            
            Enquire about membership
          </p>
        </button>
        </Parallax>
      </div>
      <SideDiv />
    </div>
  );
}
