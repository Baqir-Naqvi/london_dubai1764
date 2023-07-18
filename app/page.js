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

export default function Home() {
  const chooseCityRef = useRef(null);
  const landerRef = useRef(null);
  const contentRef = useRef(null);
  const [city, setCity] = useState(null);
  useEffect(() => {
    if (city) {
      gsap.to(contentRef.current, {
        x: 0,
        duration: 1.5,
      });
      gsap.to(landerRef.current, {
        x: "100%",
        duration: 1.5,
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
        <ChooseCity setCity={setCity} chooseCityRef={chooseCityRef} />
      </div>
      <div
        ref={contentRef}
        className={`absolute top-0 translate-x-[100%] ${!city && "hidden"}`}
      >
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Member />
        <WorldWide />
        <FAQs />
        <Membership />
        <Team />
        <Association />
        <Clubs />
        <ContactUs />
      </div>
    </main>
  );
}
