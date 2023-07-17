"use client";
import React from "react";
import { useState } from "react";

function FAQs() {
  const [active, setActive] = useState(null);

  const questions = [
    {
      q: "Why is this needed?",
      a: "Before we purchased Blacks and proved the model, there were no such clubs around the world dedicated to the space, let alone a global network of them. We strongly feel that the deep tech & disruptive innovation communities both need and deserve permanent venues. Our aim is to create a worldwide community of physical and virtual venues, where enthusiasts who share an interest in the space can socialise and network, meet like-minded individuals, engage and present, offer collaborations, get funded, become educated, provide instruction and guidance and share valuable information and knowledge. Its virtual and physical spaces offer the ideal environment and opportunity for members to interact face-to-face, to share their ideas and work together on future projects, creating entities greater than the sum of their parts.",
    },
    {
      q: "Why should I buy an NFT?",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem possimus debitis dolor dolores eligendi quibusdam praesentium! Perferendis, ullam. Perspiciatis? ",
    },
    {
      q: "How many NFTs are in the collection? ",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem possimus debitis dolor dolores eligendi quibusdam praesentium! Perferendis, ullam. Perspiciatis? ",
    },
    {
      q: "Where are the NFTs listed? ",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem possimus debitis dolor dolores eligendi quibusdam praesentium! Perferendis, ullam. Perspiciatis? ",
    },
    {
      q: "How long will it take to open other clubhouses across the globe? ",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem possimus debitis dolor dolores eligendi quibusdam praesentium! Perferendis, ullam. Perspiciatis? ",
    },
    {
      q: "What are the main benefits of being a member of Blacks, Soho? ",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem possimus debitis dolor dolores eligendi quibusdam praesentium! Perferendis, ullam. Perspiciatis? ",
    },
    {
      q: "Do you accept payments for all services and membership in crypto? ",
      a: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem possimus debitis dolor dolores eligendi quibusdam praesentium! Perferendis, ullam. Perspiciatis? ",
    },
  ];


  const FAQtab = ({ question, index ,answer}) => {
    return (
      <div className="h-max md:w-[800px]">
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
          <h3 className=" md:text-[20px] text-[14px] font-normal">
            {question}
          </h3>
          <h3 className=" md:text-[20px] text-[14px] font-normal">
            {active == index ? "+" : "-"}
          </h3>
        </div>
        <div
          className={`md:text-[20px] text-[14px] font-normal text-white pl-10 opacity-60 py-10 overflow-hidden transition-all duration-500 ease-in-out
          
  ${active == index ? "h-max" : "hidden"}`}
        >
          {answer}
        </div>
      </div>
    );
  };



  return (
    <div className="flex flex-col justify-center items-center md:mt-[10rem] md:pt-[80em] pt-[32em]">
      <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
        What you need to <span className="text-[#c5a47e]">know</span>
      </h2>

      <div className="flex flex-col ">
        {questions.map((que, index) => {
          return (
            <FAQtab key={index} answer={que.a} question={que.q} index={index} />
          );
        })}
      </div>

      <dic className="flex md:flex-row flex-col justify-evenly items-center mt-[10rem] bg-[#c5a47e] w-full md:px-20 md:py-20">
        <h1 className="text-black md:text-[80px] text-[30px] font-[700] md:w-[30%] leading-[1] text-end">
          A question <br />
          for you<span className="text-white">?</span>
        </h1>

        <p className="md:text-[20px] text-[14px] font-[500] opacity-60 text-black md:w-[35%] leading-[1.2]">
          Isn't this the club that you wanted to exist and to which you always
          dreamed of being a member? Act now, before the club's full. Otherwise,
          there'll still always be space for you, but you'll have to wait until
          a membership NFT appears on the secondary market, for which, perhaps,
          you will have to pay a considerable premium (our Founder memberships,
          which quickly sold out, have traded for as much as an 18x multiple.)
        </p>
      </dic>
    </div>
  );
}

export default FAQs;
