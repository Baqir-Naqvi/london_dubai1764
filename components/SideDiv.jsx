import React from "react";
import InstaIcon from "@/public/Svgs/Instagram.svg";
import FbIcon from "@/public/Svgs/facebook.svg";
import BehaIcon from "@/public/Svgs/behance.svg";
import TwitterIcon from "@/public/Svgs/twitter.svg";
import Vertical from "@/public/Images/VerticalLine.png";
import SideBar from "@/public/Images/sidepng.png";
import Image from "next/image";
import Logo from "@/public/Svgs/logo.svg";
import { useGlobalContext } from "@/utils/ContextProvider";
function SideDiv() {
  const { city } = useGlobalContext();

  return (
    <>
      <Image
        height={700}
        width={120}
        src={Logo}
        alt='logo'
        className='absolute left-[30px] top-[40px] hidden md:flex cursor-pointer z-50'
        onClick={() => window.location.reload()}
      />
      <Image
        height={700}
        width={60}
        src={Logo}
        alt='logo'
        className='absolute left-[0px] top-[50px] flex md:hidden'
      />

      <Image
        height={700}
        width={55}
        src={SideBar}
        alt='mobileBar'
        className='flex absolute left-0 top-[150px] md:hidden'
      />
      <div className='hidden md:flex absolute left-0 mt-[160px] md:w-[190px] w-[30px] h-[680px] bg-black '>
        <div
          className='absolute text-center md:w-max bottom-[10px] md:left-10  -left-2 px-8 flex-col flex h-[300px] 
        justify-evenly
        '
        >
          <p className='transform -rotate-90 origin-left uppercase md:text-[10px] text-[8px] text-white font-[600] tracking-[10px] w-max'>
            1764 ,{city === "Dubai" ? "Dubai" : "by blacks london"}
          </p>

          <Image width={2} height={10} src={Vertical} alt='v_' />
          <Image
            width={20}
            height={10}
            src={InstaIcon}
            className='-ml-2'
            alt='i_'
          />
          <Image
            width={20}
            height={10}
            src={TwitterIcon}
            className='-ml-2'
            alt='t_'
          />
          <Image
            width={20}
            height={10}
            src={BehaIcon}
            className='-ml-2'
            alt='b_'
          />
          <Image
            width={10}
            height={10}
            src={FbIcon}
            className='-ml-2'
            alt='f_'
          />
        </div>
      </div>
    </>
  );
}

export default SideDiv;
