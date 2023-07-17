import React from "react";
import P1 from "@/public/Images/P1.png";
import P2 from "@/public/Images/P2.png";
import P3 from "@/public/Images/P3.png";
import P4 from "@/public/Images/P4.png";
import P5 from "@/public/Images/P5.png";
import P6 from "@/public/Images/P6.png";
import P7 from "@/public/Images/P7.png";
import P8 from "@/public/Images/P8.png";
import P9 from "@/public/Images/P9.png";
import P10 from "@/public/Images/P10.png";
import Image from "next/image";
import LinkedInIcon from '@/public/Svgs/linkedin.svg'

import Feature_1 from '@/public/Svgs/Feature_1.svg'

const Members = [
  {
    image: P1,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P2,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P3,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P4,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P5,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P6,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P7,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P8,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P9,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
  {
    image: P10,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
  },
];

const FeaturesArray=[
  '@public/Svgs/Feature_1.svg',
  '@public/Svgs/Feature_1.svg',
  '@public/Svgs/Feature_1.svg',
  '@public/Svgs/Feature_1.svg',
  '@public/Svgs/Feature_1.svg',

]
const ProfileCard = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] md:mx-2">
      <div className="bg-[#c5a47e] w-[302px] h-[302px]">
        <Image
          className="absolute pl-2 pt-2 hover:cursor-pointer z-10"
          src={LinkedInIcon}
          height={60}
          width={50}
          alt="LinkedIn"
        />
        <Image
          src={image}
          alt={name}
          height={300}
          width={300}
          className="
        relative -left-1 bottom-[4px]
        "
        />
      </div>
      <h3 className="text-white text-2xl font-bold">{name}</h3>
      <p className="text-white text-[18px] opacity-60 font-normal">
        {position}
      </p>
    </div>
  );
};

function Team() {
  return (
    <>
      <h1 className="text-[#c5a47e] md:flex hidden md:text-9xl font-bold  text-center tracking-wider absolute right-[10px] mt-[200px] opacity-10 ">
        founders
      </h1>
      <div className="flex flex-col items-center justify-center h-max bg-black mt-[0px]">
        <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
          our <span className="text-[#c5a47e]">team</span>
        </h2>

        {/* Profile Cards Container  */}

        <div className="flex flex-wrap gap-10 justify-center items-center mt-20">
          {Members.map((item, index) => {
            return (
              <ProfileCard
                key={index}
                image={item.image}
                name={item.name}
                position={item.position}
              />
            );
          })}
        </div>

        <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
          as <span className="text-[#c5a47e]">featured</span>
        </h2>

      

        <div className="flex flex-wrap gap-10 justify-center items-center mt-20">

          {FeaturesArray.map((item,index)=>{
            return(
              <div key={index} className="bg-[#fff] w-[302px]">
                <Image
                  src={Feature_1}
                  alt="Feature"
                  height={300}
                  width={300}
                  className="
                relative -left-1 bottom-[4px]
                "
                />
              </div>
            )
          } 
          )}
          
      </div>
    </div>
    </>
  );
}

export default Team;
