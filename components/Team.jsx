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

import M5 from "@/public/Images/M5.png";
import M6 from "@/public/Images/M6.png";
import M7 from "@/public/Images/M7.png";
import M8 from "@/public/Images/M8.png";
import Image from "next/image";
import LinkedInIcon from '@/public/Svgs/linkedin.svg'

import Feature_1 from '@/public/Images/Feature_1.png'
import Feature_2 from '@/public/Images/Feature_2.png'
import Feature_3 from '@/public/Images/Feature_3.png'
import Feature_4 from '@/public/Images/Feature_4.png'
import Feature_5 from '@/public/Svgs/Feature_5.svg'

import { useGlobalContext } from "@/utils/ContextProvider";

const Dubai_Memers = [
  {
    image: P1,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
    linkedin: "https://www.linkedin.com/in/jonathan-willis-5591291b5/",
  },
  {
    image: P2,
    name: "Veselin Velkov",
    position: "Blacks Club & 1764.io",
    linkedin: "https://www.linkedin.com/in/veselin-velkov-493977190/",
  },
  {
    image: P7,
    name: "Danny Powell",
    position: "The Labz",
    linkedin: "https://www.linkedin.com/company/thelabz/",
  },
];
const Members = [
  {
    image: P1,
    name: "Jonathan Willis",
    position: "Blacks Club & 1764.io",
    linkedin: "https://www.linkedin.com/in/jonathan-willis-5591291b5/",
  },
  {
    image: P2,
    name: "Veselin Velkov",
    position: "Blacks Club & 1764.io",
    linkedin: "https://www.linkedin.com/in/veselin-velkov-493977190/",
  },
  {
    image: P10,
    name: "Adam Leon",
    position: "Blacks Club & 1764.io",
    linkedin: "https://www.linkedin.com/in/adam-leon-74090b14/",
  },
  {
    image: P9,
    name: "Dan Collingridge-Padbury",
    position: "Blacks Club & 1764.io",
    linkedin: "https://www.linkedin.com/in/dan-collingridge-padbury/",
  },
  {
    image: M5,
    name: "Rob Gaskell",
    position: "Appold",
    linkedin: "https://www.linkedin.com/in/robgaskell/",
  },
  {
    image: M6,
    name: "Justin Thorogood",
    position: "CMO, Alteri-Enigma & YC Capital",
    linkedin: "https://www.linkedin.com/in/justinthorogood/",
  },
  {
    image: M7,
    name: "Jenny Knott",
    position: "FinTech Advisory",
    linkedin: "https://www.linkedin.com/in/jenny-knott-fcca-29185710/",
  },
  {
    image: M8,
    name: "Chris Mason",
    position: "InCryptoHub & JadeVault",
    linkedin: "https://www.linkedin.com/in/cvmason/",
  },

  {
    image: P8,
    name: "Jason Tucker-Feltham",
    position: "Global Head of Crypto & Fintech - IDnow",
    linkedin: "https://www.linkedin.com/in/jacecrypto/",
  },

  {
    image: P4,
    name: "Ché L Feenie",
    position: "Migrant Help",
    linkedin: "https://www.linkedin.com/in/ch%C3%A9-l-f-29304b15/",
  },
  {
    image: P5,
    name: "Adam Funnell",
    position: "Accubits",
    linkedin: "https://www.linkedin.com/in/techandinnovations/",
  },
  {
    image: P6,
    name: "Shelley Schachter-Cahm",
    position: "CEX.io",
    linkedin: "#",
  },
  {
    image: P3,
    name: "Simon Smith",
    position: "Excalibur.FM",
    linkedin: "https://www.linkedin.com/in/simon-smith-a860885/",
  },
  {
    image: P7,
    name: "Danny Powell",
    position: "The Labz",
    linkedin: "https://www.linkedin.com/company/thelabz/",
  },
];

const FeaturesArray = [
  Feature_1,
  Feature_2,
  Feature_3,
  Feature_5,
  Feature_4,
];
const ProfileCard = ({ image, name, position, linkedin }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] md:mx-2">
      <div className="bg-[#c5a47e] w-[302px] h-[302px]">
        <Image
          className="absolute pl-2 pt-2 hover:cursor-pointer z-10"
          src={LinkedInIcon}
          height={60}
          width={50}
          alt="LinkedIn"
          onClick={() => {
            window.open(linkedin);
          }}
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
      <h3 className="text-white text-[20px] font-bold mt-1">{name}</h3>
      <p className="text-white  text-center text-[18px] opacity-60 font-normal">
        {position}
      </p>
    </div>
  );
};

function Team() {
  const { city } = useGlobalContext();
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
          {city === "Dubai"?
    (
      Dubai_Memers.map((item, index) => {
        return (
          <ProfileCard
            key={index}
            image={item.image}
            name={item.name}
            position={item.position}
            linkedin={item.linkedin}
          />
        );
          })

    ):(Members.map((item, index) => {
      return (
        <ProfileCard
          key={index}
          image={item.image}
          name={item.name}
          position={item.position}
          linkedin={item.linkedin}
        />
      );
    }))}
        </div>

        <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
          as <span className="text-[#c5a47e]">featured</span>
        </h2>

      

        <div className="flex md:flex-row flex-wrap gap-10 justify-center items-center mt-20">

          {FeaturesArray.map((item,index)=>{
            return(
              <div key={index} className=" w-[250px]">
                <Image
                  src={item}
                  alt="Feature"
                  height={300}
                  width={300}
                 
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
