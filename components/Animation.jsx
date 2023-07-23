"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap, SteppedEase } from "gsap";

import TypeIt from "typeit-react";
import "./index.css";
import { useGlobalContext } from "@/utils/ContextProvider";

export default function Animation({ chooseCityRef }) {
  const textRef = useRef();
  const textHeaderRef = useRef();
  const headerRef = useRef();
  const [makeFullScreen, setMakeFullScreen] = useState("");
  const { setCity } = useGlobalContext();

  useEffect(() => {
    var tl = new gsap.timeline({
      paused: true,
    });
    tl.to(textRef.current, {
      y: -320,
      duration: 1,
      delay: 4.5,
      onStart: () => {},
      onComplete: () => {
        textRef.current.style.opacity = 0;
        headerRef.current.style.opacity = 1;
        //add class to cityRef
        chooseCityRef.current.classList.remove("hidden");
        chooseCityRef.current.classList.add("flex");
      },
    });
    if (textRef.current) {
      tl.play();

      setTimeout(() => {
        textRef.current.innerHTML = 1764;
        gsap.from(textRef.current, {
          textContent: 2023,
          duration: 2,
          ease: "power1.in",
          delay: 0.5,
          snap: { textContent: 1 },
          stagger: {
            each: -9,
            onUpdate: function () {
              this.targets()[0].innerHTML = Math.ceil(
                this.targets()[0].textContent
              );
            },
          },
        });
      }, 1000);
    }
  }, [textRef.current]);

  const handleClick = (city) => {
    if (makeFullScreen === "") {
      setMakeFullScreen(city);
      gsap.to(textHeaderRef.current, {
        opacity: 0,
        duration: 0.5,
      });
      return;
    }
    setCity(city);
  };

  const handleBack = () => {
    setMakeFullScreen("");
    gsap.to(textHeaderRef.current, {
      opacity: 1,
      duration: 1,
      delary: 0.3,
    });
  };

  return (
    <div className='h-screen relative w-full  overflow-hidden flex items-center justify-center '>
      <div
        style={{
          opacity: 0,
        }}
        ref={headerRef}
      >
        <button
          onClick={handleBack}
          className={`z-50 absolute py-3 px-5 rounded-lg top-5 text-white left-5 ${
            makeFullScreen === ""
              ? " hidden"
              : makeFullScreen === "Dubai"
              ? " bg-[#c7a47c]"
              : " bg-black"
          } `}
        >
          Back
        </button>
        <img
          className=' h-12 md:lg-18 lg:h-24 left-[50%] top-2 translate-x-[-50%] mt-3  object-contain absolute z-20'
          src='/Images/logo.png'
          alt=''
        />

        <span
          ref={textHeaderRef}
          className='absolute top-[50%] z-40 left-[50%] translate-x-[-50%] translate-y-[-45%]  text-sm sm:text-xl lg:text-2xl  text-white choose_city_text'
        >
          CHOOSE YOUR CITY
        </span>

        <div
          className={`dubai_section cursor-pointer transition-all duration-100 ${
            makeFullScreen === "Dubai"
              ? " dubai_section_fullscreen"
              : makeFullScreen === "London" && " !w-[0px]"
          }  `}
          onClick={() => handleClick("Dubai")}
        >
          <div className='h-full w-full flex items-center justify-center '>
            <div
              className={`h-14 w-full flex items-center justify-start md:justify-center px-10  bg-[#c5a47ebc] ${
                makeFullScreen === "Dubai" && " justify-center"
              }`}
            >
              <span className='text-white  text-lg sm:text-[1.5rem] lg:text-[2rem] tracking-widest'>
                DUBAI
              </span>
            </div>
          </div>
        </div>
        <div
          className={`london_section cursor-pointer transition-all duration-100 ${
            makeFullScreen === "London"
              ? " london_section_fullscreen"
              : makeFullScreen === "Dubai" && " !w-[0px]"
          }`}
          onClick={() => handleClick("London")}
        >
          <div className='h-full w-full flex items-center justify-center  '>
            <div
              className={`h-14 w-full flex items-center justify-end md:justify-center p-5  bg-[#000000bc] ${
                makeFullScreen === "London" && " justify-center"
              }`}
            >
              <span className='text-white text-lg sm:text-[1.5rem] lg:text-[2rem]  font-extralight tracking-widest '>
                LONDON
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={textRef}
        className='text-[#c7a47c] text-7xl line-1 anim-typewriter z-50'
      >
        <TypeIt>2023</TypeIt>
      </div>
    </div>
  );
}
