"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Animation from "../components/Animation";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Member from "@/components/Member";
import WorldWide from "@/components/WorldWide";
import FAQs from "@/components/FAQs";
import Membership from "@/components/Membership";
import Team from "@/components/Team";
import ChooseCity from "@/components/ChooseCity";
import Association from "@/components/Association";
import Clubs from "@/components/Clubs";
import ContactUs from "@/components/ContactUs";
import { gsap } from "gsap";
import { useGlobalContext } from "@/utils/ContextProvider";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const chooseCityRef = useRef(null);
  const landerRef = useRef(null);
  const contentRef = useRef(null);
  const { city, setCity } = useGlobalContext();

  useEffect(() => {
    if (city) {
      // landerRef.current.style.position = "absolute";
      gsap.to(landerRef.current, {
        x: "150%",
        duration: 1,
        display: "none",

        onStart: () => {},
      });
      gsap.to(contentRef.current, {
        x: 0,
        duration: 1,
      });
    }
  }, [city]);

  return (
    <main className='relative w-screen overflow-x-hidden'>
      <div
        ref={landerRef}
        className='flex bg-black  min-h-screen flex-col items-start justify-start '
      >
        <Animation chooseCityRef={chooseCityRef} />
        <ChooseCity chooseCityRef={chooseCityRef} />
      </div>
      <ParallaxProvider>
        <div
          ref={contentRef}
          className={` transition-all duration-700 translate-x-[100%] ${
            !city && "hidden"
          }`}
        >
          <Navbar />
          <HeroSection />
          <AboutUs />
          <Member />
          <WorldWide />
          {/* <FAQs /> */}
          <Membership />
          <Team />
          <Association />
          <Clubs />
          <ContactUs />
        </div>
      </ParallaxProvider>
    </main>
  );
}
