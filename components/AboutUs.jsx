import React, { useEffect, useRef } from "react";
import Image from "next/image";
import GalleryImage from "@/public/Images/gallery.png";
import DubaiGalleryImage from "@/public/Images/Dubai_GalleryImage.png";
import { useGlobalContext } from "@/utils/ContextProvider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Parallax } from "react-scroll-parallax";
import Aos from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);

export default function () {
  const { city } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className='welcome-text-about flex flex-col items-center justify-center h-max bg-black md:pt-[80px] pt-10'
      id='about'
    >
      <div>
        <Parallax translateY={-5} speed={-10}>
          {" "}
          <h2 className=' text-[#c5a47e]  md:text-[140px] md:flex hidden absolute font-bold text-center  md:-left-[28rem] mt-[50px] opacity-10'>
            welcome
          </h2>
        </Parallax>

        <h2 className=' uppercase font-oswald md:text-[54px] text-[24px] font-normal tracking-[12px] text-center text-white'>
          Welcome to <span className='text-[#c5a47e]'>1764</span>
        </h2>
      </div>

      <div className='flex md:flex-row flex-col items-center pt-[120px] md:w-[1050px]'>
        <div className='flex flex-col  items-center justify-center md:w-max'>
          <Parallax translateY={5} speed={-20}>
            <p className='text-[#FEFEFE] md:text-[42px] text-[22px] font-[500] absolute md:mb-[250px] mb-[210px] md:-ml-[210px]  -ml-[180px] leading-[1.1] w-max '>
              A modern twist to the traditional
              <br /> private members' club
            </p>
          </Parallax>

          <p className='text-[#FEFEFE] md:text-[22px] text-[14px] font-[400] opacity-80 leading-[1] md:w-[420px] w-[100%] md:mt-[80px] mt-[10px] md:px-0 px-3'>
            As the proud Owner of Blacks Club, Soho, London (est. 1764) we are
            London’s premier Community Hub for Web3 & Tech Professionals &
            Enthusiasts with our First Satellite to Open in Dubai 2023.
          </p>
        </div>
        {city === "Dubai" ? (
          <Image
            width={776}
            height={401}
            src={DubaiGalleryImage}
            alt='AboutUS'
          />
        ) : (
          <Image width={776} height={401} src={GalleryImage} alt='AboutUS' />
        )}
      </div>

      {/* Lower Section */}
      <div
        className='nasa-bg-image bg-cover bg-center  bg-image md:mt-[30px]'
        id='ourstory'
      >
        <h2 className=' font-oswald uppercase md:text-[35px]  text-[24px] font-normal tracking-[10px] text-center text-white md:mt-20 mt-10 '>
          Our<span className='text-[#c5a47e] ml-5'>Story</span>
        </h2>

        <div>
          <Parallax translateY={-5} speed={-10}>
            <h2 className='text-[#c5a47e] md:flex hidden  md:text-[140px]  font-bold text-center absolute right-[50px] opacity-10 pt-20'>
              our story
            </h2>
          </Parallax>
        </div>

        {city === "Dubai" ? (
          <h2 className='text-white md:text-[42px] text-[24px] font-[500] text-center leading-[1] my-10'>
            Soon, we are to open our first satellite, in Dubai, as part
            <br /> of a global roll-out plan of the now-proven concept.
          </h2>
        ) : (
          <h2 className='text-white md:text-[42px] text-[24px] font-[500] text-center leading-[1] my-10'>
            The UK's first venue dedicated to <br /> supporting the tech sector
          </h2>
        )}

        {/* text container */}
        <div className='md:px-[10%]  items-center '>
          <p className='md:text-[22px] md:mt-[70px] text-[14px] text-white opacity-80 font-[100] md:text-center md:px-0 px-3'>
            In November 2021 we embarked on a mission to add a modern twist to
            the traditional private members' club, <br /> by launching the UK's
            first venue dedicated to supporting the tech sector, where founders,
            developers, investors, professionals and enthusiasts could network,
            collaborate and socialise around all things Blockchain, DeFi,
            Crypto, NFTs, Web3, AI & Tech.
          </p>

          <div
            data-aos='fade-up'
            className=' flex md:flex-row flex-col justify-center md:mt-20 mt-10 md:px-0 px-3'
          >
            <p
              className='md:text-[22px] text-[14px] text-white opacity-80
              '
            >
              In May 2022 we purchased Blacks Club{" "}
              <span
                className='cursor-pointer'
                onClick={() => {
                  // open new tab on click
                  window.open("https://www.blacksclub.com", "_blank");
                }}
              >
                (www.blacksclub.com)
              </span>{" "}
              , which could not possibly be a more perfect flagship. This
              vibrant and historic private members’ club, located at 67 Dean
              Street in Soho, London, was formed to be the antithesis of the
              traditional London gentlemen’s clubs and is steeped in
              anti-establishment history.
            </p>

            <p className='md:text-[22px] text-[14px] text-white opacity-80 md:pl-[40px] md:mt-0 mt-10'>
              The home of Charles Fortnum (of Fortnum & Mason), <br />
              it’s where the first Supper Clubs were established (by Samuel
              Johnson, Joshua Reynolds & David Garrick) and was a hang-out of
              the suffragette movement in the 19th Century. Since 1764, it has
              always been a venue where innovators, contrarians, pioneers and
              disruptors assemble and has now firmly moved into the 21st Century
              with a new focus, affiliating those <br />
              involved in emerging technologies.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center px-3 md:px-0  md:mt-[50px]'>
            {city != "Dubai" ? (
              <h2 className='text-white md:text-[38px] text-[16px] font-normal md:font-[500] text-center leading-[1] my-10'>
                Inclusion is via the ownership of one of the club’s 3,500
                <br />
                Membership NFTs, which bestow the possessor with
                <br /> lifetime membership of Blacks. By contrast to all other
                <br /> private members’ clubs, membership is tradable and <br />{" "}
                never represents a sunk cost.
              </h2>
            ) : (
              <h2 className='text-white md:text-[38px] text-[16px] font-normal md:font-[500] text-center leading-[1] my-10'>
                Inclusion is via the ownership of one of the club's Membership
                NFTs, which bestow the possessor with lifetime membership of
                1764 Dubai. By contrast to all other private members’ clubs,
                membership is tradable and never represents a sunk cost.
              </h2>
            )}

            <button className='bg-[#c5a47e]  uppercase z-10 md:w-[355px] w-full h-[57px] rounded-[30px] md:mt-[30px] '>
              <p className='z-10 text-[14px] tracking-wider font-[600] text-white'>
                Enquire about membership
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
