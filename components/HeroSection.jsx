import React from "react";
import Image from "next/image";
import SideDiv from "./SideDiv";
import { useGlobalContext } from "@/utils/ContextProvider";
import { Parallax } from "react-scroll-parallax";
import { useEffect } from "react";

export default function HeroSection() {
  const { city } = useGlobalContext();
  useEffect(() => {
    scrollTo(100, 0);
  }, [city]);

  return (
    <div className='w-[100%] bg-[#131313] flex flex-col  items-center bg-opacity-0'>
      {city === "Dubai" ? (
        <div className='absolute bg-cover bg-center w-full h-screen bg-dubai opacity-50' />
      ) : (
        <div className='absolute bg-cover bg-center w-full h-screen bg-image opacity-50' />
      )}

      <div className='flex flex-col items-center justify-center h-screen pt-40 z-30'>
        <Parallax translateY={20} speed={-20}>
          <h1
            className='md:text-[48px]  w-[70%] md:w-full mx-auto text-[20px] text-center tracking-[10px] uppercase z-30
        leading-[1.1] font-[400]
         '
          >
            {city === "Dubai" ? "Dubai’s" : "London’s"} Home of Digital Assets{" "}
            <br />
            and Disruptive Innovation
          </h1>
        </Parallax>

        {city === "Dubai" ? (
          <Parallax translateY={20} speed={-20}>
            <h3 className='md:text-[24px]  font-montserrat text-[12px] text-center  opacity-90 px-12 md:px-0 md:leading-8 z-30'>
              Dubai’s first Private Members' Club dedicated to Crypto, NFTs,
              Web3, DeFi & Tech. <br />
              Innovated by London’s first Private Members' Club devoted to the
              space.
              <br /> By those who pioneered NFTs as Membership Tokens.
              <br />
              Proud Owners/Custodians of Blacks Club, London (est. 1764),
              London’s premier
              <br />
              Community Hub for Web3 & Tech Professionals & Enthusiasts.
              <br />
              Our First Satellite to Open in Dubai 2023
              <br />
              As part of our Global Expansion
            </h3>
          </Parallax>
        ) : (
          <Parallax translateY={20} speed={-20}>
            <h3 className='md:text-[22px] font-montserrat font-[100]  text-[12px] text-center z-10 px-12 md:px-0 leading-none'>
              The World’s first Private Members' Club dedicated to Web3 and the
              World’s
              <div className='md:block hidden h-1'>
                <br />{" "}
              </div>
              first Private Members' Club to innovate NFTs as Membership Tokens.
            </h3>
          </Parallax>
        )}
      </div>
      <SideDiv />
    </div>
  );
}
