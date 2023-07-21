import React, { useState } from "react";
import Image from "next/image";
import Ellipse from "@/public/Images/Ellipse.png";
import Active from "@/public/Images/Active.png";

function WorldWide() {
  const [showDubai, setShowDubai] = useState(false);
  const [showLondon, setShowLondon] = useState(false);
  return (
    <div className='mb-[50px]'>
      <h1 className='text-[#c5a47e] md:flex hidden text-9xl font-bold tracking-widest text-center absolute left-[10px] mt-[220px] opacity-10 '>
        venues
      </h1>
      <div className='flex flex-col justify-center items-center md:mt-10'>
        <h2 className=' uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 '>
          we are <span className='text-[#c5a47e]'>WorldWide</span>
        </h2>

        <div className='bg-world-map bg-center w-[90%] h-screen md:mt-0 -mt-40'>
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={20}
            width={20}
            className='custom-shadow relative top-[40%] left-[27%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={20}
            width={20}
            className='custom-shadow relative top-[45%] left-[24%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={20}
            width={20}
            className='custom-shadow relative top-[35%] left-[43%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={20}
            width={20}
            className='custom-shadow relative top-[41%] left-[59%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={20}
            width={20}
            className='custom-shadow absolute right-[23%] bottom-[32%] hover:animate-pulse cursor-pointer'
          />

          <div
            className={`absolute left-[42.8%] top-[18%] px-2 flex-col transition-all duration-500 pt-2  map-card flex justify-start p-1 ${
              showLondon ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className='mb-2'>
              <span className='capitalize font-medium text-sm tracking-wider '>
                LONDON
              </span>
              <hr />
            </div>

            <span className='tracking-wider text-[.6rem] text-white'>
              67 Dean St London WID 4QH
            </span>
          </div>

          <Image
            onPointerEnter={() => setShowLondon(true)}
            onPointerLeave={() => setShowLondon(false)}
            src={Active}
            alt='Active'
            height={20}
            width={20}
            className='custom-shadow absolute left-[45%] top-[32%] hover:animate-pulse cursor-pointer'
          />

          <div
            className={`absolute right-[34.5%] top-[39%] transition-all duration-500  map-card flex justify-center p-1 ${
              showDubai ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className='capitalize text-sm font-medium tracking-wider'>
              DUBAI
            </span>
          </div>

          <Image
            src={Active}
            alt='Active'
            height={20}
            width={20}
            onPointerEnter={() => setShowDubai(true)}
            onPointerLeave={() => setShowDubai(false)}
            className='custom-shadow absolute right-[37%] top-[53%] hover:animate-pulse cursor-pointer show-on-hover'
          />

          <div className='md:w-[1030px] flex flex-col justify-left items-left md:ml-[50px] mt-[24rem] '>
            <h1 className='text-white md:text-[42px] text-[24px] font-[500]  leading-[1] '>
              Our vision is to quickly scale the <br />
              concept by launching affiliate venues
            </h1>

            <p className='md:text-[22px] text-[14px] text-white opacity-60 mt-10'>
              Venues which share the same ethos and are dedicated to the same
              sector in major cities across the globe, starting with Dubai and
              then adding Stockholm, Singapore, Miami, New York, Riyadh, Abu
              Dhabi, Qatar & Lisbon, with the ultimate aim to have physical
              clubs in every major city across the globe. Our proprietary
              token-gated platform bridges the geographical divide between each
              clubhouse and its associated membership, whilst providing an
              online/virtual membership option for those not located near to a
              physical venue. <br /> <br />
              In addition to providing permanent physical spaces for members to
              use for work & play, collaboration & networking, the club seeks to
              develop a host of innovative products and services to further
              support individuals, companies, communities, regulators and
              governments to drive disruptive technology forward collectively
              towards mass adoption.
            </p>
          </div>

          <div className='flex flex-row w-full justify-content justify-end h-max '>
            <h1 className='text-white md:text-[42px] text-[24px] font-[500]  leading-[1] my-10 text-right md:mr-10'>
              Importantly, we promote inclusivity <br />
              instead of exclusivity
            </h1>
          </div>
        </div>
      </div>
      <h1 className='text-[#c5a47e] md:flex hidden md:text-9xl font-bold tracking-wider absolute mt-[4.7em] right-[1em] opacity-10 ' id="faq">
        faqs
      </h1>
    </div>
  );
}

export default WorldWide;
