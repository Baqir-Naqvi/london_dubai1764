"use client";
import React, { useEffect, useRef } from "react";
import { gsap, SteppedEase } from "gsap";

import TypeIt from "typeit-react";

export default function Animation() {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      var tl = new gsap.timeline({
        paused: true,
      });
      tl.to(textRef.current, {
        y: -600,
        duration: 1,

        delay: 0.5,
      });
      tl.play();
    }
  }, [textRef.current]);
  return (
    <div textref={textRef} className=' border text-9xl line-1 anim-typewriter'>
      hey
      {/* <TypeIt>2023 </TypeIt> */}
    </div>
  );
}
