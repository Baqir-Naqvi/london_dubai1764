"use client";
import { useEffect, useRef } from "react";
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

export default function Home() {
  const chooseCityRef = useRef(null);

  return (
    <main >
    
        <div className="flex bg-black min-h-screen flex-col items-start justify-start ">
        <Animation chooseCityRef={chooseCityRef} />
        <ChooseCity chooseCityRef={chooseCityRef} />
      </div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Member />
      <WorldWide />
      <FAQs />
      <Membership />
      <Team />
    
    </main>
  );
}
