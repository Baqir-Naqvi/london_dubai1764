import React from "react";
import InstaIcon from "@/public/Svgs/Instagram.svg";
import Whatsapp_Logo from "@/public/Svgs/Whatsapp_Logo.svg";
import LinkedInIcom from "@/public/Images/LinkedIn.svg";
import TwitterIcon from "@/public/Svgs/twitter.svg";
import Vertical from "@/public/Images/VerticalLine.png";
import SideBar from "@/public/Images/sidepng.png";
import Image from "next/image";
import Logo from "@/public/Images/logo.png";
import { useGlobalContext } from "@/utils/ContextProvider";
function SideDiv() {
  const { city } = useGlobalContext();
  const whatsapplink =
    city === "Dubai"
      ? "https://chat.whatsapp.com/HXJedimHaF18ceRdNJSDPM"
      : "https://chat.whatsapp.com/LqpcygwdEYkFUYnHb74awB";

  const instaLink =
    city === "Dubai"
      ?"https://instagram.com/club.1764?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
      :"https://www.instagram.com/blacksclubsoho/"

  return (
    <>
      <Image
        height={700}
        width={140}
        src={Logo}
        alt="logo"
        className="absolute left-[30px] top-[40px] hidden md:flex cursor-pointer z-50"
        onClick={() => window.location.reload()}
      />
      <Image
        height={700}
        width={60}
        src={Logo}
        alt="logo"
        className="absolute left-[0px] top-[50px] flex md:hidden z-50"
        onClick={() => window.location.reload()}
      />

      <Image
        height={700}
        width={60}
        src={SideBar}
        alt="mobileBar"
        className="flex absolute left-0 top-[150px] md:hidden"
      />
      <div className="hidden md:flex absolute left-0 mt-[160px] md:w-[190px] w-[30px] h-[85vh] bg-black ">
        <div
          className="absolute text-center md:w-max bottom-[10px] md:left-10  -left-2 px-8 flex-col flex h-[40%]  
        justify-evenly
        "
        >
          <p className="transform -rotate-90 origin-left uppercase md:text-[10px] text-[8px] text-white font-[600] tracking-[10px] w-max">
            1764 -{city === "Dubai" ? "Dubai" : "by blacks, london"}
          </p>

          <Image width={2} height={10} src={Vertical} alt="v_" />
          <Image
            width={20}
            height={10}
            src={InstaIcon}
            className="-ml-2 hover:cursor-pointer"
            alt="i_"
            onClick={() => window.open(instaLink)}
          />
          <Image
            width={20}
            height={10}
            src={TwitterIcon}
            className="-ml-2 hover:cursor-pointer"
            alt="t_"
            onClick={() => window.open("https://twitter.com/CryptoClubGBL")}
          />
          <Image
            width={25}
            height={10}
            src={Whatsapp_Logo}
            className="-ml-2 hover:cursor-pointer"
            alt="f_"
            onClick={() => window.open(whatsapplink)}
          />
          <Image
            width={25}
            height={10}
            src={LinkedInIcom}
            className="-ml-3 hover:cursor-pointer"
            alt="f_"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jonathan-willis-5591291b5/"
              )
            }
          />
        </div>
      </div>
    </>
  );
}

export default SideDiv;
