"use client";
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "@/utils/ContextProvider";

function FAQs() {
  const [active, setActive] = useState(null);
  const { city } = useGlobalContext();
  const londonQuestions = [
    {
      q: "Why is this needed?",
      a: "Before we purchased Blacks and proved the model, there were no such clubs around the world dedicated to the space, let alone a global network of them. We strongly feel that the digital assets & disruptive innovation communities both need and deserve permanent venues. Our aim is to create a worldwide community of physical and virtual venues, where enthusiasts who share an interest in the space can socialise and network, meet like-minded individuals, engage and present, offer collaborations, get funded, become educated, provide instruction and guidance and share valuable information and knowledge. Its virtual and physical spaces offer the ideal environment and opportunity for members to interact face-to-face, to share their ideas and work together on future projects, creating entities greater than the sum of their parts.",
    },
    {
      q: "Why should I buy an NFT?",
      a: " Originated by us ahead of anyone globally, it’s your 21st Century membership card. It represents access to the respective physical clubhouse for as long as you own it. By contrast to all other private members’ clubs, which charge a considerable non-refundable joining fee, your membership is tradable and never represents a sunk cost.",
    },
    {
      q: "How many NFTs are in the collection? ",
      a: " There are 3,500 memberships available to Blacks Club. It is important to us to ensure we have enough members to add real value to the community, without having so many that the exclusivity of being a member is diluted. Once memberships are sold out, the only way to become a member is to purchase one on the secondary market, whenever any become available. ",
    },
    {
      q: "Where are the NFTs listed? ",
      a: " As an Ethereum-based collection, Dubai NFTs are listed on LooksRare & OpenSea, which are the largest NFT marketplaces, with arguably the easiest user interface to buy and sell. ",
    },
    {
      q: "How long will it take to open other clubhouses across the globe? ",
      a: " We opened our London flagship club, Blacks, in May 2022, which was 7 months ahead of schedule. Our current plan is to open in Dubai in October 2023 and possibly also Stockholm and roll-out further, more quickly through 2024 and beyond.",
    },
    {
      q: "What are the main benefits of being a member of Blacks, Soho? ",
      a: " To join a fraternity of the smartest minds and most successful business people in the space today. We have already witnessed multiple ventures launched, capital raised, folk recruited and collaborations achieved all within the confines of the club, between people who might well have never otherwise met. A phenomenal amount of opportunities exist within the club and its membership for personal/career development and business expansion. ",
    },
    {
      q: "Do you accept payments for all services and membership in crypto? ",
      a: " Yes. Blacks Club became the first private members’ club in the world to accept Bitcoin as payment.",
    },
  ];

  const FAQtab = ({ question, index, answer }) => {
    return (
      <div className='h-max md:w-[800px]'>
        {" "}
        <div
          className={`h-[60px] md:w-[800px] my-2 hover:bg-[#c5a47e]  hover:cursor-pointer  hover:text-black border-[1px] border-[#c5a47e] rounded-[10px]
            flex justify-between items-center px-10
            ${index == active ? "text-black bg-[#c5a47e]" : "text-white"}
            `}
          onClick={() => {
            if (index == active) setActive(null);
            else setActive(index);
          }}
        >
          <h3 className=' md:text-[20px] text-[14px] font-normal'>
            {question}
          </h3>
          <h3 className=' md:text-[20px] text-[14px] font-normal'>
            {active == index ? "-" : "+"}
          </h3>
        </div>
        <div
          className={`md:text-[20px] text-[14px] font-normal text-white pl-10 opacity-90 py-10 overflow-hidden transition-all duration-500 ease-in-out
          
  ${active == index ? "h-max" : "hidden"}`}
        >
          {answer}
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center md:pt-10'>
      <h2 className=' uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white'>
        What you need to <span className='text-[#c5a47e]'>know</span>
      </h2>

      <div className='flex flex-col '>
        {londonQuestions.map((que, index) => {
          return (
            <FAQtab key={index} answer={que.a} question={que.q} index={index} />
          );
        })}
      </div>

      <div className='flex md:flex-row flex-col justify-evenly items-center md:mt-[10rem] mt-10 bg-[#c5a47e] w-full md:px-20 md:py-20'>
        <h1 className='text-black md:text-[80px] text-[30px] font-[700] md:w-[35%] leading-[1] text-end'>
          A question <br />
          for you<span className='text-white'>?</span>
        </h1>

        {city !== "Dubai" ? (
          <p className='md:text-[20px] text-[14px] font-[500] opacity-90 text-black md:w-[35%] leading-[1.2] px-2 py-0 '>
            Isn't this the club that you wanted to exist and to which you always
            dreamed of being a member? Act now, before the club's full.
            Otherwise, there'll still always be space for you, but you'll have
            to wait until a membership NFT appears on the secondary market, for
            which, perhaps, you will have to pay a considerable premium (our
            Founder memberships, which quickly sold out, have traded for as much
            as an 18x multiple.)
          </p>
        ) : (
          <p className='md:text-[20px] text-[14px] font-[500] opacity-90 text-black md:w-[35%] leading-[1.2] px-2'>
            Isn't this the club that you’ve wanted to exist in Dubai and to
            which you always dreamed of being a member? Act now, before the
            club's full. Otherwise, there'll still always be space for you, but
            you'll have to wait until a membership NFT appears on the secondary
            market, for which you perhaps will have to pay a considerable
            premium (our London Founder memberships, which quickly sold out,
            have traded for as much as an 18x multiple.)
          </p>
        )}
      </div>
    </div>
  );
}

export default FAQs;
