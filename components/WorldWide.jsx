import React from 'react'
import Image from 'next/image';
import Ellipse from '@/public/images/Ellipse.png'
import Active from '@/public/images/Active.png'


function WorldWide() {
  return (
    <div className='my-5 h-[160vh]'>
      <h1 className="text-[#c5a47e] text-9xl font-bold tracking-widest text-center absolute left-[10px] mt-[220px] opacity-10 ">
        venues
      </h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
          we are <span className="text-[#c5a47e]">WorldWide</span>
        </h2>

        <div className="bg-world-map bg-center w-[90%] h-screen">
          <Image
            src={Ellipse}
            alt="Ellipse"
            height={20}
            width={20}
            className="custom-shadow relative top-[40%] left-[27%] hover:animate-pulse cursor-pointer"
          />
          <Image
            src={Ellipse}
            alt="Ellipse"
            height={20}
            width={20}
            className="custom-shadow relative top-[45%] left-[24%] hover:animate-pulse cursor-pointer"
          />
          <Image
            src={Ellipse}
            alt="Ellipse"
            height={20}
            width={20}
            className="custom-shadow relative top-[35%] left-[43%] hover:animate-pulse cursor-pointer"
          />
          <Image
            src={Ellipse}
            alt="Ellipse"
            height={20}
            width={20}
            className="custom-shadow relative top-[41%] left-[59%] hover:animate-pulse cursor-pointer"
          />
          <Image
            src={Ellipse}
            alt="Ellipse"
            height={20}
            width={20}
            className="custom-shadow absolute right-[23%] bottom-[32%] hover:animate-pulse cursor-pointer"
          />
          <Image
            src={Active}
            alt="Active"
            height={20}
            width={20}
            className="custom-shadow absolute left-[45%] top-[32%] hover:animate-pulse cursor-pointer"
          />
          <Image
            src={Active}
            alt="Active"
            height={20}
            width={20}
            className="custom-shadow absolute right-[37%] top-[53%] hover:animate-pulse cursor-pointer"
          />

          <div className="w-[1030px] flex flex-col justify-left items-left ml-[50px] mt-[24rem] ">
            <h1 className="text-white text-[42px] font-[500]  leading-[1] my-10">
              Our vision is to quickly scale the <br />
              concept by launching affiliate venues
            </h1>

            <p className="text-[22px] text-white opacity-60 mt-10">
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

          <div className="flex flex-row w-full justify-content justify-end h-max ">
            <h1 className="text-white text-[42px] font-[500]  leading-[1] my-10 text-right mr-10">
              Importantly, we promote inclusivity <br />
              instead of exclusivity
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldWide