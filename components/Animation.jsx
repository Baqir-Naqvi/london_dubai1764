"use client";
import React, { useEffect, useRef } from "react";
import { gsap, SteppedEase } from "gsap";

import TypeIt from "typeit-react";
import "./index.css";
export default function Animation({ chooseCityRef }) {
  const textRef = useRef();
  const textHeaderRef = useRef();
  const headerRef = useRef();
  useEffect(() => {
    headerRef.current.style.opacity = 0;
    var tl = new gsap.timeline({
      paused: true,
    });
    tl.to(textRef.current, {
      y: -300,
      duration: 1,
      delay: 6.5,
      onStart: () => {},
      onComplete: () => {
        textRef.current.style.opacity = 0;
        headerRef.current.style.opacity = 1;
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
          duration: 4,
          ease: "power1.in",
          delay: 0.5,
          snap: { textContent: 1 },
          stagger: {
            each: -2,
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
  return (
    <div
      onPointerOver={(e) =>
        setTimeout(() => {
          textHeaderRef.current.style.opacity = 0;
        }, 200)
      }
      onPointerLeave={(e) =>
        setTimeout(() => {
          textHeaderRef.current.style.opacity = 1;
        }, 400)
      }
      className='h-screen relative w-full overflow-hidden flex items-center justify-center '
    >
      <div
        style={{
          opacity: 0,
        }}
        ref={headerRef}
      >
        <img
          className='h-24 left-[50%] top-2 translate-x-[-50%] mt-3  object-contain absolute z-20'
          src='/images/logo.png'
          alt=''
        />
        <span
          ref={textHeaderRef}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          className='absolute  z-10 text-3xl text-white choose_city_text'
        >
          CHOOSE YOUR CITY
        </span>
        <div className='dubai_section '>
          <div
            onPointerOver={(e) =>
              setTimeout(() => {
                textHeaderRef.current.style.opacity = 0;
              }, 200)
            }
            className='h-full w-full flex items-center justify-center bg-[#c5a47eb0]'
          >
            <div
              onPointerOver={(e) =>
                setTimeout(() => {
                  textHeaderRef.current.style.opacity = 0;
                }, 200)
              }
              className='h-14 w-full flex items-center justify-center opacity-100 bg-[#c5a47edc]'
            >
              <span className='text-white text-4xl'>DUBAI</span>
            </div>
          </div>
        </div>
        <div className='london_section'>
          <div
            onPointerOver={(e) =>
              setTimeout(() => {
                textHeaderRef.current.style.opacity = 0;
              }, 200)
            }
            className='h-full w-full flex items-center justify-center bg-[#2b2b2bd9] '
          >
            <div
              onPointerOver={(e) =>
                setTimeout(() => {
                  textHeaderRef.current.style.opacity = 0;
                }, 200)
              }
              className='h-14 w-full flex items-center justify-center opacity-100 bg-[#2b2b2bbe]'
            >
              <span className='text-white text-4xl '>LONDON</span>
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
