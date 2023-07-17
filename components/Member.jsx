import React from 'react'
import Image from 'next/image'
import aboutDiamond from '@/public/Images/AboutDiamond.png'

function Member() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
        become a <span className="text-[#c5a47e]">Member</span>
      </h2>
      <Image width={700} height={300} src={aboutDiamond} />

      <h3 className="text-[30px] mt-5 mb-10 font-[600]">
        limited to <span className="text-[#c5a47e]">1000</span>
      </h3>
      <p className='text-white text-center opacity-60 md:text-[22px] text-[14px] md:w-[800px]'>
        Your Diamond Lifetime Membership NFT provides unlimited access to Blacks
        in Soho, London. It’s your 21st Century membership card. By contrast to
        all other private members’ clubs, which charge a considerable
        non-refundable joining fee, your membership is tradable and never
        represents a sunk cost.
      </p>
    </div>
  );
}

export default Member