import React from "react";

export default function ChooseCity({ chooseCityRef }) {
  return (
    <div
      ref={chooseCityRef}
      className='h-[50vh]  relative w-full hidden flex-row  justify-between items-center'
    >
      <div className='h-full absolute left-0 flex items-end justify-start w-[25%] p-16  z-20 left-triangle   bg-[#C5A47E]'>
        <span className='text-white text-[1.5rem] leading-8 text-center uppercase tracking-wider hover:scale-110 cursor-pointer transition-all duration-500'>
          Enter <br />
          <span className='text-[2.5rem] text-center '>Dubai</span>
        </span>
      </div>
      <div className='mx-auto w-[80%] flex flex-col h-full items-center pb-30 justify-around text-white p-6'>
        <span className='uppercase text-[1.8rem] tracking-widest'>
          The Home of Digital Assets and Disruptive Innovation
        </span>
        <span className='w-[60%] text-center text-[.9rem] text-gray-400'>
          The World's first Private Members' Club dedicated to Web3 <br /> The
          World's first Private Members' Club to innovate NFTs as Membership
          Tokens <br /> Proud Owner of Blacks Club, Soho, London (est. 1764){" "}
          <br />
          London's premier Community Hub for Web3 & Tech Professionals &
          Enthusiasts <br />
          Our First Satellite to Open in Dubai 2023
        </span>
        <span className='italic text-[1.1rem]'>
          And then Expand Globally allows us to raise your project to a higher
          level.
        </span>
      </div>
      <div className='h-full flex items-end justify-end p-16 absolute w-[25%] right-0  z-20 right-triangle bg-[#C5A47E] '>
        <span className='text-white text-[1.5rem] leading-8 text-center uppercase tracking-wider hover:scale-110 cursor-pointer transition-all duration-500'>
          Enter <br />
          <span className='text-[2.5rem] text-center '>London</span>
        </span>
      </div>
    </div>
  );
}
